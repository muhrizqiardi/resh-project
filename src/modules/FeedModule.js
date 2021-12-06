import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export function FeedModule(props) {
  const [feed, setFeed] = useState([]);

  async function getFeed() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_MOCK_API_URL}/feed`);
      console.log(response.data);
      setFeed(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <>
      {feed.map((item) => (
        <BookCard key={item.activity_id} {...item} />
      ))}
    </>
  );
}