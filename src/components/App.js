import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

const app_key = `af34c75491274fd1d6dbde30d9824862`;
const app_id = `ad235249`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("any");

  async function fetchData(term) {
    await fetch(
      `https://api.edamam.com/search?q=${term}&app_id=${app_id}&app_key=${app_key}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
  }

  useEffect(() => {
    if (search.length) {
      fetchData(search);
    } else {
      setSearch("all");
      fetchData(search);
    }
  }, [search]);

  return (
    <div className="App" style={{ backgroundColor: "#557A95" }}>
      <Navbar setSearch={setSearch} />
      <Cards recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;
