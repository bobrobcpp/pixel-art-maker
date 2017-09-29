import React from 'react';


class GridForm extends React.Component{
  constructor(props) {
    super(props)
    console.log(this.props);
  }
  render(){
    return(
      <div className="grid-form">

        <input type="number" min="1" onChange={event => this.onInputChange(this.props.gridWidth, event.target.value)} />
        <input type="number" min="1" onChange={event => this.onInputChange(event.target.value, this.props.gridHeight)} />



      </div>
      );
  }

  onInputChange(width, height){
    this.props.onDimensionChange(width, height);
  }


  }




export default GridForm;