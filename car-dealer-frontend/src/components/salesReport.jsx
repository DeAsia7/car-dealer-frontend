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
                {sales.map((sale, i) => {
                    <li key={i}>{sale.client_name} bought a {sales.color} {sale.make} {cars.model} opn {sale.date_of_sale} for {sale.price}</li>
                }
            )}
            
            /*  client_name: sql `CONCAT(${clients.first_name}, ' ', ${clients.last_name})`,
        make: cars.make,
        model: cars.model,
        price: cars.price,
        year: cars.year,
        color: cars.color,
        date_of_sale: sales.sale_date,
        */
            </ul>

        </div>
    )
}