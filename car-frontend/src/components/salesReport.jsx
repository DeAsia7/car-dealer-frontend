import { useState} from 'react';

export default function SalesReport({api}) {
    const [sales, setSales] = useState([]);

    const fetchSales = () => {
        api.get('/sales/sales-report').then(res => setSales(res.data))
    }

    return (
        <div className="p-4">
            <button className='btn' onClick={fetchSales}>Get Sales Report</button>
            <ul>
                {sales.map((sale, i) => (
                    <li key={i}>{sale.client_name} bought a {sales.color} {sale.make} {sale.model} on {sale.date_of_sale} for ${sale.price}</li>
                    
                )
            )}
            
            </ul>

        </div>
    )
}