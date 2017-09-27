import React from 'react';

class ColorPicker extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="color-picker">
        Pick a color
        <input type="color" />
      </div>
      );

  }

}

export default ColorPicker;