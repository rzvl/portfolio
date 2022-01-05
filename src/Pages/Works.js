import PageTitle from '../Components/PageTitle';
import ProjectCard from '../Components/ProjectCard';

const Works = () => {
  return (
    <div className="min-h-screen w-full lg:pl-32 bg-zinc-100 dark:bg-zinc-800">
      <div className="container flex flex-col justify-center items-start mx-auto py-20 space-y-3">
        <PageTitle title={'My Works'} bg={'Works'} />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Works;
