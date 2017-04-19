import React, { Component } from 'react';

/**
 * ProductSelect component is responsible for handling interaction at the scope
 * of the `Second` route component and displaying feedback relevent to user
 * selection.
 *
 * @class ProductSelect
 * @extends React.Component
 */
class ProductSelect extends Component {
  /**
   * Renders the layout of the `ProductSelect` component.
   *
   * @method render
   */
  render() {
    return (
      <div id="ProductSelect" className="row text-lg-center justify-content-lg-center product">
        <div className="col-lg-6">
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
                </div>
              )
            })}
          </div>
          <div className="col-lg-11 product-error">
            <h5 className="text-white">Please select an Option first.</h5>
          </div>
          <div className="col-lg-6">
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
              <div className="row text-lg-left">
                <div className="col-lg-2">
                  <i className="fa fa-truck large-icon" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10">
                  <a href="#">
                    $9 Flat Rate Shipping Per Order<br />
                    Select a product for delivery estimate
                  </a>
                </div>
              </div>
            </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ProductSelect;
