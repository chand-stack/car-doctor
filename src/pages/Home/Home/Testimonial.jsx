import { Rating } from '@smastrom/react-rating';
import user from '../../../assets/assets/Ellipse 2.svg'
import user2 from '../../../assets/assets/Ellipse 2 (1).svg'
import quote from '../../../assets/assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <div>
            <div className="text-center space-y-5">
                <h1 className="text-xl font-bold text-[#FF3811]">Testimonial</h1>
                <p className="text-3xl md:text-5xl font-bold text-black">What Customer Says</p>
                <p className="font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
            </div>

<div className='flex justify-center mt-14 mb-28'>
            <div className="carousel rounded-box md:w-4/5">
  <div className="carousel-item flex-col w-1/2">
    <div className='flex gap-3'>
        <img className='h-16' src={user} alt="" />
        <div>
            <h1 className='text-2xl font-bold'>Awlad Hossain</h1>
            <p className='text-xl font-semibold'>Businessman</p>
        </div>
        <img className='h-14 flex-grow opacity-30' src={quote} alt="" />
    </div>
    
    <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
    <Rating style={{ maxWidth: 150 }} value={5} />
  </div> 
  <div className="carousel-item flex-col w-1/2">
    <div className='flex gap-3'>
        <img className='h-16' src={user2} alt="" />
        <div>
            <h1 className='text-2xl font-bold'>Awlad Hossain</h1>
            <p className='text-xl font-semibold'>Businessman</p>
        </div>
        <img className='h-14 flex-grow opacity-30' src={quote} alt="" />
    </div>
    
    <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
    <Rating style={{ maxWidth: 150 }} value={5} />
  </div> 
  <div className="carousel-item flex-col w-1/2">
    <div className='flex gap-3'>
        <img className='h-16' src={user} alt="" />
        <div>
            <h1 className='text-2xl font-bold'>Awlad Hossain</h1>
            <p className='text-xl font-semibold'>Businessman</p>
        </div>
        <img className='h-14 flex-grow opacity-30' src={quote} alt="" />
    </div>
    
    <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
    <Rating style={{ maxWidth: 150 }} value={5} />
  </div> 
  <div className="carousel-item flex-col w-1/2">
    <div className='flex gap-3'>
        <img className='h-16' src={user2} alt="" />
        <div>
            <h1 className='text-2xl font-bold'>Awlad Hossain</h1>
            <p className='text-xl font-semibold'>Businessman</p>
        </div>
        <img className='h-14 flex-grow opacity-30' src={quote} alt="" />
    </div>
    
    <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
    <Rating style={{ maxWidth: 150 }} value={5} />
  </div> 

</div>
</div>
            
        </div>
    );
};

export default Testimonial;