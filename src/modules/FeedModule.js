import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { BookCardSkeleton } from "../components/BookCard/BookCard";

export function FeedModule(props) {
  const [feed, setFeed] = useState([]);
  const [feedLoading, setFeedLoading] = useState(false);

  async function getFeed() {
    try {
      setFeedLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_MOCK_API_URL}/feed`);
      console.log(response.data);
      setFeed(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setFeedLoading(false);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  return feedLoading ? (
    <>
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
    </>
  ) : (
    <>
      {feed.map((item) => (
        <BookCard key={item.activity_id} {...item} />
      ))}
    </>
  );
}
