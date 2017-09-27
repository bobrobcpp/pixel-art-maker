import React from 'react';


class GridForm extends React.Component{
  constructor(props) {
    super(props)
    console.log(this.props);
  }
  render(){
    return(
      <div className="grid-form">

        <input type="number" min="0" onChange={event => this.onInputChange(this.props.gridHeight, event.target.value)} />
        <input type="number" min="0" onChange={event => this.onInputChange(event.target.value, this.props.gridWidth)} />



      </div>
      );
  }

  onInputChange(width, height){
    this.props.onDimensionChange(width, height);
  }


  }




export default GridForm;