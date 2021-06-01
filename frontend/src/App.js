
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
      <BrowserRouter>
    <header>
      <Route path="/" component={Layout}></Route>
    </header>
    <main>
            <Route path="/" component={HomeScreen} exact={true}></Route>
    </main>
    </BrowserRouter>
  );
}

export default App;
