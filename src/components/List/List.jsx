import React from 'react';
import ListItem from 'components/ListItem/ListItem';

/*
  Not sure if data can be simply imported, or must be fetched.
  anyway its being fetched (and cached exploring Service-Workers)
  at Product component
*/
import products from './ads.json';
import './List.scss';

const renderPaginatedData = ({ ads }) => ads.map(item => (
  <ListItem key={item.id} product={item} />
));

const List = () => (
  <ul row="" align="around" flex="">
    {products.map(data => renderPaginatedData(data))}
  </ul>
);

export default List;
