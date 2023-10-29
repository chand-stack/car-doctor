import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const BookingDetails = () => {
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([])

    const url = `http://localhost:5000/booking?email=${user?.email}`

    useEffect(()=>{
        // fetch(url)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     setBookings(data)
        // })
        axios.get(url,{withCredentials:true})
        .then(res => {
            setBookings(res.data)
        })
    },[url])
    console.log(bookings);

    return (
        <div>
            
        </div>
    );
};

export default BookingDetails;