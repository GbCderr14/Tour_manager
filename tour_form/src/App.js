import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Form from './pages/form';
import Userdetail from'./pages/details';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/user-detail' element={<Userdetail/>}/>
     </Routes>
    </div>
  );
}

export default App;
