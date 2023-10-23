import img from '../../../assets/assets/001-timetable.svg'
import img2 from '../../../assets/assets/Group 34.svg'
import img3 from '../../../assets/assets/Group 35.svg'
const Call = () => {
    return (
        <div className='text-white bg-black my-9 md:my-24 flex flex-col md:flex-row justify-around gap-5 py-5 md:py-14'>
            <div className='flex items-center px-5 md:px-0 gap-3'>
                <img src={img} alt="" />
                <div>
                    <p className="text-lg font-medium">We are open monday-friday</p>
                    <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center px-5 md:px-0 gap-3'>
                <img src={img2} alt="" />
                <div>
                    <p className="text-lg font-medium">Have a question?</p>
                    <h1 className="text-2xl font-bold">+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex items-center px-5 md:px-0 gap-3'>
                <img src={img3} alt="" />
                <div>
                    <p className="text-lg font-medium">Need a repair? our address</p>
                    <h1 className="text-2xl font-bold">Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Call;