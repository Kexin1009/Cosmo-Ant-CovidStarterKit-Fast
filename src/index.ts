import "./styles.css";
import { Graph, GraphConfigInterface } from "@cosmograph/cosmos";


async function getUsers() {
  try {
    const response = await fetch('http://127.0.0.1:8000/edges', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

type Node = {
  id: string;
  content: string;
};

type Link = {
  source: string;
  target: string;
  weight: number;
  colour: string;
  directed: boolean;
};

const links: Link[] = [];
const nodes: Node[] = [];

let edges = getUsers();
edges.then((data) =>{
  for (let node = 0; node < data.vertices.length; node += 1) {
    // console.log(data.vertices[node].attributes.content);
    nodes.push({ id: `${data.vertices[node].v_id}`, content: `${data.vertices[node].attributes.content}` });
  }
  for (let node = 0; node < data.entities.length; node += 1) {
    // console.log(data.vertices[node].attributes.content);
    nodes.push({ id: `${data.entities[node].v_id}`, content: "" });
  }

  for (let node = 0; node < data.edges.length; node += 1) {
    links.push({ source: `${data.edges[node].from_id}`, target: `${data.edges[node].to_id}`, colour: `white`, weight: data.edges[node].attributes.weight, directed: data.edges[node].directed});
  }

  for (let node = 0; node < data.entity_links.length; node += 1) {
    links.push({ source: `${data.entity_links[node].from_id}`, target: `${data.entity_links[node].to_id}`, colour: `pink`, weight: data.entity_links[node].attributes.weight, directed: data.entity_links[node].directed});
  }

  console.log(nodes);

  const canvas = document.querySelector("canvas") as HTMLCanvasElement;
  const config: GraphConfigInterface<Node, Link> = {
    backgroundColor: "#151515",
    nodeSize: 2,
    nodeColor: "#404040",
    linkWidth: link => link.weight,
    linkColor: link => link.colour,
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

});