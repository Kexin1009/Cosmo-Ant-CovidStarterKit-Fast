async function getUsers() {
  try {
    // 👇️ const response: Response
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

    // console.log('result is: ', JSON.stringify(result, null, 4));

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

let edges = getUsers();

export type Node = {
  id: string;
};

export type Link = {
  source: string;
  target: string;
};

const links: Link[] = [];
const nodes: Node[] = [];

edges.then((data) =>{
  // console.log(data.edges);

})

const n = 100;
const m = 100;
for (let node = 0; node < n * m; node += 1) {
  nodes.push({ id: `${node}` });
  const nextNode = node + 1;
  const bottomNode = node + n;
  const nodeLine = Math.floor(node / n);
  const nextNodeLine = Math.floor(nextNode / n);
  const bottomNodeLine = Math.floor(bottomNode / n);
  if (nodeLine === nextNodeLine)
    links.push({ source: `${node}`, target: `${nextNode}` });
  if (bottomNodeLine < m)
    links.push({ source: `${node}`, target: `${bottomNode}` });
}

console.log(nodes);

export { nodes, links };



