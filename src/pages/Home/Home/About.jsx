import person from '../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../assets/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row items-center">
    <div className='relative lg:w-1/2'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 border-8 border-white right-10 top-1/2 absolute rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2'>
        <h1 className='text-2xl font-bold text-[#FF3811]'>About Us</h1>
      <h1 className="text-5xl font-bold text-black">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
      <button className="btn btn-primary bg-[#FF3811] border-none">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;