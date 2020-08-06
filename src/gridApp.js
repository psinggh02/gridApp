/**
  Library for creating the grid
*/

/** 
  Create inner box and set the content
  @params val: Object
  @return Object
*/
const createBox = val => {
  let box = document.createElement('div');
  box.className = "boxContainer";
  let boxContent = document.createElement('div');
  let boxBottom = document.createElement('div');
  boxBottom.className = "boxBottom";
  boxContent.className = "boxContent";
  boxBottom.id = val.label;
  boxBottom.className = "box";
  boxBottom.style.background = val.color
  boxContent.style.background = val.color
  boxBottom.innerHTML = val.label;
  box.appendChild(boxContent); 
  box.appendChild(boxBottom);
  return box
}

/** 
  Create grid based on the number of column and set the content
  @params grid: Object
*/
const createGrid = (grid, gridColumn) => {
  let main = document.getElementById('gridBlock')
  main.innerHTML = "";
  main.className = "grid";
  let row = document.createElement('div');
  for (var i in grid.list) {
    row.appendChild(createBox(grid.list[i]));
    if ((parseInt(i) + 1) % gridColumn === 0) {
      row = document.createElement('div');
    }
    if (i < grid.list.length - 1) {
      row.className = "row";
      main.appendChild(row);
    }
  }
}