import React from 'react';
import { NavLink } from 'react-router-dom';

const Cities = () => (
  <>
    <div>
      <span>
        Cities
        <NavLink to="/city">to city</NavLink>
      </span>
    </div>
  </>
);

export default Cities;
