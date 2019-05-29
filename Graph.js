class Graph {
    constructor(){
        this.adjecencyList = {};
    }
    addVertex(vertex){
        if (!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2){
        for (let vertexKey in this.adjecencyList){
            if(vertexKey === vertex1) vertex1.push(vertex2)
            if(vertexKey === vertex2) vertex2.push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2){
        for (let vertexKey in this.adjecencyList){
            if(vertexKey === vertex1){
                vertex1.filter(key => {
                    key !== vertex2
                })
            }
            if(vertexKey === vertex2){
                vertex2.filter(key => {
                    key !== vertex1
                })
            }
        }
    }
}