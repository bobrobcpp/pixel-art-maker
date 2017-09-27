import React from 'react';


class GridForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      gridHeight: '',
      gridWidth: ''
    };
  }
  render(){
    return(
      <div className="grid-form">
        Grid Height
        <input type="number"/>
        Grid Width
        <input type="number"/>

      </div>
      );
  }


}

export default GridForm;