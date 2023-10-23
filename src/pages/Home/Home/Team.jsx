import team1 from '../../../assets/assets/images/team/1.jpg'
import team2 from '../../../assets/assets/images/team/2.jpg'
import team3 from '../../../assets/assets/images/team/3.jpg'

import icon1 from '../../../assets/Group 4889.svg'
import icon2 from '../../../assets/Group 4891.svg'
import icon3 from '../../../assets/Group 4892.svg'
import icon4 from '../../../assets/Group.svg'

const Team = () => {
    return (
        <div>
            <div className="text-center space-y-5">
                <h1 className="text-xl font-bold text-[#FF3811]">Team</h1>
                <p className="text-3xl md:text-5xl font-bold text-black">Meet Our Team</p>
                <p className="font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-3 md:px-5 mt-8 mb-24'>

            <div className="card bg-base-100 border-2">
  <figure className="px-10 pt-10 ">

    <img src={team1} alt="Products" className="rounded-xl mx-auto" />
  </figure>
  <div className="card-body items-center text-center">
    
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-xl text-gray-700 font-bold'>Engine Expert</p>
    <div className='flex justify-center gap-2'>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full' src={icon4} alt="" />
    </div>
  </div>
</div>
            <div className="card bg-base-100 border-2">
  <figure className="px-10 pt-10 ">

    <img src={team2} alt="Products" className="rounded-xl mx-auto" />
  </figure>
  <div className="card-body items-center text-center">
    
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-xl text-gray-700 font-bold'>Engine Expert</p>
    <div className='flex justify-center gap-2'>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full' src={icon4} alt="" />
    </div>
  </div>
</div>
            <div className="card bg-base-100 border-2">
  <figure className="px-10 pt-10 ">

    <img src={team3} alt="Products" className="rounded-xl mx-auto" />
  </figure>
  <div className="card-body items-center text-center">
    
    <h2 className='card-title text-2xl font-bold'>Car Engine Plug</h2>
    <p className='text-xl text-gray-700 font-bold'>Engine Expert</p>
    <div className='flex justify-center gap-2'>
        <img src={icon1} alt="" />
        <img src={icon2} alt="" />
        <img src={icon3} alt="" />
        <img className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full' src={icon4} alt="" />
    </div>
  </div>
</div>

            </div>

        </div>
    );
};

export default Team;