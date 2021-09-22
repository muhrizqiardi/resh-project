import ButtonNormal, { ButtonPrimary } from "./components/Button";
import Textbox from "./components/TextBox";
import BookCard from "./components/BookCard";

const bookDetail = {
  bookAuthor: "McBebek Donald",
  bookTitle: "Bebek Madura",
  bookImg: "https://dummyimage.com/100x150.png",
  bookYear: 1928,
  bookStatus: {
    status: "Finished read",
    time: "2021-03-09T14:48:00.000Z",
  },
};

const user = {
  username: "muhrizqiardi",
  name: {
    firstName: "Muhammad Rizqi",
    lastName: "Ardiansyah",
  },
  avatar: "https://dummyimage.com/50x50.png",
};

const shareDetail = {
  user: user,
  bookDetail: bookDetail,
  time: "2021-09-22T11:48:00.000Z",
};

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <ButtonNormal>Button Normal</ButtonNormal>
      <ButtonPrimary>Button Primary</ButtonPrimary>
      <Textbox placeholder="Email" />
      <BookCard
        bookAuthor="Muhammad Rizqi Ardiansyah"
        bookTitle="MacBook Dart"
        bookImg="https://dummyimage.com/100x150.png"
        bookYear={2002}
        bookStatus={{
          status: "Added to library",
          time: "2021-03-09T14:48:00.000Z",
        }}
      />
      <BookCard {...bookDetail} />
    </div>
  );
}

export default App;
