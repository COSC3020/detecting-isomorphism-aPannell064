function are_isomorphic(graph1, graph2) {
    if(graph1.length != graph2.length) {return false;}
    else if(JSON.stringify(graph1) === JSON.stringify(graph2)) {return true;}
    var v = graph1.length;
    //Array tracks number of swaps in each position at each level
    var swaps = new Array(v).fill(0);
    var i = 1;
    var swapIndex;
    
    while(i < v) {
        swapIndex = i%2 ? swaps[i] : 0;
        [graph1[swapIndex], graph1[i]] = [graph1[i], graph1[swapIndex]];
        for(var j = 0; j < v; j++) {
            [graph1[j][swapIndex], graph1[j][i]] = [graph1[j][i], graph1[j][swapIndex]];
        }

        swaps[i]++;
        i=1;

        //Resets the values in swaps when they exceed their indices
        while(swaps[i] >= i && i < v) {swaps[i++] = 0;}

        if(JSON.stringify(graph1) === JSON.stringify(graph2)) {return true;}
    }
    return false; 
}
