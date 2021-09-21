import ButtonNormal, { ButtonPrimary } from "./components/Button";
import Textbox from "./components/TextBox";
import BookCard from './components/BookCard'

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', width: 320, padding: "10px 5px"}}>
      <ButtonNormal>Button Normal</ButtonNormal>
      <ButtonPrimary>Button Primary</ButtonPrimary>
      <Textbox placeholder="Email" />
      <BookCard />
    </div>
  );
}

export default App;
