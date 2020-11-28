import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Repository from './components/repository';
import Repositories from './components/repositories';

function App() {
  return (
    <div className="App container-fluide bg-dark full p-5">
      <Repositories></Repositories>
      {/* <Repository></Repository> */}
    </div>
  );
}

export default App;
