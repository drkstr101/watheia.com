import { ChevronRightIcon } from '@heroicons/react/20/solid';
import CloudIllustration from '../../cloud-illustration';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <Link href="/contact" legacyBehavior passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-teal-100 sm:text-base lg:text-sm xl:text-base">
                  <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    Hire us
                  </span>
                  <span className="ml-4 text-sm">Book free consultation</span>
                  <ChevronRightIcon
                    className="ml-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </Link>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">We make technology</span>
                <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                  Work for you
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Our lean approach to project management creates real business
                value with excised exposure to risk.
              </p>
              <div className="mt-10 sm:mt-12">
                <form
                  action="/demo"
                  method="GET"
                  className="sm:mx-auto sm:max-w-xl lg:mx-0"
                >
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="name" className="sr-only">
                        User name
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoFocus
                        placeholder="Enter a user name..."
                        className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        data-testid="wa-hero-name-input"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                      >
                        Go realtime
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    Clicking this button is a tacit agreement to our{' '}
                    <Link
                      href="/terms-and-conditions"
                      className="font-medium hover:underline text-white"
                    >
                      terms and conditions
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <CloudIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
