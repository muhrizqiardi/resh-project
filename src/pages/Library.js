import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const libraryExample = [
  {
    user: {
      username: "muhrizqiardi",
      name: {
        firstName: "Muhammad Rizqi",
        lastName: "Ardiansyah",
      },
      avatar: "https://dummyimage.com/50x50.png",
    },
    book: {
      author: "McBebek Donald",
      title: "Bebek Madura",
      img: "https://dummyimage.com/100x150.png",
      year: 1928,
      page_count: 132,
    },
    activity_id: "uzoiuxry9ujt9nhd",
    activity: "started reading",
    time: "2021-09-22T00:48:00.000Z",
  },
  {
    user: {
      username: "muhrizqiardi",
      name: {
        firstName: "Muhammad Rizqi",
        lastName: "Ardiansyah",
      },
      avatar: "https://dummyimage.com/50x50.png",
    },
    book: {
      author: "McBebek Donald",
      title: "Bebek Madura",
      img: "https://dummyimage.com/100x150.png",
      year: 1928,
      page_count: 132,
    },
    activity_id: "n6oscxuu6arsx3jt",
    activity: "finished reading",
    time: "2021-09-22T00:48:00.000Z",
  },
];

function Library(props) {
  const [library, setLibrary] = useState([]);

  async function getLibrary() {
    try {
      const response = await axios.get(
        "http://localhost:9000/users?username=muhrizqiardi"
      );
      console.log(response.data);
      setLibrary(response.data[0].library);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLibrary();
  }, []);

  return (
    <>
      {libraryExample.map((item) => (
        <Card key={library.indexOf(item)} {...item}/>
      ))}
    </>
  );
}
export default Library;
