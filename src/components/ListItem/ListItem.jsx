import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import thumbnail from './default-thumbnail.svg';
import './ListItem.scss';

const ListItem = React.memo(({ product }) => (
  <li flex="auto" className="row p1 ListItem">
    <article flex="" className="column card">
      <Link flex="" to={`/list/${product.id}`}>
        <img src={thumbnail} alt="Default Thumbnail" />

        <div className="p1">
          <h4>{product.title}</h4>
        </div>
      </Link>

      <legend row="nowrap" className="p1">
        <address flex="" className="mr1">
          <FontAwesomeIcon className="pin-icon" icon={faMapMarkerAlt} />
          {product.city_label}
        </address>

        <FontAwesomeIcon className="ml1 add-wishlist" icon={faHeart} />
      </legend>
    </article>
  </li>
));

export default ListItem;
