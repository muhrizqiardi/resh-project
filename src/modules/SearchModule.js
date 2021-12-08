import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Textbox from "../components/TextBox";
import noSearchQueryImg from "../assets/no-search-query.png";
import { SearchItemCard } from "../components/SearchItemCard/SearchItemCard";
import { Helmet } from "react-helmet";

export function SearchModule(props) {
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
  });

  return (
    <>
      <Helmet>
        <title>Search {searchQuery && `for "${searchQuery}" `}| RESH</title>
      </Helmet>

      <Textbox
        placeholder="Search title or ISBN"
        onKeyPress={(event) => {
          if (event.key == "Enter") setSearchQuery(event.target.value);
        }}
      />

      {searchQuery ? (
        searchResult.map((result) => (
          <SearchItemCard key={result.id} googleBooksVolumeId={result.id} />
        ))
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
