import "./styles.css";
import { nodes, links, Node, Link } from "./data-gen";
import { Graph, GraphConfigInterface } from "@cosmograph/cosmos";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const config: GraphConfigInterface<Node, Link> = {
  backgroundColor: "#151515",
  nodeSize: 2,
  nodeColor: "#404040",
  linkWidth: 0.1,
  linkColor: "#8C8C8C",
  linkArrows: false,
  simulation: {
    linkDistance: 1,
    linkSpring: 2,
    repulsion: 0.2,
    gravity: 0.1,
    decay: 100000
  },
  events: {
    onClick: (node) => {
      console.log("Clicked node: ", node);
    }
  }
};

const graph = new Graph(canvas, config);
graph.setData(nodes, links);
graph.zoom(0.9);
