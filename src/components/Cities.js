/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { getZones } from '../redux/Zones';
import imagesx from './images/Images';

const Cities = () => {
  const { zones = [] } = useSelector((state) => state.zones);
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

  const shade = [false, 0];
  let start = true;
  const getShade = () => {
    if (start) {
      start = false;
      return 'striped';
    }
    if (shade[1] > 1) {
      shade[0] = !shade[0];
      shade[1] = -1;
    }
    shade[0] = shade[1] > 1 ? !shade[0] : shade[0];
    shade[1] += 1;
    return shade[0] === true ? 'striped' : '';
  };

  const images = imagesx();
  useEffect(() => {
    if (zones.length === 0) dispatch(getZones(cities[1]));
  });

  return (
    <div>
      <div className="overflow-x-scroll overflow-y-hidden scrollbar-hide">
        <div className="flex flex-row w-fit">
          {Object.keys(cities).map((key) => (
            <div key={key} className="w-80 h-52 flex flex-row p-5">
              <div
                style={{
                  backgroundImage: `url("${images[Math.floor(Math.random() * images.length)]}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                }}
                onClick={() => dispatch(getZones(cities[key]))}
                className=" w-96 h-96"
                aria-hidden="true"
              />
              <div className=" font-bold text-2xl capitalize flex flex-col">
                <span>{cities[key]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full">
        <span className=" ml-2 text-gray-500s font-medium">
          Zones BY Cities
          <span className=" font-thin ml-2">(Sroll Right)</span>
        </span>
        <div className="flex flex-row flex-wrap gap-0 striped">
          {
            zones.map((zone) => (
              <div key={(`${uniqid()}`)} className="w-1/2 md:w-2/6 lg:w-1/4 h-52 relative p-5">
                {/* <div
                    style={{
                    backgroundImage: `url("${img09}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', filter: 'blur(0px)',
                    }}
                    className=" w-full h-full"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 items-end justify-end text-white pb-2"
                    onClick={() => { navigate('/city', { state: { lat: zone.lat, lon: zone.lon, name: zone.name } }); }}
                    aria-hidden="true"
                >
                    <span className=" font-extrabold text-xl text-gray-100 mr-2 shadow-sm drop-shadow-lg shadow-black">{zone.name}</span>
                    <span className="mr-2">
                    {zone.country}
                    </span>
                    <span className="mr-2">
                    <span className=" text-black capitalize mr-2">lat:</span>
                    {zone.lat}
                    </span>
                    <span className="mr-2">
                    <span className=" text-black capitalize mr-2">lon:</span>
                    {zone.lon}
                    </span>
                </div> */}
              </div>
            ))
      }
        </div>
      </div>
    </div>
  );
};

export default Cities;
