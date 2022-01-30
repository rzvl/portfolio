import img1 from '../img/colmar.png';
import img2 from '../img/portfolio.png';
import img3 from '../img/coinspy.png';

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
  {
    id: 3,
    imgUrl: img3,
    imgAlt: 'CoinSpy Websit',
    tags: ['react', 'redux', 'styled components', 'rest api', 'charts.js'],
    title: 'CoinSpy App',
    description: (
      <>
        CoinSpy is a crypto info app which delivers reliable and up-to-date data
        and news about cryptocurrencies. Redux was used for state management and
        api manipulation. Charts.js was also used for creating charts.
      </>
    ),
    projectUrl: 'https://coin-spy.netlify.app/',
    projectSrc: 'https://github.com/rzvl/coinspy',
    hideSrcBtn: 'false',
  },
];

export default projects;
