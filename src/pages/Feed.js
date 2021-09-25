import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getFirestore, collection, getDocs} from "firebase/firestore";

function Feed(props) {
  const [feed, setFeed] = useState([]);
  const db = getFirestore();

  async function getFeed() {
    try {
      // const response = await axios.get("http://localhost:9000/feed");
      const querySnapshot = await getDocs(collection(db, "users"))
      console.log(querySnapshot);
      // console.log(response.data);
      // setFeed(response.data);
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
        <Card key={item.activity_id} {...item} />
      ))}
    </>
  );
}
export default Feed;
