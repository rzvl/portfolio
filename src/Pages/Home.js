import Typewriter from 'typewriter-effect';
import BorderlessBtn from '../Components/BorderlessBtn';

const Home = () => {
  return (
    <div className="min-h-screen w-full lg:pl-32 bg-gradient-to-tl from-rose-100Name to-teal-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto py-20">
        {/* Code Editor Window */}
        <div className="w-5/6 md:w-4/5 lg:w-3/4 mx-auto font-mono border border-zinc-400 dark:border-zinc-500 rounded bg-zinc-200 dark:bg-gray-800 shadow-2xl dark:shadow-xl dark:shadow-black">
          {/* editor's title bar */}
          <div className="p-4 flex items-center justify-between relative bg-zinc-300 dark:bg-gray-900 border-b border-zinc-400 dark:border-zinc-500">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h3 className="font-sans text-lg text-zinc-500 dark:text-zinc-300">
              rezavali.me
            </h3>
          </div>
          {/* editor's content */}
          <div className="grid grid-cols-[30px_30px_auto] w-full">
            <div className="mx-auto my-auto text-zinc-500">1</div>
            <div className="w-[1px] h-full row-span-6 bg-zinc-400 dark:bg-zinc-500"></div>
            <div className="py-3 text-lg">
              <span className="text-zinc-500">&lt;</span>
              <span className="text-red-400">hi </span>
              <span className="text-orange-400 italic">myName</span>
              <span className="text-zinc-500">=</span>
              <span className="text-green-500">&quot;reza&quot;</span>
              <span className="text-zinc-500">&gt;</span>
            </div>

            <div className="mx-auto my-auto text-zinc-500">2</div>
            <div className="py-3 text-4xl tracking-tight text-zinc-500">
              I'm a
            </div>

            <div className="mx-auto my-auto text-zinc-500">3</div>
            <div className="py-3 text-6xl sm:text-7xl lg:text-8xl tracking-tight text-rose-500 dark:text-yellow-400">
              <Typewriter
                options={{
                  strings: ['Front-End', 'Blockchain', 'React'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="mx-auto my-auto text-zinc-500">4</div>
            <div className="py-3 text-6xl sm:text-7xl lg:text-8xl tracking-tight text-teal-500 dark:text-blue-400">
              Developer
            </div>

            <div className="mx-auto my-auto text-zinc-500">5</div>
            <div className="py-3 text-lg">
              <span className="text-zinc-500">&lt;/</span>
              <span className="text-red-400">hi</span>
              <span className="text-zinc-500">&gt;</span>
            </div>

            <div className="mx-auto my-auto text-zinc-500">6</div>
            <div className="py-10 text-xl flex flex-row flex-wrap gap-2 items-center">
              <span className="text-zinc-500">&lt;!--</span>
              <BorderlessBtn btnText="Contact Me" link="contact" />
              <span className="text-zinc-500">--&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
