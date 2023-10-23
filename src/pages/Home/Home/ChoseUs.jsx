import icon1 from '../../../assets/assets/icons/check.svg'
import icon2 from '../../../assets/assets/icons/deliveryt.svg'
import icon3 from '../../../assets/assets/icons/group.svg'
import icon4 from '../../../assets/assets/icons/person.svg'
import icon5 from '../../../assets/assets/icons/Group 38729.svg'
import icon6 from '../../../assets/assets/icons/Wrench.svg'

const ChoseUs = () => {
    return (
        <div>
            <div className="text-center space-y-5">
                <h1 className="text-xl font-bold text-[#FF3811]">Core Features</h1>
                <p className="text-3xl md:text-5xl font-bold text-black">Why Choose Us</p>
                <p className="font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
            </div>

            <div className='flex flex-wrap justify-evenly mt-12 mb-24'>

<div className='border p-8 space-y-2 rounded-lg'>
    <img className='mx-auto' src={icon3} alt="" />
    <h1 className='text-xl text-center font-bold text-gray-700'>Expert Team</h1>
</div>

<div className='bg-[#FF3811] text-white border p-8 space-y-2 rounded-lg'>
    <img className='mx-auto' src={icon5} alt="" />
    <h1 className='text-xl text-center font-bold'>Timely Delivery</h1>
</div>

<div className='border p-8 space-y-2 rounded-lg'>
    <img className='mx-auto' src={icon4} alt="" />
    <h1 className='text-xl text-center font-bold text-gray-700'>24/7 Support</h1>
</div>
<div className='border p-8 space-y-2 rounded-lg'>
    <img className='mx-auto' src={icon6} alt="" />
    <h1 className='text-xl text-center font-bold text-gray-700'>Best Equipment</h1>
</div>
<div className='border p-8 space-y-2 rounded-lg'>
    <img className='mx-auto' src={icon1} alt="" />
    <h1 className='text-xl text-center font-bold text-gray-700'>100% Guranty</h1>
</div>

<div className='border p-8 space-y-2 rounded-lg'>
    <img className='mx-auto' src={icon2} alt="" />
    <h1 className='text-xl text-center font-bold text-gray-700'>Timely Delivery</h1>
</div>

            </div>
            
        </div>
    );
};

export default ChoseUs;