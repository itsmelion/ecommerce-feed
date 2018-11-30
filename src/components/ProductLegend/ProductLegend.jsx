import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductLegend.scss';

const ProductLegend = React.memo(({ city }) => (
  <legend row="nowrap" className="p1 ProductLegend">
    <address flex="" className="mr1 location">
      <FontAwesomeIcon
        className="pin"
        icon={faMapMarkerAlt}
      />

      {city}
    </address>

    <FontAwesomeIcon className="ml1 wishlist" icon={faHeart} />
  </legend>
));

export default ProductLegend;
