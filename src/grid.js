/** 
  Call the createGrid and control the columns of the grid by changing the column variable
*/ 
const column = 3;
const grid = {
  "list": [{
    "label": 1,
    "color": "#6F98A8"
  },{
    "label": 2,
    "color": "#2B8EAD"
  },{
    "label": 3,
    "color": "#2F454E"
  },{
    "label": 4,
    "color": "#2B8EAD"
  },{
    "label": 5,
    "color": "#2F454E"
  },{
    "label": 6,
    "color": "#BFBFBF"
  },{
    "label": 7,
    "color": "#BFBFBF"
  },{
    "label": 8,
    "color": "#6F98A8"
  },{
    "label": 9,
    "color": "#2F454E"
  }]
}

/** 
    Init function for creating the grid on load
*/
const initGridApp = () => {
  createGrid(grid, column)
}

/** 
    Shuffle grid order
*/
const shuffleGrid = () => {
  for(let i = grid.list.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = grid.list[i]
    grid.list[i] = grid.list[j]
    grid.list[j] = temp
  }
  createGrid(grid, column)
}

/** 
    Sort grid order
*/
const sortGridOrder = () => {
  grid.list.sort((a, b) => {
      return a.label - b.label;
  });  
  createGrid(grid, column)
}