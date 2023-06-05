import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import SearchResult from "./pagina1/SearchResult";
import ProductsResult from "./pagina2/ProductsResult";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<SearchResult />}>
                    <Route exact path="category/:slugCategory" element={<SearchResult />}/>
                </Route>
                <Route path="/product">
                    <Route exact path=":sku" element={<ProductsResult />}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
