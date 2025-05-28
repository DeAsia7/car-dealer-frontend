import { useState } from 'react'
import Login  from './components/login'
import { createApi } from './api';
import { MostExpensiveCar } from './components/expensiveCar';
import { SalesReport } from './components/salesReport';
import { ClientsList } from './components/client.list';
import { SalesByClient } from './components/salesByClient';


function App() {
  const [token, setToken] = useState(null);
  const api = token ? createApi(token) : null;

  if(!token) 
    return <Login setToken={setToken} />

    return (
      <div className="space-y-8">
        <MostExpensiveCar api={api} />
        <SalesReport api={api} />
        <ClientsList api={api} />
        <SalesByClient api={api} />
        
      </div>
    )
  }

  export default App;


