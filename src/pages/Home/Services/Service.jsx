
import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
    const { title, img, price, description } = service;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img} className="w-full h-[225px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-[#FF3811]">Price: ${price}</p>
                <p>{description.slice(0,100) + '.....'}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-circle btn-outline"><FaArrowRight className="text-orange-400 text-xl" /></button>
                </div>
            </div>
        </div>
    );
};

export default Service;