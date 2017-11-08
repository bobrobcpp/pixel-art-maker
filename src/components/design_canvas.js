import React from 'react';
import $ from 'jquery';

class DesignCanvas extends React.Component{

  render(){
    return(
      <div id="design-canvas">
        {this.createGrid()}
      </div>
    );
  }

  createGrid(){
    var self = this;
    console.log("Creating a " + this.props.gridHeight  + " X " + this.props.gridWidth + " grid");
    $('table').remove();
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < this.props.gridWidth; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < this.props.gridHeight; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const tileColor = self.props.currentColor;
      var cell = document.createElement("td");
      cell.className = "cell";
      $(cell).on("click", function(e) {
        // console.log(self.props.currentColor);
      $(this).css("background-color",tileColor);
      });
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
$('#design-canvas').append(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  }
}

export default DesignCanvas;