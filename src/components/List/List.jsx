import React from 'react';
import products from 'ads.json';
import ListItem from 'components/ListItem/ListItem';
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
