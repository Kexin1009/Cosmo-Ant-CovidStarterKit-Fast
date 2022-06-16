# cosmos_test
Created with CodeSandbox

## Quickstart

1. Clone repository and enter the directory of the clone repository

### Set Up the FastAPI Server
2. Create a virtual environment `python3 -m venv venv` and activate it `source venv/bin/activate/`
3. Install the libraries:
```
pip install pyTigerGraph fastapi uvicorn
```
4. Modify the connection parameters to your host, graph name, and password
5. Modify the vertex and edge type name for the parameter in `getVertices` and `getEdgesByType`
6. Run the server
```
uvicorn main:app --reload
```

### Run Cosmos
7. Install packages:
```
npm install parcel-bundler
npm install @cosmograph/cosmos
```
8. Build and run the code:
```
npx parcel build index.html
npx parcel index.html --open
```


## First Attempt Result:

![Graph](data_viz.png)
