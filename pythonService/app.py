import chromadb
from fastapi import FastAPI
from pydantic import BaseModel

client = chromadb.PersistentClient(path= "./chroma_db")

collection = client.get_collection("backend_notes")


# print(result)


app = FastAPI()

class SearchRequest(BaseModel):
    text: str

@app.post("/search")
def home(data: SearchRequest):
    print(data.text)
    result = collection.query(
        query_texts=[data.text],
        n_results=2
    )
    print(result)
    return {
        "message": "Hello from Python"
    }