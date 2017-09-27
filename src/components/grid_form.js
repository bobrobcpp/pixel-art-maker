import React from 'react';


class GridForm extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className="grid-form">

        {this.props.gridHeight}
        <input type="number" min="0" onChange={event => this.onInputChange(event.target.value, this.props.gridWidth)} />
        {this.props.gridWidth}
        <input type="number" min="0" onChange={event => this.onInputChange(this.props.gridHeight, event.target.value)} />

      </div>
      );
  }

  onInputChange(height, width){
    this.props.onDimensionChange(height, width);
  }


  }




export default GridForm;