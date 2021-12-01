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
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setSearchResult(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSearchResult();
  }, [searchQuery]);

  return (
    <>
      <Textbox
        placeholder="Search title or ISBN"
        onKeyPress={(event) => {
          if (event.key == "Enter") setSearchQuery(event.target.value);
        }}
      />

      {searchQuery ? (
        searchResult.map((result) => {
          console.log(result);
          return (
            <Card
              key={result.id}
              user={{
                username: "muhrizqiardi",
                name: {
                  firstName: "Muhammad Rizqi",
                  lastName: "Ardiansyah",
                },
              }}
              book={result.volumeInfo}
              // activity="added to library"
              time="2021-09-22T00:48:00.000Z"
            />
          );
        })
      ) : (
        <>
          <img
            src={noSearchQueryImg}
            alt="Search Something..."
            style={{ margin: "25vh auto" }}
          />
        </>
      )}
    </>
  );
}
export default Search;
