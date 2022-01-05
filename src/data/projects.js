import img1 from '../img/colmar.png';
import img2 from '../img/portfolio.png';

const projects = [
  {
    id: 1,
    imgUrl: img1,
    imgAlt: "Colmar University's Home Page",
    tags: ['HTML5', 'CSS3'],
    title: 'Colmar University',
    description: (
      <>
        This single-page project was developed to serve as the home page for{' '}
        <strong>Colmar</strong>, a <em>fictional</em> university. The website's
        wireframe, images, and video were provided by{' '}
        <strong>Codecademy</strong>.
      </>
    ),
    projectUrl: 'https://rzvl.github.io/colmar/',
    projectSrc: 'https://github.com/rzvl/colmar',
    hideSrcBtn: 'false',
  },
  {
    id: 2,
    imgUrl: img2,
    imgAlt: 'my portfolio website',
    tags: ['react', 'tailwind'],
    title: 'My Portfolio Site',
    description: (
      <>
        This is a <span className="font-bold">portfolio website</span> (the
        website you're browsing now) which I developed to showcase my recent
        works and provide some infomation about me, myself, and I...{' '}
        <span className="italic">React</span> was used for developing and{' '}
        <span className="italic">Tailwind CSS</span> for styling the site.
      </>
    ),
    projectUrl: '/',
    projectSrc: 'https://github.com/rzvl/portfolio',
    hideSrcBtn: 'false',
  },
];

export default projects;
