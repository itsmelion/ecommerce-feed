import React from 'react';
import { Link } from 'react-router-dom';
import ProductLegend from 'components/ProductLegend/ProductLegend';
import thumbnail from './default-thumbnail.svg';
import './ListItem.scss';

const ListItem = React.memo(({ product }) => (
  <li flex="auto" className="row p1 ListItem">
    <article flex="" className="column card">
      <Link
        flex=""
        to={{
          pathname: `/list/${product.id}`,
          state: product,
        }}
      >
        <img src={thumbnail} alt="Default Thumbnail" />

        <div className="p1">
          <h4>{product.title}</h4>
        </div>
      </Link>

      <ProductLegend city={product.city_label} />
    </article>
  </li>
));

export default ListItem;
