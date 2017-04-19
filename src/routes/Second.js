import React, { Component } from 'react';

import ProductSelect from '../components/ProductSelect.js';

/**
 * The `Second` route component. Test on Javascript interactivity.
 * I am handling state in this component to be passed into the children
 * components, practice good DDAU.
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
      qty: 0,
      selectedImage: '',
      selectedProduct: null,
      submitError: false
    }
    // Bind the scope of `this` for closure purposes.
    // @NOTE: (And fun fact) Attempting to access `this` in the scope of this
    //        component as a closure from a child component unfortunately binds
    //        the scope of the child component. So, we manually bind `this`
    //        scope from the constructor.
    this.updateSelectedProduct = this.updateSelectedProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        qty: 1,
        selectedImage: response.product[0].product_images[1]
      });
      // I'd also catch any request errors but again, a stub.
    });
  }

  /**
   * Sets the state of any named element using the value set by the user.
   *
   * @param  {Object} evt The event object of the DOM.
   * @return {undefined}
   */
  handleChange = (evt) => {
    const target = evt.target,
          name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  /**
   * Some mock validation that show/hides the error alert on the `ProductSelect`
   * component.
   *
   * @method handleSubmit
   * @returns {undefined}
   */
  handleSubmit() {
    if (!this.state.selectedProduct) {
      this.setState({
        submitError: true
      });
    } else {
      this.setState({
        submitError: false
      });
    }
  }

  /**
   * Updates the standalone images and removes the selected product for the
   * enhancement mentioned on the `updateSelectedImage` method.
   *
   * @method updateSelectedImage
   * @param {String} image The url of the displayed selected image
   * @returns {undefined}
   */
  updateSelectedImage(image) {
    this.setState({
      selectedImage: image,
      selectedProduct: null
    });
  }

  /**
   * Updates the product a user selects. Used as a closure to the ProductSelect
   * component. Added a feature here that syncs all the option images with
   * the options selected from the `ProductSelect` component. So, when you
   * select a thumbnail associated with a product option, the option will also
   * light up.
   *
   * @method updateSelectedProduct
   * @param {object} option The option object from the product.options array
   * @returns {undefined}
   */
  updateSelectedProduct(option) {
    this.setState({
      selectedImage: option.option_image,
      selectedProduct: option
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
            <section className="col-lg-6">
              <div className="row justify-content-lg-start">
                <div className="col-lg-2 thumbs">
                  {this.state.product.map( (product) => {
                    let arr = [];

                    // The comingled images threw me off a bit
                    arr.push(product.product_images.map( (image, index) => {
                      return (
                        <a onClick={() => this.updateSelectedImage(image)}>
                          <img key={`thumb-image-${index}`}
                               className="img-fluid" src={image}
                               alt={`Product thumbnail ${index}`}/>
                        </a>
                      )
                    }));

                    arr.push(product.options.map( (option, index) => {
                      return (
                        <a onClick={() => this.updateSelectedProduct(option)}>
                          <img key={`thumb-option-${index}`}
                               className="img-fluid" src={option.option_image}
                               alt={`Product thumbnail ${index}`}/>
                        </a>
                      )
                    }));

                    arr = arr.reduce( (a, b) => {
                      return a.concat(b);
                    });

                    return arr;
                  })}
                </div>
                <div className="col-lg-9" data-test="selected-image">
                  <img className="img-fluid"
                    src={this.state.selectedImage}
                    alt="Selected"/>
                </div>
              </div>
            </section>
            <section className="col-lg-6">
              <ProductSelect
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                product={this.state.product}
                selectedProduct={this.state.selectedProduct}
                qty={this.state.qty}
                submitError={this.state.submitError}
                updateSelectedProduct={this.updateSelectedProduct}>
                {/* Yielded to retain the column width of the ProductSelect
                  component */}
                <div className="favorite-social">
                  <button type="button"
                    className="rounded btn-hollow love">
                    <i className="fa fa-heart-o"></i> Love
                  </button>
                  <button type="button"
                    className="rounded btn-hollow save">
                    <i className="fa fa-plus" aria-hidden="true"></i> Save
                  </button>
                  <button type="button"
                    className="rounded bg-faded share">
                    <i className="fa fa-share" aria-hidden="true"></i> Share
                  </button>
                </div>
              </ProductSelect>
            </section>
          </div>
        </div>
      </section>
    )
  }
}

export default Second;
