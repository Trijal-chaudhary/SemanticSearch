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
    ret = []
    for doc, meta in zip(result["documents"][0], result["metadatas"][0]):
        obj = {
            "title" : meta["title"],
            "topic" : meta["topic"],
            "content" : doc
        }
        ret.append(obj)
    print(ret)
    return ret