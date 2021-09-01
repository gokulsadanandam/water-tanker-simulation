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
      isBlocked: true,
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
  var traversedValidNodes = [];
  var traversedValidNodesLeft = [];
  var traversedValidNodesRight = [];

  // Move towards Downward Direction - { positionX:0 , positionY:3 }

  currentPosition.positionX =
    currentPosition.positionX + directions.down.positionX;
  currentPosition.positionY =
    currentPosition.positionY + directions.down.positionY;

  while (
    currentPosition.positionX >= 0 &&
    currentPosition.positionX < rows &&
    currentPosition.positionY >= 0 &&
    currentPosition.positionY < columns
  ) {
    // { positionX:1 , positionY:3 }

    // Get Array Node at Current Position -> arr[1][3]

    var currentNode = arr[currentPosition.positionX][currentPosition.positionY];

    // If the Node is valid Push the Node to Traversed Node and Color the Node

    if (!currentNode.isBlocked) {
      arr[currentPosition.positionX][
        currentPosition.positionY
      ].isWaterFlowed = true;
      traversedValidNodes.push(currentNode);
    } else {
      // If the Node is blocked, traverse left and right simultaneously and find valid nodes
      do {
        currentPosition.positionX =
          currentPosition.positionX + directions.left.positionX;
        currentPosition.positionY =
          currentPosition.positionY + directions.left.positionY;
        // Get Array Node at Current Position -> arr[1][2] , arr[1][1] , arr[1][0]
        // console.log(currentPosition.positionX,currentPosition.positionY)

        if(currentPosition.positionY <= 0 ) {
            break;
        }

        currentNode = arr[currentPosition.positionX][currentPosition.positionY];

        if (!currentNode.isBlocked) {
          arr[currentPosition.positionX][
            currentPosition.positionY
          ].isWaterFlowed = true;
          traversedValidNodes.push(currentNode);
        }
        // Travese till edge of the container or when we encounter a valid node at the next row
      } while (
        currentPosition.positionY >= 0 &&
        arr[currentPosition.positionX][currentPosition.positionY].isBlocked
      );
    }

    if(currentPosition.positionY <= 0 ) {
        break;
    }

    currentPosition.positionX =
      currentPosition.positionX + directions.down.positionX;
    currentPosition.positionY =
      currentPosition.positionY + directions.down.positionY;
  }

  traversedValidNodesLeft = traversedValidNodes;

  // Going to Initial Position

  currentPosition = { positionX: 1, positionY: 3 };
  traversedValidNodes = [];

  while (
    currentPosition.positionX >= 0 &&
    currentPosition.positionX < rows &&
    currentPosition.positionY >= 0 &&
    currentPosition.positionY < columns
  ) {
    // { positionX:1 , positionY:3 }

    // Get Array Node at Current Position -> arr[1][3]

    var currentNode = arr[currentPosition.positionX][currentPosition.positionY];

    // If the Node is valid Push the Node to Traversed Node and Color the Node

    if (!currentNode.isBlocked) {
      arr[currentPosition.positionX][
        currentPosition.positionY
      ].isWaterFlowed = true;
      traversedValidNodes.push(currentNode);
    } else {
      do {
        currentPosition.positionX =
          currentPosition.positionX + directions.right.positionX;
        currentPosition.positionY =
          currentPosition.positionY + directions.right.positionY;

        // Get Array Node at Current Position -> arr[1][2] , arr[1][1] , arr[1][0]
        currentNode = arr[currentPosition.positionX][currentPosition.positionY];

        if (!currentNode.isBlocked) {
          arr[currentPosition.positionX][
            currentPosition.positionY
          ].isWaterFlowed = true;
          traversedValidNodes.push(currentNode);
        }
        // Travese till edge of the container or when we encounter a valid node at the next row
      } while (
        currentPosition.positionY < columns &&
        arr[currentPosition.positionX + 1][currentPosition.positionY].isBlocked
      );
    }

    // Break if No Node on Right is Valid

    if( currentPosition.positionY == (columns -1) ) {
        break;
    }

    currentPosition.positionX =
      currentPosition.positionX + directions.down.positionX;
    currentPosition.positionY =
      currentPosition.positionY + directions.down.positionY;
  }
  traversedValidNodesRight = traversedValidNodes;
//   console.log("traversedValidNodesRight", [
//     ...traversedValidNodesLeft,
//     ...traversedValidNodesRight,
//   ]);
  console.log(arr)

}

traverseNode(arr);
