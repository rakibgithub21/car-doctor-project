import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mb-8 min-h-[60vh] rounded-lg bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img className='w-1/2 right-5 top-1/2 absolute rounded-lg border-8 border-white' src={parts} alt="" />
                </div>
                <div className='lg:w-1/2 md:mt-10 lg:mt-0 '>
                    <p className='text-2xl font-medium text-orange-500 '>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-warning ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;