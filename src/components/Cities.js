import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getZones } from '../redux/Zones';
import imagesx from './images/Images';
import CitiesList from './CitiesList';

const Cities = () => {
  const { zones } = useSelector((state) => state.zones);
  const dispatch = useDispatch();
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
  const images = imagesx();
  useEffect(() => {
    dispatch(getZones(cities[1]));
  }, []);

  useEffect(() => {
    console.log('zones updatd');
  }, [zones]);

  return (
    <div>
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex flex-row w-fit">
          {Object.keys(cities).map((key) => (
            <div key={key} className="w-80 h-52 flex flex-row p-5">
              <div
                style={{
                  backgroundImage: `url("${images[Math.floor(Math.random() * images.length)]}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                }}
                className=" basis-1/2"
              />
              <div className=" font-bold text-2xl capitalize flex flex-col">
                <span>{cities[key]}</span>
                <input type="button" value="Select" className=" mt-auto mb-0 text-white text-sm cursor-pointer hover:text-gray-500" onClick={() => dispatch(getZones(cities[key]))} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full">
        <CitiesList images={images} />
      </div>
    </div>
  );
};

export default Cities;
