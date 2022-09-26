import React from 'react';
import SpriteIcons from '../img/icons/sprite.svg';

const projectItem = ({ name, stack, image, github, link }) => {
  return (
    <article className="project-item bg-neutral-100 overflow-hidden rounded hover:-rotate-2">
      <div className="w-full h-48">
        <img
          src={require(image)}
          alt={name}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      </div>

      <div className="p-4  text-neutral-800 flex flex-col">
        <div className="mb-4">
          <a
            href={link}
            className="inline-block uppercase text-lg font-medium mb-2"
          >
            {name}
          </a>
          <ul className="flex flex-wrap uppercase items-center py-2 mb-2 text-xs text-gray-600">
            {stack.map((lang, index) => (
              <li
                key={index}
                className="py-0.5 px-2 my-1 mr-1 rounded bg-gray-300"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4 mb-2 mt-auto text-xs">
          <a
            href={github}
            className="flex-1 flex items-center bg-neutral-800 border-2 border-neutral-800 py-1 px-2 rounded text-white hover:scale-95 active:translate-y-1"
          >
            <svg className="w-4 h-4 fill-white">
              <use xlinkHref={`${SpriteIcons}#icon-github`}></use>
            </svg>
            <span className="ml-2">Github</span>
          </a>
          <a
            href={link}
            className="flex-1 flex items-center bg-neutral-800 border-2 border-neutral-800 py-1 px-2 rounded text-white hover:scale-95 active:translate-y-1"
          >
            <svg className="w-4 h-4 fill-white">
              <use xlinkHref={`${SpriteIcons}#icon-new-tab`}></use>
            </svg>
            <span className="ml-2">Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default projectItem;
