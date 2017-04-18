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
   * Renders the layout for the `First` component. This first container of this
   * component can be wrapped in a col-<size> to fit the desired size of the
   * page. Tried to keep it very flexible and very nifty. If this was meant to
   * be used in other parts of an application, I would expect to pass in a prop
   * that would specify a column size instead.
   *
   * @method render
   */
  render() {
    if (!this.state.content || this.state.content === null) return null;

    return (
      <div id="First">
        <div className="col-lg-9">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <a href={this.state.content[0].link} target="_blank"
                  rel="noopener noreferrer"> {/* https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/ */}
                  <div className="image-text-frame">
                    <img className="img-fluid hero-image"
                      src={this.state.content[0].image}
                      alt={this.state.content[0].subtitle}/>
                    <article className="image-text text-white">
                      <h4>{this.state.content[0].title}</h4><br />
                      <div>{this.state.content[0].subtitle}</div>
                    </article>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {this.state.content.map( (item, index) => {
                if (index !== 0) {
                  return (
                    <div className="col-sm-12 col-md-6 col-lg-3" key={`image-${index}`}>
                      <a href={item.link} target="_blank"
                      rel="noopener noreferrer">
                        <div className="image-text-frame">
                          <img className="img-fluid"
                            src={item.image}
                            alt={item.subtitle}/>
                          <article className="image-text text-white">
                            <div className="image-thumb-text text-sm-center">{item.title}</div>
                          </article>
                        </div>
                      </a>
                    </div>
                  )
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default First;
