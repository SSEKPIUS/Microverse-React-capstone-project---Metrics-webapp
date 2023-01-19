import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img09 from './images/09.png';

const CitiesList = () => {
  const navigate = useNavigate();
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
              backgroundImage: `url("${img09}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', filter: 'blur(2px)',
            }}
            className=" w-full h-full"
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 items-center justify-center text-white "
            onClick={() => { navigate('/city', { state: { lat: zone.lat, lon: zone.lon, name: zone.name } }); }}
            aria-hidden="true"
          >
            <span className=" font-extrabold text-xl text-gray-700">{zone.name}</span>
            <span>
              {zone.country}
            </span>
            <span>
              <span className=" text-black capitalize">lat:</span>
              {zone.lat}
            </span>
            <span>
              <span className=" text-black capitalize">lon:</span>
              {zone.lon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CitiesList;
