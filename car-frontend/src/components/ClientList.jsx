import { useState} from 'react';

export default function ClientList({ api }) {
    const [clients, setClients] = useState([]);

    const fetchClients =  () => {
        api.get('/clients').then(res => setClients(res.data))
            
return(
        <div className="p-4">
            <h1>Client List</h1>
            <button className="btn" onClick={fetchClients}>Fetch Clients</button>
            <ul>
                {clients.map(client => 
                    <li key={client.id}>{client.first_name} {client.last_name} - {client.age} - {client.is_premium == 0 ? 'Regular Client' : 'Premium Client'}</li>
                )}
            </ul>
        </div>
)
}
}
