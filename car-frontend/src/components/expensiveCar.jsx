import { useState} from 'react';

export default function MostExpensiveCar({api}) {
    const [car, setCar] = useState(null);

    const fetchCar = () => {
        api.get('/cars/expensive').then(res => setCar(res.data))
    }

    return (
        <div className="p-4"> 
        <button className="btn" onClick={fetchCar}> Get most expensive car</button>
        {car && (<p> {car.make} {car.model} - ${car.price}</p>)}
    
        </div>
    )
}