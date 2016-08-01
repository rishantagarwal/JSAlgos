var grid=["..",".."];

function strokesCount(grid){
  // returns strokes count of one colour in  grid
  var count = 0;
  for(var row of grid){
    var tmp = row.split('.').filter(function(x){return (x.length > 0);});
    if(tmp.length>0){
      count+=tmp.length;
    }
  }
  return count;
}

function roatateGrid(grid){
  var m,n=grid.length;
  if(n>0){  m = grid[0].length;}
  else return grid;

  var tmp = new Array();
  for(var i=0;i<m;i++){
    tmp.push(new Array(n));
  }

  for(row in grid){
    row = row.split();
    for(column in grid[row]){
      tmp[column][row] = grid[row][column];
    }
  }

  for(row in tmp){
    tmp[row] = tmp[row].join('');
  }

// console.log(tmp);
return tmp;

}


function gridColouring(grid){
  console.log(grid);
  var red=0,blue=0,none=0;
  var redGrid = [],blueGrid=[];
  for(var row of grid){
    row = row.toLowerCase();
    redGrid.push(row.replace(/g/g,'r').replace(/b/g,'.'));
    blueGrid.push(row.replace(/g/g,'b').replace(/r/g,'.'));
  }

  blueGrid = roatateGrid(blueGrid);
  return strokesCount(blueGrid)  + strokesCount(redGrid);
}


console.log( gridColouring(grid));
