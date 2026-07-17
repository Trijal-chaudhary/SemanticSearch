import { useState } from "react";
import "./App.css";
import { search } from "./services/fetching";

function App() {

  const [query, setQuery] = useState<string>("");

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  // This function will later call your Node.js backend
  const handleSearch = async () => {

    // Prevent searching empty strings
    if (query.trim() === "") return;

    setLoading(true);

    

    const data = await search(query);
    // console.log(data);
    // Temporary data for UI testing
    setResults(data.data);

    setLoading(false);
  };

  return (

    <div className="container2748">

      <h1 className="heading2748">
        Semantic Search
      </h1>

      <p className="subHeading2748">
        Search your backend knowledge using semantic search.
      </p>

      <div className="searchBox2748">

        <input
          type="text"
          placeholder="Search anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      {
        loading &&
        <h3 className="loading2748">
          Searching...
        </h3>
      }

      <div className="resultContainer2748">

        {
          results.map((item,index)=>{

            return(

              <div
                key={index}
                className="card2748"
              >

                <h2>
                  {item.title}
                </h2>

                <span>
                  {item.topic}
                </span>

                <p>
                  {item.content}
                </p>

              </div>

            )

          })
        }

      </div>

    </div>

  );

}

export default App;