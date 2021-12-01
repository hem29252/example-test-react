import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListUser from "./pages/list-user";
import CreateUser from "./pages/create-user";
import UserDetails from "./pages/user-details";
import { Provider } from "react-redux";
import store from "./redux/store";
import Table1 from "./pages/Table1";
import Table2 from "./pages/Table2";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListUser} />
            <Route exact path="/create" component={CreateUser} />
            <Route exact path="/edit/:id" component={CreateUser} />
            <Route exact path="/user/detail/:id" component={UserDetails} />
            <Route exact path="/table1" component={Table1} />
            <Route exact path="/table2" component={Table2} />
            <Route exact component={() => <h1>Not Found Page 404</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
