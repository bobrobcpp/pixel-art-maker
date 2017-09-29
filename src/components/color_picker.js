import React from 'react';

class ColorPicker extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="color-picker">
        Pick a color
        <input type="color" onChange={event => this.onInputChange(event.target.value)} />
      </div>
      );

  }
  onInputChange(col){
    this.props.onColorChange(col);
  }

}

export default ColorPicker;