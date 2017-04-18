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
      product: null
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
        product: response.product
      });
      // I'd also catch any request errors but again, a stub.
    });
  }

  /**
   * Renders the layout of the `Second` component route.
   *
   * @method render
   */
  render() {
    if (!this.state.product || this.state.product === null) return null;
    return (
      <section id="Second">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-3 thumbs" data-test="thumbs">
                  Thumbs
                </div>
                <div className="col-lg-9" data-test="selected-image">
                  Billboard
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              This is side two
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Second;
