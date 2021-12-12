import axios from "axios";
import { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import ReviewCard from "../components/ReviewCard";
import QuoteCard from "../components/QuoteCard";
import BookCard from "../components/BookCard";
import { BookCardSkeleton } from "../components/BookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";

export function FeedModule(props) {
  const dispatch = useDispatch();
  const { userActivity } = useSelector(({ userActivity }) => ({
    userActivity,
  }));

  async function getFeed() {
    await dispatch.userActivity.getActivityFeed();
  }

  useEffect(() => {
    getFeed();
  }, []);

  return userActivity.loading ? (
    <>
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
    </>
  ) : (
    <>
      {userActivity.feed.map((item) => {
        if (item.activity_attribute.activity_type === "added to library") {
          return <ActivityCard key={item.activity_id} {...item} />;
        } else if (item.activity_attribute.activity_type === "started reading") {
          return <ActivityCard key={item.activity_id} {...item} />;
        } else if (item.activity_attribute.activity_type === "finished reading") {
          return <ActivityCard key={item.activity_id} {...item} />;
        } else if (item.activity_attribute.activity_type === "shared") {
          return <QuoteCard key={item.activity_id} {...item} />;
        } else if (item.activity_attribute.activity_type === "reviewed") {
          return <ReviewCard key={item.activity_id} {...item} />;
        }
      })}
    </>
  );
}
