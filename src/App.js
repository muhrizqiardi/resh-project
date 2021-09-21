import ButtonNormal, { ButtonPrimary } from "./components/Button";
import Textbox from "./components/TextBox";
function App() {
  return (
    <div className="App">
      <ButtonNormal>Button Normal</ButtonNormal>
      <ButtonPrimary>Button Primary</ButtonPrimary>
      <Textbox placeholder="Email" />
    </div>
  );
}

export default App;
