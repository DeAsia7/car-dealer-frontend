import { useState } from "react";

 export default function  AddCar({ api }) {
  
    const [form, setForm] = useState({
        make: "",
        model: "",
        year: "",
        price: "",
        color: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        const handleSubmit = async () => {
            const formatted = {
                ...form,
                year: number(form.year),
                price: number(form.price),
            };

            try{
                const res = await api.post("/cars", formatted);
                alert("Car added successfully");

            }catch (err) {
                alert("Error adding car" );
            }
        };

        return(
            <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4"> Add a new car</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input 
                    name="make"
                    placeholder="make"
                    value={form.make}
                    onChange={handleChange}
                    className="input"
                  />
                  <input
                  name="model"
                    placeholder="Model"
                    value={form.model}
                    onChange={handleChange}
                    className="input"
                    />
                    <input
                    name="year"
                    placeholder="Year"
                    type="number"
                    value={form.year}
                    onChange={handleChange}
                    className="input"
                    />
                    <input
                    name="price"
                    placeholder="Price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    className="input"
                    />
                    <input
                    name="color"
                    placeholder="Color"
                    value={form.color}
                    onChange={handleChange}
                    className="input"
                    />
                </div>
                <button 
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Add Car
                </button>
            </div>
        );
    }
}

