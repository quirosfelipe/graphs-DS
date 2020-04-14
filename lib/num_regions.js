function numRegions(graph) {
    let visited = new Set();
    let counter = 0;
    for (let node in graph) {
    	if (depthFirstAdjacency(node, graph, visited)) counter++;
    }
    return counter;
}


    // let graph1 = {
    //     'a': ['b'],
    //     'b': ['a'],
    //     'c': ['d'],
    //     'd': ['e', 'c'],
    //     'e': ['d'],


function depthFirstAdjacency(node, graph, visited) {
	if (visited.has(node)) return false;
	visited.add(node);
    graph[node].forEach((neighbor) => {
        depthFirstAdjacency(neighbor, graph, visited)
    });

    return true;
}

module.exports = {
    numRegions
};
