import projects from '../data/projects';
import Button from './Button';

const ProjectCard = () => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="px-4 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-16">
      {projects
        .slice(0)
        .reverse()
        .map(project => {
          return (
            <div
              key={project.id}
              className="flex flex-col max-w-screen-lg overflow-hidden mb-24 last:mb-0 bg-zinc-50 dark:bg-zinc-900 border-2 border-rose-500 dark:border-yellow-400 rounded-lg shadow-xl dark:shadow-black lg:flex-row sm:mx-auto"
            >
              <div className="relative lg:w-1/2">
                <img
                  src={project.imgUrl}
                  alt={project.imgAlt}
                  className="object-fill lg:object-cover object-left w-full lg:absolute lg:h-full"
                />
                <svg
                  className="absolute top-0 right-0 hidden h-full text-zinc-50 dark:text-zinc-800 lg:inline-block"
                  viewBox="0 0 20 104"
                  fill="currentColor"
                >
                  <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center p-8 bg-zinc-50 dark:bg-zinc-800 lg:p-16 lg:pl-10 lg:w-1/2">
                <ul>
                  {project.tags.map(tag => (
                    <li
                      key={tag}
                      className="inline-block px-3 py-1 mb-4 mr-2 text-xs font-medium tracking-wider text-rose-600 dark:text-yellow-700 uppercase bg-rose-200 dark:bg-yellow-200 rounded-full"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <h5 className="mb-3 text-3xl font-extrabold leading-10 text-zinc-800 dark:text-zinc-200 sm:text-4xl">
                  {project.title}
                </h5>
                <p className="py-5 mb-5 text-zinc-800 dark:text-zinc-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Button
                    type="a"
                    text="Visit Site"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  />
                  <a
                    href={project.projectSrc}
                    target="_blank"
                    rel="noreferrer"
                    aria-label=""
                    className={classNames(
                      project.hideSrcBtn === 'true' ? 'hidden' : 'inline-flex',
                      'items-center text-lg underline transition-colors duration-300 text-deep-purple-accent-400 text-zinc-800 dark:text-zinc-100 hover:text-rose-600 dark:hover:text-yellow-400'
                    )}
                  >
                    View Source
                    <svg
                      className="inline-block w-2 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectCard;
