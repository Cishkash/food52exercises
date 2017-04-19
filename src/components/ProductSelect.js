import React, { Component } from 'react';

class ProductSelect extends Component {
  render() {
    return (
      <div className="row text-lg-center justify-content-lg-center">
        <div className="col-lg-6 product">
          {this.props.product.map( (product, index) => {
            return (
              <div key={`product-${index}`}>
                <h3>
                  {product.product_name}
                </h3>
                <span className="text-muted">{product.product_tagline}</span>

                <h5 className="price-range">{product.product_price}</h5>
                <h5 className="text-muted">Options:</h5>
                  {product.options.map( (option, index) => {
                    return (
                      <div key={`option-select-${index}`}
                        className="option-select">
                        <button type="button"
                          onClick={() => this.props.updateSelectedProduct(option)}
                          className={`rounded btn-hollow ${Object.is(option, this.props.selectedProduct) ? 'active' : ''}`}>
                          <small>{option.option_name}</small>
                        </button>
                      </div>
                    )}
                  )}
                <section className="quantity">
                  <label htmlFor="qty">Qty: &nbsp;</label>
                  <input type="number"
                         className="bg-faded input-qty"
                         name="qty"
                         id="qty"
                         size="3"
                         onChange={this.props.handleChange}
                         defaultValue={this.props.qty}/>
                </section>
                <button type="button" className="btn cart-submit text-white">
                  ADD TO BASKET
                </button><br />
                <div className="submission">
                  {/* Keeping this center aligned since I don't have an icon to
                      put this against */}
                  <a href="#">
                    $9 Flat Rate Shipping Per Order<br />
                    Select a product for delivery estimate
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProductSelect;
