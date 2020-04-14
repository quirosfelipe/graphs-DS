function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let searchArr = [ startingNode ];

    while (searchArr.length) {
        let currentNode = searchArr.shift();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        if (currentNode.val === targetVal) return currentNode;
        searchArr.push(...currentNode.neighbors);
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};
