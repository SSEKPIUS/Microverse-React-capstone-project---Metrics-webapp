import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './download.jpeg';

const Cities = () => {
  const cities = {
    1: 'London',
    2: 'Paris',
    3: 'Rome',
    4: 'Madrid',
    5: 'Berlin',
    6: 'Moscow',
    7: 'Istanbul',
    8: 'Tokyo',
    9: 'Beijing',
    10: 'Sydney',
    11: 'New York',
    12: 'Mexico City',
    13: 'Rio de Janeiro',
    14: 'Singapore',
    15: 'Bangkok',
    16: 'Hong Kong',
    17: 'Dubai',
    18: 'Mumbai',
    19: 'Johannesburg',
  };

  const images = [img, img];
  return (
    <div>
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex flex-row w-fit">
          {Object.keys(cities).map((key) => (
            <div key={key} className="w-80 h-52 border border-black">
              {cities[key]}
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full">
        <div className="flex flex-row flex-wrap">
          {Object.keys(cities).map((key) => (
            <div
              key={key}
              style={{ backgroundImage: `url("${images[Math.floor(Math.random() * images.length)]}")` }}
              className="w-1/2 md:w-2/6 lg:w-1/4 h-52 border border-black"
            >
              {cities[key]}
            </div>
          ))}
        </div>
      </div>

      <span>
        Cities
        <NavLink to="/city">to city</NavLink>
      </span>
    </div>
  );
};

export default Cities;
