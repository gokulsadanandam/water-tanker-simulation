const arr = [
  [
    {
      positionX: 0,
      positionY: 0,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
    {
      positionX: 0,
      positionY: 1,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 0,
      positionY: 2,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 0,
      positionY: 3,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 0,
      positionY: 4,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
  ],
  [
    {
      positionX: 1,
      positionY: 0,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
    {
      positionX: 1,
      positionY: 1,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 1,
      positionY: 2,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 1,
      positionY: 3,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 1,
      positionY: 4,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
  ],
  [
    {
      positionX: 2,
      positionY: 0,
      isBlocked: true,
      isWaterFlowed: false,
      isEdge: true,
    },
    {
      positionX: 2,
      positionY: 1,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 2,
      positionY: 2,
      isBlocked: true,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 2,
      positionY: 3,
      isBlocked: true,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 2,
      positionY: 4,
      isBlocked: true,
      isWaterFlowed: false,
      isEdge: true,
    },
  ],
  [
    {
      positionX: 3,
      positionY: 0,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
    {
      positionX: 3,
      positionY: 1,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 3,
      positionY: 2,
      isBlocked: true,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 3,
      positionY: 3,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 3,
      positionY: 4,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
  ],
  [
    {
      positionX: 4,
      positionY: 0,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
    {
      positionX: 4,
      positionY: 1,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 4,
      positionY: 2,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 4,
      positionY: 3,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 4,
      positionY: 4,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
  ],
  [
    {
      positionX: 5,
      positionY: 0,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
    {
      positionX: 5,
      positionY: 1,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 5,
      positionY: 2,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 5,
      positionY: 3,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: false,
    },
    {
      positionX: 5,
      positionY: 4,
      isBlocked: false,
      isWaterFlowed: false,
      isEdge: true,
    },
  ],
];

function traverseNode(arr) {
  var directions = {
    left: {
      positionX: 0,
      positionY: -1,
    },
    right: {
      positionX: 0,
      positionY: 1,
    },
    down: {
      positionX: 1,
      positionY: 0,
    },
    downLeft: {
      positionX: -1,
      positionY: 1,
    },
    downRight: {
      positionX: 1,
      positionY: 1,
    },
  };

  const rows = 6;
  const columns = 5;
  let currentPosition = { positionX: 0, positionY: 3 };
  
  // List to Hold Traversed Valid Nodes
  var traversedValidNodes = [];

  // Adding the current starting position to the list
  traversedValidNodes.push(currentPosition)

  while ( traversedValidNodes.length > 0 ) {
    // { positionX:0 , positionY:3 }

    var p = traversedValidNodes[0];
    
    // Removing currentNode entry from list. 
    traversedValidNodes.shift();
    
    // Get Array Node at Current Position -> arr[1][3]
    var currentNode = arr[p.positionX][p.positionY];

    arr[p.positionX][p.positionY].isWaterFlowed = true;
    arr[p.positionX][p.positionY].isBlocked = true;

    console.log("Water Flowed Through",arr[p.positionX][p.positionY])

    if( p.positionX > rows ) {
      break;
    }

    // Check the Downward Direction if Node is Valid

    var a = p.positionX + directions.down.positionX;
    var b = p.positionY + directions.down.positionY;

    // a = 2 , b = 3;

    if( a>=0 && a<rows && b>=0 && b<columns && !arr[a][b].isBlocked ) {
      traversedValidNodes.push({ positionX : a , positionY : b });
    }else{

      // Check the Nodes to the Left are Valid

      a = p.positionX + directions.left.positionX;
      b = p.positionY + directions.left.positionY;

      // a=1, b=2;

      if( a>=0 && a<rows && b>=0 && b<columns && !arr[a][b].isBlocked ) {
        traversedValidNodes.push({ positionX : a , positionY : b });
      }

      // Check the Node to the Right are Valid

      a = p.positionX + directions.right.positionX;
      b = p.positionY + directions.right.positionY;

      if( a>=0 && a<rows && b>=0 && b<columns && !arr[a][b].isBlocked ) {
        traversedValidNodes.push({ positionX : a , positionY : b });
      }
    }
  }
}

traverseNode(arr);
