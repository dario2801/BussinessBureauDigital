import "./App.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import SearchResult from "./pagina1/SearchResult";
import SearchDescription from "./pagina2/SearchDescription";
function App() {
  return (
    <div className="App">
      <SearchResult />
      <SearchDescription />
    </div>
  );
}

export default App;
