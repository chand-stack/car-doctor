import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ServiceDetail = () => {
    const loadedData = useLoaderData()
    const {_id,title,price,service_id,img} = loadedData
    console.log(loadedData);
    const {user} = useContext(AuthContext)

    const bookingHandler = e => {
        e.preventDefault()
        const firstName = e.target.fname.value 
        const lastName = e.target.lname.value 
        const phone = e.target.phone.value 
        const email = user?.email 
        const message = e.target.textar.value
        console.log(firstName,lastName,phone,email,message);
        const bookingInfo = {
            UserName: firstName+' '+lastName,
            serviceTitle: title,
           phone: phone,
           email: email,
            message:message,
            price: price,
            service_id : service_id,
            photo:img
        }
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <form onSubmit={bookingHandler} className="bg-gray-50 p-4 md:p-10 lg:p-20 my-28 space-y-2 container mx-auto">
        <div className=" grid grid-cols-2 gap-5 ">
            <div className=" space-y-4">
            <input type="text" name="fname" placeholder="First name" className="input w-full" />
            <input type="text" name="phone" placeholder="Your phone" className="input w-full" />
            </div>
            <div className=" space-y-4">
            <input type="text" name="lname" placeholder="Last name" className="input w-full" />
            <input type="text" name="email" placeholder="Your email" defaultValue={user?.email} className="input w-full" />
            </div>
            <div className="col-span-2">
            <textarea name="textar" className="textarea w-full h-52" placeholder="Your Message"></textarea>
            </div>
        </div>
        <input type="submit" className="w-full btn bg-[#FF3811] text-white" value="Order Confirm" />
        </form>
    );
};

export default ServiceDetail;