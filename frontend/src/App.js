
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
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
    <footer>
    <Route path="/" component={Footer}></Route>     
    </footer>
    </BrowserRouter>
  );
}

export default App;
