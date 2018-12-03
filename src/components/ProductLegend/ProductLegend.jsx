import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import './ProductLegend.scss';

const Time = React.memo(({ children }) => (
  <div className="mr1 location">
    <FontAwesomeIcon
      className="pin"
      icon={faClock}
    />
    <time dateTime="1994-03-14 22:32">{children}</time>
  </div>
));

const ProductLegend = React.memo(({ city, time }) => (
  <legend className="p1 ProductLegend">
    {time && <Time>{time}</Time>}

    <div row="nowrap">
      <address flex="" className="mr1 location">
        <FontAwesomeIcon
          className="pin"
          icon={faMapMarkerAlt}
        />

        {city}
      </address>

      <FontAwesomeIcon className="ml1 wishlist" icon={faHeart} />
    </div>
  </legend>
));

export default ProductLegend;
