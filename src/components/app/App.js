// import logo from './logo.svg';
import Header from '../table/header';
import '../../../node_modules/jquery/dist/jquery';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router,Routes,  Route } from 'react-router-dom';
import './App.css'; 
import Form from '../table/form';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/addform" element={<Form/>}></Route>
        </Routes>
      </Router>
       
      {/* <Form/> */}
      
    </div>
  );
}

export default App;
