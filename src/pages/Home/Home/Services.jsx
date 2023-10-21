import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const[services,setServices]=useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-5">
                <h1 className="text-xl font-bold text-[#FF3811]">Service</h1>
                <p className=" text-5xl font-bold text-black">Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&lsquo;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:px-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;