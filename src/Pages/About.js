import PageTitle from '../Components/PageTitle';
import SocialMediaIconsLg from '../Components/SocialMediaIconsLg';
import reza400 from '../img/reza-400.jpg';
import reza800 from '../img/reza-800.jpg';

const About = () => {
  return (
    <div className="min-h-screen w-full lg:pl-32 bg-zinc-100 dark:bg-zinc-800">
      <div className="container flex flex-col justify-center items-start w-5/6 mx-auto py-20 space-y-3">
        <PageTitle title={'About Me'} bg={'About'} />

        {/* imgae and description section */}
        <div className="w-full flex flex-col lg:flex-row justify-center gap-20 pb-10 2xl:pb-20">
          <div className="relative xs:w-96 mx-auto lg:mx-0">
            {/* left column - image */}
            <div className="group">
              <img
                src={reza400}
                alt="Reza Vali"
                srcSet={`${reza400}, ${reza800} 2x`}
                className="max-w-80 max-h-96 z-10 relative group-hover:scale-75 group-hover:grayscale transition-all duration-1000"
              />
              <span className="hidden xs:block box-content absolute w-80 h-96 top-10 group-hover:-top-2 left-10 group-hover:-left-2 border-8 border-rose-500 dark:border-yellow-400 transition-all duration-1000"></span>
            </div>
          </div>
          <div className="w-auto lg:w-1/2 xs:pt-12 lg:pt-0">
            {/* right column - text */}
            <div className="text-zinc-600 dark:text-zinc-200 space-y-3">
              <p className="text-2xl">
                My name is{' '}
                <span className="text-rose-500 dark:text-yellow-400">
                  Reza Vali
                </span>
              </p>
              <p className="">
                I'm a <strong>front-end</strong> and <strong>blockchain</strong>{' '}
                developer. I have a serious passion for emerging technologies
                such as blockchain, cryptocurrency, and web 3.0.
              </p>
              <p className="">
                I am a fighter and I enjoy challenges.{' '}
                <strong>Solving problems</strong>, in creative and compelling
                ways, is what I'm most passionate about.
              </p>
              <p className="">
                I'd like to work in teams who value quality, creativity,
                innovation, prerformance, and attention to details.
              </p>
              <p>
                The <strong>activities</strong> I do in my spare time are:
                weight training, reading books (Eckhart Tolle is my favorite),
                watching English movies, or just spending time with family or
                friends.
              </p>
              <SocialMediaIconsLg />
            </div>
          </div>
        </div>

        {/* info card */}
        <div className="w-full p-5 flex justify-around items-center flex-wrap gap-10 text-sm md:text-base border-2 border-zinc-400 rounded-lg shadow-lg dark:shadow-black">
          <span className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-rose-500 dark:text-yellow-500 pb-2">
              Name
            </span>
            <span className="text-zinc-500 dark:text-zinc-300">Reza Vali</span>
          </span>
          <span className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-rose-500 dark:text-yellow-500 pb-2">
              Age
            </span>
            <span className="text-zinc-500 dark:text-zinc-300">41</span>
          </span>
          <span className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-rose-500 dark:text-yellow-500 pb-2">
              Nationality
            </span>
            <span className="text-zinc-500 dark:text-zinc-300">Iranian</span>
          </span>
          <span className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-rose-500 dark:text-yellow-500 pb-2">
              Location
            </span>
            <span className="text-zinc-500 dark:text-zinc-300">
              Izmir, Turkey
            </span>
          </span>
          <span className="flex flex-col justify-center items-center">
            <span className="font-extrabold text-rose-500 dark:text-yellow-500 pb-2">
              Languages
            </span>
            <span className="text-zinc-500 dark:text-zinc-300">
              English, Persian
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
