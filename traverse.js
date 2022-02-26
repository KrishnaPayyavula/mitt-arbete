var node = {
  item: 1,
  children: [
    {
      item: 2,
      children: [
        {
          item: 3,
          children: [
            {
              item: 4,
              children: []
            },
            {
              item: 5,
              children: []
            },
            {
              item: 6,
              children: [
                {
                  item: 7,
                  children: []
                },
                {
                  item: 8,
                  children: []
                },
                {
                  item: 9,
                  children: []
                }
              ]
            }
          ]
        },
        {
          item: 10,
          children: [
            {
              item: 11,
              children: []
            },
            {
              item: 12,
              children: [
                {
                  item: 13,
                  children: []
                },
                {
                  item: 14,
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


const traverseES6 = node => 
  (node.children.length?[]:[[node.item]]).concat(...node.children.map(child => 
     traverse(child).map(arr => 
         [node.item].concat(arr)
      )
  ));

function traverse(node, path = [], result = []){
    if(!node.children.length)
       result.push(path.concat(node.item));
    for(const child of node.children)
        traverse(child, path.concat(node.item), result);
    return result;
}


/**
 * [
  [1, 2, 3, 4],
  [1, 2, 3, 5],
  [1, 2, 3, 6, 7],
  [1, 2, 3, 6, 8],
  [1, 2, 3, 6, 9],
  [1, 2, 10, 11],
  [1, 2, 10, 12, 13],
  [1, 2, 10, 12, 14]
]
 */

