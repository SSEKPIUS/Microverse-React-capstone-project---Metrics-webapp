import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import img09 from './images/09.png';

const CitiesList = () => {
  const { zones } = useSelector((state) => state.zones);
  useEffect(() => {
  }, [zones]);

  return (
    <div className="flex flex-row flex-wrap">
      {zones.map((zone, n) => (
        <div
          key={n}
          className="w-1/2 md:w-2/6 lg:w-1/4 h-52 relative p-5"
        >
          <div
            style={{
              backgroundImage: `url("${img09}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', filter: 'blur(1px)',
            }}
            className=" w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 items-center justify-center text-white ">
            <span className=" font-extrabold text-xl">{zone.name}</span>
            <span>
              {zone.country}
            </span>
            <span>
              <span>lat:</span>
              {zone.lat}
            </span>
            <span>
              {' '}
              <span>lon:</span>
              {zone.lon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CitiesList;
