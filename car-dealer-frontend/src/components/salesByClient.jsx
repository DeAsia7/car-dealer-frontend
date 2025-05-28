import { useState} from 'react';

export function SalesByClient({ api }) {
    canst [id, setId] = useState('');
    const [sales, setSales] = useState([]);

    const fetchSales = () => {
api.get('/sales/clients/${id}').then(res => setSales(res.data));
    }

    return(
<div className="p-4">
    <input className="input" placeholder= "Client ID" onChange={(e) => setId(e.target.value)} />

</div>
    )
}