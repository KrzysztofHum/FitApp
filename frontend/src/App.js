
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";
import ReminedpasswordScreen from "./screens/ReminedpasswordScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  return (
      <BrowserRouter>
    <header>
      <Route path="/" component={Layout}></Route>
    </header>
    <main>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/logowanie" component={SigninScreen} exact={true}></Route>
            <Route path="/przypomnieniehasla" component={ReminedpasswordScreen} exact={true}></Route>
    </main>
    </BrowserRouter>
  );
}

export default App;
