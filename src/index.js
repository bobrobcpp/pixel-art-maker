import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridForm from './components/grid_form.js';
import ColorPicker from './components/color_picker.js';
import DesignCanvas from './components/design_canvas.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1> PIXEL MAKER </h1>
        <GridForm />
        <ColorPicker />
        <DesignCanvas />
      </div>
    );
  }


}

ReactDOM.render(<App />, document.querySelector('#root'));