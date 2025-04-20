import React, { useEffect, useState } from 'react';

function CropList(){
    const [crops,setCrops] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/crops/")
        .then(res => res.json())
        .then(data => setCrops(data));
    }, [setCrops]);
    return(
        <div>
            <h2 className="text-xl font-bold mb-4">Available Crops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{crops.map(crop => (
                <div key={crop.id} className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">{crop.name}</h3>
                    <p>${crop.price}</p>
                </div>
            ))}</div>
        </div>
    );
}

export default CropList;