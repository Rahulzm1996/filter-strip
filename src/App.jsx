import "./App.css";
import { WelcomeHeader } from "./components/common/welcome-header";
import { FilterList } from "./components/filter-list/filterList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WelcomeHeader></WelcomeHeader>
        <FilterList></FilterList>
      </div>
    </div>
  );
}

export default App;
