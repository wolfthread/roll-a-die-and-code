/**
 * this react component is an adaptation of the Rotating Cube tutorial
 * of David DeSandro (https://3dtransforms.desandro.com/cube)
 * codepen: https://codepen.io/desandro/pen/KRWjzm
 */

import './CubeStyles.css';
import React from 'react';
import Button from '../button/Button';

class Cube extends React.Component {
  state = {
    show: 'top',
  };
  getStyle = (face) => {
    const defaultBackground = {
      front: 'hsla(0, 100%, 50%, 0.7)',
      right: 'hsla(60, 100%, 50%, 0.7)',
      back: 'hsla(120, 100%, 50%, 0.7)',
      left: 'hsla(180, 100%, 50%, 0.7)',
      top: 'hsla(240, 100%, 50%, 0.7)',
      bottom: 'hsla(300, 100%, 50%, 0.7)',
    };
    if (this.props.customBackground) {
      return this.props.customBackground[face];
    } else {
      return defaultBackground[face];
    }
  };
  getFaces = () => {
    return {
      front: 'Front',
      right: 'Right',
      back: 'Back',
      left: 'Left',
      top: 'Top',
      bottom: 'Bottom',
    };
  };

  render() {
    const turnCube = () => {
      const sides = ['front', 'right', 'back', 'left', 'top', 'bottom'];
      const random = Math.floor(Math.random() * sides.length);
      this.setState({
        show: sides[random],
      });
      this.props.fetchSite();
    };
    return (
      <div>
        <Button text={'Roll A Die And Code!'} fn={turnCube} />
        <div className="scene">
          <div className={`cube show-${this.state.show}`}>
            <div
              className="cube__face cube__face--front"
              style={{ background: this.getStyle('front') }}
            >
              <a href={this.props.url}>
                {this.state.show === 'front' ? this.props.site : '?'}
              </a>
            </div>
            <div
              className="cube__face cube__face--back"
              style={{ background: this.getStyle('back') }}
            >
              <a href={this.props.url}>
                {this.state.show === 'back' ? this.props.site : '?'}
              </a>
            </div>
            <div
              className="cube__face cube__face--right"
              style={{ background: this.getStyle('right') }}
            >
              <a href={this.props.url}>
                {this.state.show === 'right' ? this.props.site : '?'}
              </a>
            </div>
            <div
              className="cube__face cube__face--left"
              style={{ background: this.getStyle('left') }}
            >
              <a href={this.props.url}>
                {this.state.show === 'left' ? this.props.site : '?'}
              </a>
            </div>
            <div
              className="cube__face cube__face--top"
              style={{ background: this.getStyle('top') }}
            >
              <a href={this.props.url}>
                {this.state.show === 'top' ? this.props.site : '?'}
              </a>
            </div>
            <div
              className="cube__face cube__face--bottom"
              style={{ background: this.getStyle('bottom') }}
            >
              <a href={this.props.url}>
                {this.state.show === 'bottom' ? this.props.site : '?'}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cube;
