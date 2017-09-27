import React from 'react';


class GridForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      gridHeight: '0',
      gridWidth: '0'
    };
  }
  render(){
    return(
      <div className="grid-form">



        {this.state.gridHeight}
        <input type="number" min="0" onChange={event => this.onDimensionChange(event.target.value, this.state.gridWidth)} />
        {this.state.gridWidth}
        <input type="number" min="0" onChange={event => this.onDimensionChange(this.state.gridHeight, event.target.value)} />

      </div>
      );
  }

  onDimensionChange(height, width){
    this.setState({
      gridHeight: height,
      gridWidth: width
    });
  }


}

export default GridForm;