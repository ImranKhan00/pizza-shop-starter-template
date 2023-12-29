import "./App.css";
// eslint-disable-next-line
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

// const App = () => {
//   return (
//     <div>
//       <TopBar />
//     </div>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
