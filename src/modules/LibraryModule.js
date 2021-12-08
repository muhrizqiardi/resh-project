import { useSelector } from "react-redux";
import LibraryItemCard from "../components/LibraryItemCard";

function LibraryModule(props) {
  const { library } = useSelector((state) => ({
    library: state.library,
  }));

  return library.library.map((libraryData) => (
    <LibraryItemCard
      key={libraryData.google_books_volume_id}
      libraryData={libraryData}
      googleBooksVolumeId={libraryData.google_books_volume_id}
    />
  ));
}
export default LibraryModule;
