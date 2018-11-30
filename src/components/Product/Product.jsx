import React, { Component } from 'react';
import axios from 'axios';
import keyBy from 'lodash/keyBy';
import ProductLegend from 'components/ProductLegend/ProductLegend';
import ProductParameters from 'components/ProductParameters/ProductParameters';

import thumbnail from './default-thumbnail.svg';
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.product;
    this.state = {
      product: props.location.state,
    };
  }

  componentDidMount() {
    const { product } = this.state;
    if (!product) this.fetchProduct(this.id);
  }

  fetchProduct(id) {
    const fetchDataByID = async () => {
      const products = await axios.get(`${process.env.PUBLIC_URL}/ads.json`)
        .then(({ data }) => {
          let mapData = {};

          data.forEach(({ ads }) => {
            mapData = { ...mapData, ...keyBy(ads, 'id') };
          });

          return mapData;
        });

      this.setState(({ product: products[id] }));
    };

    fetchDataByID();
  }

  render() {
    const { product } = this.state;

    if (!product) return null;

    return (
      <div row="nowrap" className="product">
        <section className="mv2 card">
          <header className="ph1">
            <h1>{product.title}</h1>
            <p className="mv1 description">{product.description}</p>
          </header>

          <ProductLegend city={product.city_label} time={product.created} />

          <img src={thumbnail} alt="Default Thumbnail" />
        </section>

        <aside className="pl1 mv2" flex="33">
          <ul className="card">
            <h5 className="ph1 mv05 purple">Details</h5>
            {product.params.map(param => (
              <ProductParameters key={param[0]} param={param} />
            ))}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Product;
