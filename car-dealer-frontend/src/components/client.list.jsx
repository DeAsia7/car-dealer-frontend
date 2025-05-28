import { useState} from 'react';

export function Clientlist({ api }) {
    const [clients, setClients] = useState([]);

    const fetchClients =  () => {
        api.get('/clients').then(res => setClients(res.data))
            
return(
        <div className="p-4">
            <h1>Client List</h1>
            <button className="btn" onClick={fetchClients}>Fetch Clients</button>
            <ul>
                {clients.map(client => 
                    <li key={client.id}>{clients.first_name} {clients.last_name}</li>
                )}
            </ul>
        </div>
)
}
}
