from typing import Optional  
from fastapi import FastAPI 
import pyTigerGraph as tg
from fastapi.middleware.cors import CORSMiddleware

# conn = tg.TigerGraphConnection(host="https://wikigraph.i.tgcloud.io/", graphname="WikiGraph")
conn = tg.TigerGraphConnection(host="https://cosmo-covid19.i.tgcloud.io/", graphname="MyGraph")
conn.apiToken = conn.getToken(conn.createSecret())

app = FastAPI()   

origins = [
    "http://localhost:1234/",
    "http://localhost:8001/",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/") 
def read_root():
     return {"Hello": "World"}   

@app.get("/edges/EdgeTypes")
def get_edge_types():
     return {"edge_types": conn.getEdgeTypes()}

@app.get("/vertices/Country")
def get_vertices():
     return {"vertices": conn.getVertices("Country")}

@app.get("/edges/BIRTH_STAMP")
def get_edges():
     return {"years": conn.getVertices("Year_"), "edges": conn.getEdgesByType("BIRTH_STAMP")}

@app.get("/edges/INFECTED_BY")
def get_edges():
     return {"patients": conn.getVertices("Patient"), "edges": conn.getEdgesByType("INFECTED_BY")}

@app.get("/edges/PATIENT_TRAVELED")
def get_edges():
     return {"patients": conn.getVertices("Patient"), "travel_events": conn.getVertices("TravelEvent"), "edges": conn.getEdgesByType("PATIENT_TRAVELED")}


