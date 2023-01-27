import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.css';
import Layout from './Components/Layout';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Layout />
      </div>
    </Router>
  );
}

export default App;
