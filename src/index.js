import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridForm from './components/grid_form.js';
import ColorPicker from './components/color_picker.js';
import DesignCanvas from './components/design_canvas.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gridWidth: '0',
      gridHeight: '0'

    };
    this.onDimensionChange = this.onDimensionChange.bind(this);
  }

  onDimensionChange(width, height){
    this.setState({
      gridWidth: width,
      gridHeight: height
    })
  }


  render() {
    return (
      <div className="container">
        <h1> PIXEL MAKER </h1>

        <GridForm onDimensionChange={this.onDimensionChange}
          {...this.state}
        />

        <ColorPicker
        />

        <DesignCanvas className="design-canvas"
        {...this.state}
        />
      </div>
    );
  }


}

ReactDOM.render(<App />, document.querySelector('#root'));