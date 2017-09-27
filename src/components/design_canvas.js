import React from 'react';

class DesignCanvas extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="design-canvas">
        Design Canvas
        {this.props.gridHeight}
      </div>
    );

  }

}

export default DesignCanvas;