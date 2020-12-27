import React, { Component } from 'react';
import Cube from './rotating-cube/cube/Cube';
import { codingSites } from '../data/coding-sites';

class Die extends Component {
  state = {
    sites: codingSites,
    chosenSite: {
      title: '?',
      url: '',
    },
  };

  getSite = () => {
    const randomChoice = Math.floor(Math.random() * this.state.sites.length);
    return this.state.sites[randomChoice];
  };

  fetchSite = () => {
    const newSite = this.getSite();
    this.setState({
      ...this.state,
      chosenSite: { ...newSite },
    });
  };

  renderFaces = () => {
    return {
      front: '',
      right: '',
      back: '',
      left: '',
      top: '',
      bottom: '',
    };
  };

  render() {
    return (
      <div>
        <Cube
          customBackground={customBackground}
          faces={this.renderFaces()}
          fetchSite={this.fetchSite}
          site={this.state.chosenSite.title}
          url={this.state.chosenSite.url}
        />
      </div>
    );
  }
}

const customBackground = {
  front: 'hsla(120, 100%, 10%, .60)',
  right: 'hsla(120, 100%, 10%, .60)',
  back: 'hsla(120, 100%, 10%, .60)',
  left: 'hsla(120, 100%, 10%, .60)',
  top: 'hsla(120, 100%, 10%, .60)',
  bottom: 'hsla(120, 100%, 10%, .60)',
};
export default Die;
