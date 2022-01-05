import PageTitle from '../Components/PageTitle';
import ProjectCard from '../Components/ProjectCard';
import PortfolioImg from '../img/portfolio.png';

const Works = () => {
  const portfolioDesc = (
    <>
      This is a <span className="font-bold">portfolio website</span> (the
      website you're browsing now) which I developed to showcase my recent works
      and provide some infomation about me, myself, and I...{' '}
      <span className="italic">React</span> was used for developing and{' '}
      <span className="italic">Tailwind CSS</span> for styling the site.
    </>
  );

  return (
    <div className="min-h-screen w-full lg:pl-32 bg-zinc-100 dark:bg-zinc-800">
      <div className="container flex flex-col justify-center items-start mx-auto py-20 space-y-3">
        <PageTitle title={'My Works'} bg={'Works'} />
        <ProjectCard
          src={PortfolioImg}
          alt={'my portfolio website'}
          tags={['react', 'tailwind']}
          title={'My Portfolio Site'}
          description={portfolioDesc}
          siteUrl={'/'}
          sourceUrl={'https://github.com/rzvl/portfolio'}
          hideSourceUrl={'false'}
        />
      </div>
    </div>
  );
};

export default Works;
