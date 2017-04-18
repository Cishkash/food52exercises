import React, { Component } from 'react';

/**
 * The `Second` route component. Test on Javascript interactivity.
 *
 * @class Second
 * @extends Component
 */
class Second extends Component {
  /**
   * Constructor for the `Second` component. Responsible for setting the
   * initial state for this component.
   *
   * @method constructor
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      product: [],
      qty: 1,
      selectedProduct: null
    }
  }

  /**
   * Responsible for fetching the payload from the `second.json` stub.
   *
   * @method componentDidMount
   */
  componentDidMount() {
    fetch('/stubs/second.json').then( response => {
      // Typically I'd check for a good status code here but it's coming from
      // a stub.
      return response.json();
    }).then(response => {
      this.setState({
        product: response.product,
        selectedProduct: response.product[0].options[1]
      });
      // I'd also catch any request errors but again, a stub.
    });
  }

  handleChange(evt) {
    const target = evt.target,
          name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  /**
   * Renders the layout of the `Second` component route.
   *
   * @method render
   */
  render() {
    if (!this.state.product || !this.state.product.length) return null;
    return (
      <section id="Second">
        <div className="container-fluid">
          <div className="row align-items-lg-center">
            <div className="col-lg-6">
              <div className="row justify-content-lg-start">
                <div className="col-lg-2 thumbs">
                  {/* @NOTE This is a little confusing to me because I'm unsure if I
                      should be referencing the product_images or the images
                      from the options array. */}
                  {this.state.product.map( (product) => {
                    return product.product_images.map( (image, index) => {
                      return <img key={`thumb-${index}`}
                                  className="img-fluid" src={image}
                                  alt={`Product thumbnail ${index}`}/>
                    });
                  })}
                </div>
                <div className="col-lg-9" data-test="selected-image">

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row text-lg-center justify-content-lg-center">
                <div className="col-lg-6 product">
                  {this.state.product.map( (product, index) => {
                    return (
                      <div key={`product-${index}`}>
                        <h3>
                          {product.product_name}
                        </h3>
                        <span className="text-muted">{product.product_tagline}</span>

                        <h5 className="price-range">{product.product_price}</h5>
                        <span className="text-muted">Option:</span>
                          {product.options.map( (option, index) => {
                            <div className="option-select">
                              <button type="button" className="btn rounded">
                                {option}
                              </button>
                            </div>
                          })}
                        <div>
                          <label for="qty">Qty: &nbsp;</label>
                          <input type="number"
                                 className="bg-faded input-qty"
                                 id="qty"
                                 size="3"
                                 onChange={this.handleChange}
                                 value={this.state.qty}/>
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Second;
