import './App.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import SearchResult from './pagina1/SearchResult';
import ProductsResult from './pagina2/ProductsResult'
function App() {
  return (
    <div>
      <SearchResult />
      <ProductsResult />
    </div>
  );
}

export default App;
