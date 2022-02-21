import style from './App.module.scss';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className={style.app}>
      <Outlet/>
    </div>
  );
}

export default App;
