import React, { Component } from 'react';

/**
 * `ProductImage` component is responsible for interactions that revolve around
 * the product display image. Clicking on a thumbnail or an option will switch
 * the large image section to the appropriate image.
 *
 * @class ProductImage
 * @extends React.component
 */
class ProductImage extends Component {

  /**
   * Renders the layout of the `ProductImage` component.
   *
   * @method render
   */
  render() {
    return (
      <div className="row justify-content-lg-start">
        <div className="col-lg-2 thumbs">
          {this.props.product.map( (product) => {
            let arr = [];

            // The comingled images between product and these standalone images
            // threw me off a bit
            arr.push(product.product_images.map( (image, index) => {
              return (
                <a onClick={() => this.props.updateSelectedImage(image)}>
                  <img key={`thumb-image-${index}`}
                       className="img-fluid" src={image}
                       alt={`Product thumbnail ${index}`}/>
                </a>
              )
            }));

            arr.push(product.options.map( (option, index) => {
              return (
                <a onClick={() => this.props.updateSelectedProduct(option)}>
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
        <div className="col-lg-10" data-test="selected-image">
          <img className="img-fluid"
            src={this.props.selectedImage}
            alt="Selected"/>
        </div>
      </div>
    )
  }
}

export default ProductImage;
