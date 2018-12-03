import React from 'react';
import styles from './ProductParameters.module.css';

const ProductParameters = React.memo(({ param }) => (
  <li className={`mv05 ph1 ${styles.item}`}>
    <h6 className={styles.fadePurple}>{param[0]}</h6>
    <p className={styles.fadePurple}>{param[1]}</p>
  </li>
));

export default ProductParameters;
