import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Project from './components/Project';
import SpriteIcons from './img/icons/sprite.svg';
import { ReactComponent as ResponsiveIcon } from './img/icons/responsive.svg';
import { ReactComponent as FrontendIcon } from './img/icons/frontend.svg';
import { ReactComponent as BackendIcon } from './img/icons/backend.svg';
import { ReactComponent as DeploymentIcon } from './img/icons/deployment.svg';
import datas from './data/projects';

const App = () => {
  return (
    <div className="app">
      <header id="header" className="relative">
        <nav
          id="nav"
          className="fixed top-0 left-0 right-0 bg-zinc-900 text-white z-40"
        >
          <div className="container mx-auto flex items-center justify-between py-6 px-4">
            <div>
              <a href="#header" className="text-lg uppercase">
                Hamlanreh
              </a>
            </div>
            <div className="hidden items-center space-x-4 uppercase md:flex ">
              <a href="#about" className="hover:text-cyan-700">
                About
              </a>
              <a href="#services" className="hover:text-cyan-700">
                Services
              </a>
              <a href="#projects" className="hover:text-cyan-700">
                Projects
              </a>
              <a href="#contact" className="hover:text-cyan-700">
                Contact
              </a>
            </div>
            <button className="block hamburger md:hidden focus:outline-none">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        <section id="hero" className="bg-zinc-900 text-white">
          <div className="hero-container relative z-10 container mx-auto">
            <div className="absolute top-1/2 -translate-y-1/2 text-center md:text-left">
              <p className="font-normal text-2xl my-3">Hello, I'm</p>
              <h1 className="font-bold text-7xl uppercase my-2">
                Oluwabi Ahmed
              </h1>
              <p className="font-normal text-2xl my-3">Web developer</p>
              <div className="flex items-center justify-center space-x-8 my-6 md:justify-start">
                <a
                  href="https://twitter.com/hamlanreh"
                  className="hover:scale-95"
                >
                  <svg className="w-8 h-8 fill-white">
                    <use xlinkHref={`${SpriteIcons}#icon-twitter`}></use>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-oluwabi-748844232"
                  className="hover:scale-95"
                >
                  <svg className="w-8 h-8 fill-white">
                    <use xlinkHref={`${SpriteIcons}#icon-linkedin`}></use>
                  </svg>
                </a>
                <a href="/" className="hover:scale-95">
                  <svg className="w-8 h-8 fill-white">
                    <use xlinkHref={`${SpriteIcons}#icon-facebook`}></use>
                  </svg>
                </a>
                <a
                  href="https://wa.me/+2347084345275"
                  className="hover:scale-95"
                >
                  <svg className="w-8 h-8 fill-white">
                    <use xlinkHref={`${SpriteIcons}#icon-whatsapp`}></use>
                  </svg>
                </a>
                <a
                  href="https://github.com/Hamlanreh"
                  className="hover:scale-95"
                >
                  <svg className="w-8 h-8 fill-white">
                    <use xlinkHref={`${SpriteIcons}#icon-github`}></use>
                  </svg>
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4 md:justify-start">
                <a
                  href="#contact"
                  className="bg-zinc-900 bg-opacity-80 m-2 py-2 px-6 text-lg font-bold rounded border-2 border-white hover:scale-95 active:translate-y-1"
                >
                  Hire me
                </a>
                <a
                  href="#projects"
                  className="bg-zinc-900 bg-opacity-80 m-2 py-2 px-6 text-lg font-bold rounded border-2 border-white hover:scale-95 active:translate-y-1"
                >
                  My work
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="header-svg absolute top-0 left-0 right-0 bottom-0 z-0"></div>
      </header>

      <section
        id="about"
        className="about relative bg-neutral-300 text-neutral-800 py-40"
      >
        <div className="container mx-auto mb-16">
          <h2 className="text-neutral-100 text-center text-4xl uppercase font-bold py-4">
            About Me
          </h2>
        </div>

        <div className="bg-neutral-100 mb-16">
          <div className="container mx-auto py-16 px-4 flex-col md:flex md:flex-row">
            <div className="md:ml-2 md:mr-6">
              <div className="relative bg-gray-200 w-52 h-52 overflow-hidden rounded-full mx-auto hover:scale-95">
                <img
                  src={require('./img/about-me.jpg')}
                  alt=""
                  className="w-full h-full object-cover z-0"
                />
              </div>
            </div>

            <div className="text-center mt-16 md:text-left md:mt-0">
              <h3 className="text-3xl font-bold uppercase py-2 mb-6 md:text-4xl">
                Hi, I'm Oluwabi Ahmed
              </h3>
              <p className="text-2xl font-bold capitalize mb-4">
                Web developer
              </p>
              <p className="text-lg font-semibold py-2">
                I'm a web developer who is able to realise projects from the
                ground up. I am well versed in all the key languages and am able
                to design, code, debug and deploy in an organised and efficient
                manner. My self learning process has given me a lot of
                opportunities to develop my critical thinking and problem
                solving skills, I’m able to communicate, organize and adapt to
                different situations. I'm an individual who is highly motivated,
                willing to learn and develop my soft and hard skills which would
                serve me and my employer in the future.
              </p>
              <a
                href="./img/Resume-Oluwabi-Ahmed-CV.pdf"
                download="Resume-Oluwabi-Ahmed-CV.pdf"
                className="inline-block text-base text-center font-semibold uppercase py-2 mt-8 w-64 border-2 border-neutral-800 rounded-sm hover:bg-neutral-800 hover:text-neutral-100 hover:scale-95 active:translate-y-1"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto mb-16">
          <h3 className="text-neutral-100 text-center text-3xl uppercase font-bold py-4">
            Skills
          </h3>
        </div>

        <div>
          <div className="mx-auto text-neutral-100">
            <div className="text-center uppercase text-xl flex flex-wrap row space-x-10 justify-center">
              <div className="w-28 p-2 flex flex-col items-center hover:scale-95">
                <svg className="w-12 h-12 fill-orange-600">
                  <use xlinkHref={`${SpriteIcons}#icon-html-five`}></use>
                </svg>
                <span className="block mt-8">html</span>
              </div>
              <div className="w-28 p-2 flex flex-col items-center hover:scale-95">
                <svg className="w-12 h-12 fill-cyan-600">
                  <use xlinkHref={`${SpriteIcons}#icon-css31`}></use>
                </svg>
                <span className="block mt-8">css</span>
              </div>
              <div className="w-28 p-2 flex flex-col items-center hover:scale-95">
                <svg className="w-12 h-12">
                  <use xlinkHref={`${SpriteIcons}#icon-javascript`}></use>
                </svg>
                <span className="block mt-8">javascript</span>
              </div>
              <div className="w-28 p-2 flex flex-col items-center hover:scale-95">
                <svg className="w-12 h-12">
                  <use xlinkHref={`${SpriteIcons}#icon-react`}></use>
                </svg>
                <span className="block mt-8">react</span>
              </div>
              <div className="w-28 p-2 flex flex-col items-center hover:scale-95">
                <svg className="w-12 h-12">
                  <use xlinkHref={`${SpriteIcons}#icon-node-dot-js`}></use>
                </svg>
                <span className="block mt-8">nodejs</span>
              </div>
              <div className="w-28 p-2 flex flex-col items-center hover:scale-95">
                <svg className="w-12 h-12">
                  <use xlinkHref={`${SpriteIcons}#icon-mongodb`}></use>
                </svg>
                <span className="block mt-8">mongodb</span>
              </div>
              <div className="w-28 p-2 flex flex-col items-center hover:scale-95">
                <svg className="w-12 h-12">
                  <use xlinkHref={`${SpriteIcons}#icon-python`}></use>
                </svg>
                <span className="block mt-8">python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services bg-neutral-900">
        <div className="container mx-auto py-80">
          <div className="py-2 mb-4">
            <h2 className="font-bold text-4xl text-center uppercase text-white mb-10 py-2 md:text-left">
              Services
            </h2>
          </div>

          <div className="service-list text-white mb-4">
            <article className="bg-slate-700 p-4 flex flex-col items-start rounded md:flex-row hover:scale-95">
              <div className="w-full flex items-start justify-center mr-0 md:justify-start md:mr-5 md:w-fit">
                <ResponsiveIcon className="w-28 h-28 fill-white md:w-24 md:h-24" />
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="mb-1 font-semibold text-base uppercase text-center md:text-left">
                  Responsive Interface
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt ea, tempore omnis provident incidunt alias a eos
                  delectus sunt accusamus aliquid odio eveniet maxime.
                </p>
              </div>
            </article>

            <article className="bg-slate-700 p-4 flex flex-col items-start rounded md:flex-row hover:scale-95">
              <div className="w-full flex items-start justify-center mr-0 md:justify-start md:mr-5 md:w-fit">
                <FrontendIcon className="w-28 h-28 fill-white md:w-24 md:h-24" />
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="mb-1 font-semibold text-base uppercase text-center md:text-left">
                  Front-end Design
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt ea, tempore omnis provident incidunt alias a eos
                  delectus sunt accusamus aliquid odio eveniet maxime.
                </p>
              </div>
            </article>

            <article className="bg-slate-700 p-4 flex flex-col items-start rounded md:flex-row hover:scale-95">
              <div className="w-full flex items-start justify-center mr-0 md:justify-start md:mr-5 md:w-fit">
                <BackendIcon className="w-28 h-28 fill-white md:w-24 md:h-24" />
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="mb-1 font-semibold text-base uppercase text-center md:text-left">
                  Back-end Development
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt ea, tempore omnis provident incidunt alias a eos
                  delectus sunt accusamus aliquid odio eveniet maxime.
                </p>
              </div>
            </article>

            <article className="bg-slate-700 p-4 flex flex-col items-start rounded md:flex-row hover:scale-95">
              <div className="w-full flex items-start justify-center mr-0 md:justify-start md:mr-5 md:w-fit">
                <DeploymentIcon className="w-28 h-28 fill-white md:w-24 md:h-24" />
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="mb-1 font-semibold text-base uppercase text-center md:text-left">
                  Deployment
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt ea, tempore omnis provident incidunt alias a eos
                  delectus sunt accusamus aliquid odio eveniet maxime.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <main id="projects" className="projects bg-neutral-300">
        <div className="container mx-auto py-80">
          <h2 className="font-bold text-4xl text-neutral-900 text-center uppercase mb-20 py-2 md:text-left">
            My Projects
          </h2>
          <div className="project-list">
            {datas.map((data, index) => (
              <Project key={index} {...data} />
            ))}
          </div>
        </div>
      </main>

      <section
        id="contact"
        className="contact bg-neutral-100 py-80 flex items-center"
      >
        <div className="container bg-white mx-auto p-8 flex flex-col md:flex-row">
          <div className="w-full mr-0 md:mr-10 md:w-2/3">
            <h2 className="text-3xl uppercase font-bold mb-3">Contact me</h2>
            <p className="text-lg mb-6">
              Interested in working together? Fill out the form below with some
              info about your project and I will get back to you as soon as I
              can. Please allow a couple days for me to respond.
            </p>
            <form>
              <div className="flex flex-col mb-2 gap-x-6 gap-y-4 md:flex-row md:gap-y-0">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="name" className="uppercase font-bold mb-4">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="outline-none border-none p-2 bg-neutral-200"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="email" className="uppercase font-bold mb-4">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="outline-none border-none p-2 bg-neutral-200"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <label htmlFor="message" className="uppercase font-bold mb-4">
                  Message
                </label>
                <textarea
                  id="message"
                  className="outline-none border-none h-52 p-2 bg-neutral-200 resize-none overflow-y-scroll"
                ></textarea>
              </div>
              <button
                type="submit"
                className="outline-none border-none block py-3 mt-8 mx-auto w-56 bg-neutral-900 uppercase text-neutral-100 font-bold md:mx-0 md:ml-auto hover:scale-95"
              >
                Send
              </button>
            </form>
          </div>

          <div className="w-full mt-32 flex flex-col gap-y-10 text-lg text-center md:w-1/3 md:mt-0 md:text-start">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">Email</h3>
              <p>Oluwabihammed49@gmail.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">Telephone</h3>
              <p>+234 705 6178 134</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">Location</h3>
              <p>Lagos, Nigeria</p>
            </div>

            <div className="order-2 my-4 py-4 flex items-start justify-center space-x-6 md:my-0 md:w-1/4 md:justify-start md:order-3">
              <a href="https://twitter.com/hamlanreh">
                <svg className="w-8 h-8 fill-neutral-800 hover:scale-95">
                  <use xlinkHref={`${SpriteIcons}#icon-twitter`}></use>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ahmed-oluwabi-748844232">
                <svg className="w-8 h-8 fill-neutral-800 hover:scale-95">
                  <use xlinkHref={`${SpriteIcons}#icon-linkedin`}></use>
                </svg>
              </a>
              <a href="/">
                <svg className="w-8 h-8 fill-neutral-800 hover:scale-95">
                  <use xlinkHref={`${SpriteIcons}#icon-facebook`}></use>
                </svg>
              </a>
              <a href="https://wa.me/+2347084345275">
                <svg className="w-8 h-8 fill-neutral-800 hover:scale-95">
                  <use xlinkHref={`${SpriteIcons}#icon-whatsapp`}></use>
                </svg>
              </a>
              <a href="https://github.com/Hamlanreh">
                <svg className="w-8 h-8 fill-neutral-800 hover:scale-95">
                  <use xlinkHref={`${SpriteIcons}#icon-github`}></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-neutral-800 text-white">
        <div className="container mx-auto py-8 text-center md:text-start">
          <p className="p-4 md:p-0">
            Oluwabi Ahmed Portfolio - Copyright &copy; 2022. All right reserved
            and this website should only be used for learning and non-commercial
            purposes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
