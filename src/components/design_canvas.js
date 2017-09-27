import React from 'react';
import $ from 'jquery';

class DesignCanvas extends React.Component{

  render(){
    return(
      <div id="design-canvas">
        Design Canvas
        {this.createGrid()}
      </div>
    );
  }

  createGrid(){
    console.log("Creating a " + this.props.gridHeight  + " X " + this.props.gridWidth + " grid");
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
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