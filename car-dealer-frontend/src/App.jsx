import { useState } from 'react'
import Login  from './components/Login'
import { createApi } from './api';
import { MostExpensiveCar } from './components/MostExpensiveCar';
import { SalesReport } from './components/SalesReport';
import { ClientList } from './components/ClientList';
import { SalesByClient } from './components/SalesByClient';


function App() {
  const [token, setToken] = useState(null);
  const api = token ? createApi(token) : null;

  if(!token) 
    return <Login setToken={setToken} />

    return (
      <div className="space-y-8">
        <MostExpensiveCar api={api} />
        <SalesReport api={api} />
        <ClientList api={api} />
        <SalesByClient api={api} />
        
      </div>
    )
  }

  export default App;


