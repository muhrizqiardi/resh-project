import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function LibraryModule(props) {
  const { auth, library } = useSelector((state) => ({
    auth: state.auth,
    library: state.library,
  }));

  return library.library.map((libraryItem) => (
    <BookCard
      key={libraryItem.google_books_volume_id}
      googleBooksVolumeId={libraryItem.google_books_volume_id}
      user={{ username: libraryItem.username }}
    />
  ));
}
export default LibraryModule;
