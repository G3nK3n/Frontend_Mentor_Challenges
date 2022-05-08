import Layout from './Components/Layout';

import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
