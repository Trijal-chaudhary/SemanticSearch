import chromadb
import json

with open('./data/backend_notes.json', "r") as file:
  data = json.load(file)
# print(data)

ids = [doc["id"] for doc in data]

doc = [ele["content"] for ele in data]

metadatas = [
    {
        "title": doc["title"],
        "topic": doc["topic"]
    }
    for doc in data
]

client = chromadb.PersistentClient(path= "./chroma_db")

collection = client.get_or_create_collection("backend_notes")

collection.add(
    ids=ids,
    documents=doc,
    metadatas=metadatas
)

mem = collection.get()

print(mem)