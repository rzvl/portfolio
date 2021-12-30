import PageTitle from '../Components/PageTitle';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Button from '../Components/Button';
import SocialMediaIconsLg from '../Components/SocialMediaIconsLg';

const Contact = () => {
  return (
    <div className="min-h-screen w-full lg:pl-32 bg-zinc-100 dark:bg-zinc-800">
      <div className="container flex flex-col justify-center items-start w-5/6 mx-auto py-20 space-y-3">
        <PageTitle title={'Contact Me'} bg={'contact'} />
        {/* left and right columns */}
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          {/* left column (contact info) */}
          <div className="py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8  xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-rose-500 dark:text-yellow-400 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 leading-6 text-zinc-500 dark:text-zinc-300">
                If you're interested to work with me, or want to just say hello
                or ask questions, feel free to drop me a line using this contact
                form.
              </p>
              <p className="mt-3 leading-6 text-zinc-500 dark:text-zinc-300">
                Please allow a couple of days for me to respond.
              </p>
              <p className="mt-3 leading-6 text-zinc-500 dark:text-zinc-300">
                You may also reach out to me via the methods below:
              </p>

              <dl className="mt-8 text-base text-zinc-500 dark:text-zinc-300">
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-zinc-400 dark:text-zinc-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+98 935 246 9290</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-zinc-400 dark:text-zinc-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">admin@rezavali.me</span>
                  </dd>
                </div>
              </dl>
              <SocialMediaIconsLg />
            </div>
          </div>
          {/* right column (form) */}
          <div className="bg-zinc-800 dark:bg-zinc-100 py-12 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 rounded-lg">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full_name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 dark:focus:ring-yellow-500 focus:border-rose-500 dark:focus:border-yellow-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 dark:focus:ring-yellow-500 focus:border-rose-500 dark:focus:border-yellow-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 dark:focus:ring-yellow-500 focus:border-rose-500 dark:focus:border-yellow-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-500 dark:focus:ring-yellow-500 focus:border-rose-500 dark:focus:border-yellow-500 border-gray-300 rounded-md"
                    placeholder="Message"
                    defaultValue={''}
                  />
                </div>
                <Button type={'submit'} btnText={'Submit'} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
