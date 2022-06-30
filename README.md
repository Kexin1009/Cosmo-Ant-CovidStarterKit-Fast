
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

# Cosmo-Ant-CovidStarterKit-Fast
# Cosmo-Ant-CovidStarterKit-Fast
