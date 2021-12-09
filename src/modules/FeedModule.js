import axios from "axios";
import { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import ReviewCard from "../components/ReviewCard";
import QuoteCard from "../components/QuoteCard"
import BookCard from "../components/BookCard";
import { BookCardSkeleton } from "../components/BookCard/BookCard";

export function FeedModule(props) {
  const [feed, setFeed] = useState([]);
  const [feedLoading, setFeedLoading] = useState(false);

  async function getFeed() {
    try {
      setFeedLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_MOCK_API_URL}/feed`
      );
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
      {feed.map((item) => {
        if (item.activityData.activity_type === "added to library") {
          return <ActivityCard key={item.activityData.activity_id} {...item} />;
        } else if (item.activityData.activity_type === "started reading") {
          return <ActivityCard key={item.activityData.activity_id} {...item} />;
        } else if (item.activityData.activity_type === "finished reading") {
          return <ActivityCard key={item.activityData.activity_id} {...item} />;
        } else if (item.activityData.activity_type === "shared") {
          return <QuoteCard key={item.activityData.activity_id} {...item} />;
        } else if (item.activityData.activity_type === "reviewed") {
          return <ReviewCard key={item.activityData.activity_id} {...item} />;
        }
      })}
    </>
  );
}
