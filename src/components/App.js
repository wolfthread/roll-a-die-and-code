import './App.css';
import React, { Component } from 'react';
import Die from './Die';

class App extends Component {
  state = {
    cursorVisible: true,
    speed: 500,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        cursorVisible: !this.state.cursorVisible,
      });
    }, this.state.speed);
  }
  componentWillUnmount() {
    clearInterval();
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: '#000',
          }}
        >
          <h2>
            >roll_a_die_and_code()
            <span
              id="blinkingCursor"
              style={{ opacity: this.state.cursorVisible ? 0 : 1 }}
            >
              |
            </span>
          </h2>
          <div
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '2rem',
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              margin: 'auto',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <p>Want to solve some problems?</p>
            <p>Too Many Choices?</p>
            <Die placeholder={this.state.placeholderDice} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
