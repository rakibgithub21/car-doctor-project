import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel h-[80vh] w-full my-8">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full  rounded-lg" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg   ">
                    <div className='text-white pl-12 w-2/3 space-y-7'>
                        <h2 className='text-6xl font-medium'>Affordable Price For Car Servicing</h2>
                        <p>There Are Many Variations Of Passage Of Available, But The Majority Have Suffered Alteration In Some Form</p>
                        <div className='flex gap-10'>
                            <button className="btn btn-primary">Discover More</button> 
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg   ">
                    <div className='text-white pl-12 w-2/3 space-y-7'>
                        <h2 className='text-6xl font-medium'>Affordable Price For Car Servicing</h2>
                        <p>There Are Many Variations Of Passage Of Available, But The Majority Have Suffered Alteration In Some Form</p>
                        <div className='flex gap-10'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-lg" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg   ">
                    <div className='text-white pl-12 w-2/3 space-y-7'>
                        <h2 className='text-6xl font-medium'>Affordable Price For Car Servicing</h2>
                        <p>There Are Many Variations Of Passage Of Available, But The Majority Have Suffered Alteration In Some Form</p>
                        <div className='flex gap-10'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-lg" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg   ">
                    <div className='text-white pl-12 w-2/3 space-y-7'>
                        <h2 className='text-6xl font-medium'>Affordable Price For Car Servicing</h2>
                        <p>There Are Many Variations Of Passage Of Available, But The Majority Have Suffered Alteration In Some Form</p>
                        <div className='flex gap-10'>
                            <button className="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;