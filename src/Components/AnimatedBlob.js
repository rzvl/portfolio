import { spline } from '@georgedoescode/spline';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SimplexNoise from 'simplex-noise';

const AnimatedBlob = () => {
  const [path, setPath] = useState('');

  const requestRef = useRef();
  const startColor = useRef();
  const stopColor = useRef();
  const hueNoiseOffset = useRef(0);
  const noiseStep = useRef(0.005);

  // CREATE POINTS FUNCTION

  const createPoints = () => {
    const points = [];
    // how many points do we need
    const numPoints = 6;
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 75;

    for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;

      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;

      // store the point
      points.push({
        x: x,
        y: y,
        /* we need to keep a reference to the point's original {x, y} coordinates 
      for when we modulate the values later */
        originX: x,
        originY: y,
        //
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    return points;
  };

  const points = createPoints();

  // ANIMATE FUNCTION

  const simplex = useMemo(() => new SimplexNoise(), []);

  const animate = useCallback(() => {
    setPath(spline(points, 1, true));

    const map = (n, start1, end1, start2, end2) => {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    };

    // const simplex = new SimplexNoise();

    const noise = (x, y) => {
      return simplex.noise2D(x, y);
    };

    // for every point...
    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
      // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
      const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
      const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

      // update the point's current coordinates
      point.x = x;
      point.y = y;

      // progress the point's x, y values through "time"
      point.noiseOffsetX += noiseStep.current;
      point.noiseOffsetY += noiseStep.current;
    }

    const hueNoise = noise(hueNoiseOffset.current, hueNoiseOffset.current);
    const hue = map(hueNoise, -1, 1, 0, 360);

    startColor.current = `hsl(${hue}, 100%, 75%)`;
    stopColor.current = `hsl(${hue + 60}, 100%, 75%)`;

    hueNoiseOffset.current += noiseStep.current / 6;

    requestAnimationFrame(animate);
  }, [points, hueNoiseOffset, noiseStep, simplex]);

  // USEEFFECT FUNCTION

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  // COMPONENT

  return (
    <>
      <svg viewBox="0 0 200 200" className="w-5/6 h-5/6">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop
              id="gradientStop1"
              offset="0%"
              stopColor={startColor.current}
            />
            <stop
              id="gradientStop2 "
              offset="100%"
              stopColor={stopColor.current}
            />
          </linearGradient>
        </defs>
        <path
          d={path}
          fill="url('#gradient')"
          onMouseOver={() => {
            noiseStep.current = 0.01;
          }}
          onMouseLeave={() => {
            noiseStep.current = 0.005;
          }}
        ></path>
      </svg>
    </>
  );
};

export default AnimatedBlob;
