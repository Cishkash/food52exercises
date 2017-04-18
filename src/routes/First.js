import React, { Component } from 'react';
import 'whatwg-fetch';

/**
 * Component responsible for the `First` route.
 *
 * @class First
 * @extends Component
 */
class First extends Component {
  /**
   * Constructor for the `First` component. Sets initial state.
   *
   * @method constructor
   * @constructor
   * @return {undefined}
   */
  constructor() {
    super();
    this.state = {
      content: null
    }
  }
  /**
   * Fetches the first.json payload.
   *
   * @method componentDidMount
   */
  componentDidMount() {
    fetch('/stubs/first.json').then( response => {
      // Typically I'd check for a good status code here but it's coming from
      // a stub here.
      return response.json();
    }).then(response => {
      this.setState({
        content: response.content
      });
      // I'd also catch any request errors but again, a stub.
    });
  }
  /**
   * Renders the layout for the `First` component.
   *
   * @method render
   */
  render() {
    if (!this.state.content || this.state.content === null) return null;

    return (
      <div id="First">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-1">
              <img className="img-fluid"
                src={this.state.content[0].image}
                alt={this.state.content[0].subtitle}/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.content.map( (item, index) => {
              if (index !== 0) {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-2" key={`image-${index}`}>
                    <img className="img-fluid"
                      src={item.image}
                      alt={item.subtitle}/>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default First;
