// we will find the max doing a breadth search
function maxValue(node, visited=new Set()) {
    let maxArr = [ node ];
    let max = node.val;
    while (maxArr.length) {
        let currentNode = maxArr.shift();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        if (currentNode.val > max ){
           max = currentNode.val;
        }
        maxArr.push(...currentNode.neighbors);
    }
    return max;
}

module.exports = {
    maxValue
};
