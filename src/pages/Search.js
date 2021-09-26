import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Textbox from "../components/TextBox";
import noSearchQueryImg from "../assets/no-search-query.png";

function Search(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function getSearchResult() {
    try {
      const response = await axios.get(
        `http://localhost:9000/books?q=${searchQuery}`
      );
      console.log(response.data);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSearchResult();
  });

  return (
    <>
      <Textbox
        placeholder="Search title or ISBN"
        onChange={(event) => setSearchQuery(event.target.value)}
      />

      {searchQuery ? (
        searchResult.map((result) => (
          <Card
            key={result.ISBN}
            user={{
              username: "muhrizqiardi",
              name: {
                firstName: "Muhammad Rizqi",
                lastName: "Ardiansyah",
              },
            }}
            book={result}
            activity="added to library"
            time="2021-09-22T00:48:00.000Z"
          />
        ))
      ) : (
        <>
          <img src={noSearchQueryImg} alt="Search Something..." style={{margin: "25vh auto"}} />
        </>
      )}
    </>
  );
}
export default Search;
