import React, { Component } from 'react';
import { mapById, fetchCached } from 'utilities';
import ProductLegend from 'components/ProductLegend/ProductLegend';
import ProductParameters from 'components/ProductParameters/ProductParameters';

import thumbnail from './default-thumbnail.svg';
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.location && props.location.state,
    };
    const { product } = this.state;
    this.id = (product && product.id)
      || (props.match.params && props.match.params.product);
  }

  componentDidMount() {
    const { product } = this.state;

    /*
      in Real-life scenarios product come from API,
      so instead of importing data, we fetch it.
    */
    if (!product) this.fetchProduct(this.id);
  }

  async fetchProduct(id) {
    try {
      const fetchedProduct = await fetchCached()
        .then(r => r.json())
        .then(response => mapById(response));
      this.setState(({ product: fetchedProduct[id] }));
    } catch (error) {
      throw new Error('Could not fetch Product data');
    }
  }

  render() {
    const { product } = this.state;

    if (!product) return null; // early return. good practice is redirect to error page

    return (
      <div row="nowrap" className="product">

        <section className="mv2 card">

          <header className="ph1">
            <h1>{product.title}</h1>

            <p className="mv1 description">
              {product.description}
            </p>
          </header>

          <ProductLegend city={product.city_label} time={product.created} />

          <img src={thumbnail} alt="Default Thumbnail" />

        </section>

        <aside className="pl1 mv2 show-large" flex="33">

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
