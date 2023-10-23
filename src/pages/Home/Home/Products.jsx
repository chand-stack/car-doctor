import { Rating } from '@smastrom/react-rating'
import img1 from '../../../assets/assets/images/products/1.png'
import img2 from '../../../assets/assets/images/products/2.png'
import img3 from '../../../assets/assets/images/products/3.png'
import img4 from '../../../assets/assets/images/products/4.png'
import img5 from '../../../assets/assets/images/products/5.png'
import img6 from '../../../assets/assets/images/products/6.png'

import '@smastrom/react-rating/style.css'

const Products = () => {
    return (
        <div>
            <div className="text-center space-y-5">
                <h1 className="text-xl font-bold text-[#FF3811]">Popular Products</h1>
                <p className="text-3xl md:text-5xl font-bold text-black">Browse Our Products</p>
                <p className="font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
            </div>

            <div>

<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-4 lg:px-8 my-11'>
<div className="card bg-base-100 border-2">
  <figure className="px-10 pt-10 ">
    <div className='bg-gray-100 h-full w-full py-10'>
    <img src={img1} alt="Products" className="rounded-xl h-32 mx-auto" />
    </div>
  </figure>
  <div className="card-body items-center text-center">
    <Rating style={{ maxWidth: 150 }} value={5} />
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-[#FF3811] text-xl font-semibold'>$20.00</p>
  </div>
</div>
<div className="card bg-base-100 border-2">
  <figure className="px-10 pt-10 ">
  <div className='bg-gray-100 h-full w-full py-10'>
    <img src={img2} alt="Products" className="rounded-xl h-32 mx-auto" />
    </div>
  </figure>
  <div className="card-body items-center text-center">
    <Rating style={{ maxWidth: 150 }} value={5} />
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-[#FF3811] text-xl font-semibold'>$20.00</p>
  </div>
</div>
<div className="card bg-base-100 border-2">
  <figure className="px-10 pt-10 ">
  <div className='bg-gray-100 h-full w-full py-10'>
    <img src={img3} alt="Products" className="rounded-xl h-32 mx-auto" />
    </div>
  </figure>
  <div className="card-body items-center text-center">
    <Rating style={{ maxWidth: 150 }} value={5} />
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-[#FF3811] text-xl font-semibold'>$20.00</p>
  </div>
</div>
<div className="card  bg-base-100 border-2">
  <figure className="px-10 pt-10 ">
  <div className='bg-gray-100 h-full w-full py-10'>
    <img src={img4} alt="Products" className="rounded-xl h-32 mx-auto" />
    </div>
  </figure>
  <div className="card-body items-center text-center">
    <Rating style={{ maxWidth: 150 }} value={5} />
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-[#FF3811] text-xl font-semibold'>$20.00</p>
  </div>
</div>
<div className="card  bg-base-100 border-2">
  <figure className="px-10 pt-10 ">
  <div className='bg-gray-100 h-full w-full py-10'>
    <img src={img5} alt="Products" className="rounded-xl h-32 mx-auto" />
    </div>
  </figure>
  <div className="card-body items-center text-center">
    <Rating style={{ maxWidth: 150 }} value={5} />
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-[#FF3811] text-xl font-semibold'>$20.00</p>
  </div>
</div>
<div className="card  bg-base-100 border-2">
  <figure className="px-10 pt-10 ">
  <div className='bg-gray-100 h-full w-full py-10'>
    <img src={img6} alt="Products" className="rounded-xl h-32 mx-auto" />
    </div>
  </figure>
  <div className="card-body items-center text-center">
    <Rating style={{ maxWidth: 150 }} value={5} />
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-[#FF3811] text-xl font-semibold'>$20.00</p>
  </div>
</div>
</div>

            </div>
        </div>
    );
};

export default Products;