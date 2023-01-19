import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getZone } from '../redux/Zone';
import img09 from './images/09.png';

const City = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { lat = 0, lon = 0, name = '' } = location.state;
  const { zone } = useSelector((state) => state.zone);
  useEffect(() => {
    dispatch(getZone({ lat, lon }));
  }, []);
  useEffect(() => {
  }, [zone]);

  return (
    <div>
      <div className="h-40 flex flex-row">
        <div
          style={{
            backgroundImage: `url("${img09}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
          }}
          className=" basis-1/2 m-2"
        />
        <div className=" basis-1/2 m-2 flex items-center justify-center">
          <span className=" text-5xl font-extrabold text-gray-600 ">{name}</span>
        </div>
      </div>
      <div>

        <div>
          <div>Cordinates</div>
          <div>
            <span>longitude</span>
            <span>{zone.coord && zone.coord.lon}</span>
          </div>
          <div>
            <span>latitude</span>
            <span>{zone.coord && zone.coord.lat}</span>
          </div>
        </div>

        <div>
          <div>weather</div>
          <div>
            <span>main</span>
            <span>{zone.weather && zone.weather[0].main}</span>
          </div>
          <div>
            <span>description</span>
            <span>
              {zone.weather && zone.weather[0].description}
            </span>
          </div>
        </div>

        <div>
          <div>base station</div>
          <div>
            <span>temperature</span>
            <span>{zone.main && zone.main.temp}</span>
          </div>
          <div>
            <span>feel</span>
            <span>
              {zone.main && zone.main.feels_like}
            </span>
          </div>
          <div>
            <span>minimum temperature</span>
            <span>
              {zone.main && zone.main.temp_min}
            </span>
          </div>
          <div>
            <span>maximum temperature</span>
            <span>
              {zone.main && zone.main.temp_max}
            </span>
          </div>
          <div>
            <span>pressure</span>
            <span>
              {zone.main && zone.main.pressure}
            </span>
          </div>
          <div>
            <span>humidity</span>
            <span>
              {zone.main && zone.main.humidity}
            </span>
          </div>
        </div>

        <div>
          <div>visibility</div>
          <div>
            <span>visible</span>
            <span>{zone.visibility && zone.visibility}</span>
          </div>
        </div>

        <div>
          <div>wind</div>
          <div>
            <span>speed</span>
            <span>{zone.wind && zone.wind.speed}</span>
          </div>
          <div>
            <span>degree</span>
            <span>{zone.wind && zone.wind.deg}</span>
          </div>
        </div>

        <div>
          <div>clouds</div>
          <div>
            <span>cover</span>
            <span>{zone.clouds && zone.clouds.all}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default City;
