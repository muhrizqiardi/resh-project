import ButtonNormal, { ButtonPrimary } from "./components/Button";
import Textbox from "./components/TextBox";
import Card from "./components/Card";

const bookDetail = {
  author: "McBebek Donald",
  title: "Bebek Madura",
  img: "https://dummyimage.com/100x150.png",
  year: 1928,
};

const user = {
  username: "muhrizqiardi",
  name: {
    firstName: "Muhammad Rizqi",
    lastName: "Ardiansyah",
  },
  avatar: "https://dummyimage.com/50x50.png",
};

// added to library, started reading, finished reading, reviewed, shared
const cardReviewDetail = {
  activity: "reviewed",
  time: "2021-09-22T00:48:00.000Z",
  review: {
    rating: 0.875,
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rem fugit blanditiis mollitia deleniti vitae voluptatibus, ipsam earum consequatur eligendi, facere quam tenetur et accusantium maxime. Hic repellat odio quis?",
  },
};

const cardShareDetail = {
  activity: "shared",
  time: "2021-09-22T00:48:00.000Z",
  quote: {
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rem fugit blanditiis mollitia deleniti vitae voluptatibus, ipsam earum consequatur eligendi, facere quam tenetur et accusantium maxime. Hic repellat odio quis?",
  },
};

const cardDetail = {
  activity: "started reading",
  time: "2021-09-22T00:48:00.000Z",
};

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <ButtonNormal>Button Normal</ButtonNormal>
      <ButtonPrimary>Button Primary</ButtonPrimary>
      <Textbox placeholder="Email" />

      {/* Card: Added to Library */}
      <Card
        user={{
          username: "muhrizqiardi",
          name: {
            firstName: "Muhammad Rizqi",
            lastName: "Ardiansyah",
          },
          avatar: "https://dummyimage.com/50x50.png",
        }}
        book={{
          author: "McBebek Donald",
          title: "Bebek Madura",
          img: "https://dummyimage.com/100x150.png",
          year: 1928,
        }}
        activity="added to library"
        time="2021-09-22T00:48:00.000Z"
      />

      {/* Card: Started Reading */}
      <Card
        user={{
          username: "muhrizqiardi",
          name: {
            firstName: "Muhammad Rizqi",
            lastName: "Ardiansyah",
          },
          avatar: "https://dummyimage.com/50x50.png",
        }}
        book={{
          author: "McBebek Donald",
          title: "Bebek Madura",
          img: "https://dummyimage.com/100x150.png",
          year: 1928,
        }}
        activity="started reading"
        time="2021-09-22T02:18:00.000Z"
      />

      {/* Card: Shared */}
      <Card
        user={{
          username: "muhrizqiardi",
          name: {
            firstName: "Muhammad Rizqi",
            lastName: "Ardiansyah",
          },
          avatar: "https://dummyimage.com/50x50.png",
        }}
        book={{
          author: "McBebek Donald",
          title: "Bebek Madura",
          img: "https://dummyimage.com/100x150.png",
          year: 1928,
        }}
        activity="shared"
        quote={{
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rem fugit blanditiis mollitia deleniti vitae voluptatibus."
        }}
        time="2021-09-22T02:18:00.000Z"
      />

      {/* Card: Finished Reading */}
      <Card
        user={{
          username: "muhrizqiardi",
          name: {
            firstName: "Muhammad Rizqi",
            lastName: "Ardiansyah",
          },
          avatar: "https://dummyimage.com/50x50.png",
        }}
        book={{
          author: "Bastian Steel",
          title: "Bebek Madura",
          img: "https://dummyimage.com/100x150.png",
          year: 1928,
        }}
        activity="finished reading"
        time="2021-09-22T04:48:00.000Z"
      />

      {/* Card: Reviewed */}
      <Card
        user={{
          username: "muhrizqiardi",
          name: {
            firstName: "Muhammad Rizqi",
            lastName: "Ardiansyah",
          },
          avatar: "https://dummyimage.com/50x50.png",
        }}
        book={{
          author: "Bastian Steel",
          title: "Bebek Madura",
          img: "https://dummyimage.com/100x150.png",
          year: 1928,
        }}
        activity="finished reading"
        time="2021-09-22T04:48:00.000Z"
      />
    </div>
  );
}

export default App;
