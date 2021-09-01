import React from 'react';

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font border-solid border-b-2 border-purple-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-purple-500 hover:text-purple-600">
              TokBox Client
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-purple-900 hover:text-purple-400">
              Create Session
            </a>
            <a className="mr-5 text-purple-900 hover:text-purple-400">
              Join Session
            </a>
          </nav>
          <button
            className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 border-0 py-1 px-6 focus:outline-none  rounded text-base mt-4 md:mt-0"
            onClick={(e) => window.close()}
          >
            LEAVE
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
