import "./App.css";
import Fib from "./Fib";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>

        <Link to="/">Home!</Link>
        <Link to="/otherpage">Other Page</Link>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Fib/>}></Route>
            <Route exact path="/otherpage" element={<OtherPage/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
