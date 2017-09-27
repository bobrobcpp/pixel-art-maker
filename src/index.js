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
      gridHeight: '0',
      gridWidth: '0'
    };
    this.onDimensionChange = this.onDimensionChange.bind(this);
  }

  onDimensionChange(height, width){
    this.setState({
      gridHeight: height,
      gridWidth: width
    })
  }


  render() {
    return (
      <div className="container">
        <h1> PIXEL MAKER </h1>
        <GridForm onDimensionChange={this.onDimensionChange} />
        <ColorPicker />
        <DesignCanvas />
      </div>
    );
  }


}

ReactDOM.render(<App />, document.querySelector('#root'));