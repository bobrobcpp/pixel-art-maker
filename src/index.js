import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridForm from './components/grid_form.js';
import ColorPicker from './components/color_picker.js';
import DesignCanvas from './components/design_canvas.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gridWidth: 1,
      gridHeight: 1,
      currentColor: '#000000',
      edited: false
    };
    this.onDimensionChange = this.onDimensionChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  onDimensionChange(width, height){
    this.setState({
      gridWidth: width,
      gridHeight: height
    })
  }

  onColorChange(color){
    this.setState({
      currentColor: color
    })
  }

  toggleEdited(){

  }


  render() {
    return (
      <div>
        <div className="box">
          <div className="right-triangle">
          </div>
          <div className="left-triangle">
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
            </div>
            <div className="col-sm-5">

            </div>
            <div className="col-sm" >
              <a href="#"> <i className="fa fa-github fa-3x icon-bar" aria-hidden="true"></i> </a>
              <a href="#"> <i className="fa fa-codepen fa-3x icon-bar" aria-hidden="true"></i> </a>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
            </div>
            <div className="col-sm-5">
            <h1> PIXEL MAKER </h1>
            </div>
            <div className="col-sm">
            </div>

          </div>

          <GridForm onDimensionChange={this.onDimensionChange}
            {...this.state}
          />

          <ColorPicker
          onColorChange={this.onColorChange}
          {...this.state}
          />

          <DesignCanvas
          {...this.state}
          />
        </div>
      </div>
    );
  }


}

ReactDOM.render(<App />, document.querySelector('#root'));