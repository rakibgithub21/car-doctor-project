import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data =>setServices(data))
    },[])
    return (
        <div className="mb-10">
            <div className="text-center space-y-3 mb-10">
                <h3 className="text-2xl font-bold text-orange-400">Services</h3>
                <p className="text-5xl">Our Services Area</p>
                <p className="w-2/3 text-[#737373] text-lg mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 lg:grid-cols-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;