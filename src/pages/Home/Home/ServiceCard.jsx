import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img,price,title,_id} = service;
    return (
        <div className="card bg-base-100 border-2">
  <figure className="px-10 pt-10">
    <img src={img} alt="Services" className="rounded-xl h-[250px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{title}</h2>
    
    <div className="flex justify-between items-center">
    <p className="text-xl font-semibold text-[#FF3811]">Price: ${price}</p>
      <Link to={`/services/${_id}`}>
      <button className="btn bg-transparent border-none text-2xl text-[#FF3811] rounded-full"><BsArrowRight/></button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;