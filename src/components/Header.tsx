import React from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font border-solid border-b-2 border-purple-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/#"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span>
              <img className="h-8" src={logo} alt="logo" />
            </span>
          </a>
          <a
            href="/#"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl text-purple-500 hover:text-purple-600">
              TokBox Client
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap flex-c items-center text-base justify-center">
            <a href="/#" className="mr-5 text-purple-900 hover:text-purple-400">
              Create Session
            </a>
            <a href="/#" className="mr-5 text-purple-900 hover:text-purple-400">
              Join Session
            </a>
          </nav>
          <NavLink
            to="/"
            className="inline-flex items-center text-white bg-purple-500 hover:bg-purple-600 border-0 py-1 px-6 focus:outline-none  rounded text-base mt-4 md:mt-0"
            onClick={(e) => {
              // window.open('about:blank', '_self');
              // window.close();
            }}
          >
            HOME
          </NavLink>
        </div>
      </header>
    </div>
  );
}
