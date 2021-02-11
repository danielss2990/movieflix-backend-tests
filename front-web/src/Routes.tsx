import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalog from "./pages/Catalog";
import DetailsFilms from "./pages/Catalog/components/DetailsFilms";
import Home from "./pages/Home";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/filmes" exact>
                    <Catalog />
                </Route>
                <Route path="/filmes/:filmeId">
                    <DetailsFilms />
                </Route>
            </Switch>
        </BrowserRouter>
    )
    
}

export default Routes;