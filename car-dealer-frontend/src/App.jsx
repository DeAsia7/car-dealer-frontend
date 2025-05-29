import { useState } from 'react'
import  Login   from './components/login'
import { createApi } from './api';
import { MostExpensiveCar } from './components/expensiveCar';
import { SalesReport } from './components/salesReport';
import { ClientList } from './components/ClientList';
import { SalesByClient } from './components/salesByClient';
//import { addCar} from './components/addCar'


function App() {
  const [token, setToken] = useState(null);
  const api = token ? createApi(token) : null;

  if(!token) 
    return <Login setToken={setToken} />

    return (
      <div className="p-4">
        <MostExpensiveCar api={api} />
        <SalesReport api={api} />
        <ClientList api={api} />
        <SalesByClient api={api} />
        <addCar api={api} />
        
      </div>
    )
  }

  export default App;


//51 min

