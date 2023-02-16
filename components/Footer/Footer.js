import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className=''>
            <div className='py-7  bg-[#0e0943] text-white'>
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0 gap-6 items-baseline justify-between ">
                        <div>
                            <div>
                                <h4 className="text-xl capitalize mb-4 font-semibold">contact info</h4>
                                <div className='space-y-3 text-sm lg:text-md'>
                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt size={20} />
                                        <span>mirsarai, chittagong</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope size={20} />
                                        <span>mirsarai, chittagong</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaPhone size={20} />
                                        <span>+8801234567891</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h4 className="text-2xl capitalize mb-4 font-semibold">connect with event</h4>
                                <ul className='navbar gap-3'>
                                    <li> <a href="https://www.facebook.com" target="_blank" ><FaFacebook size={24} /></a> </li>
                                    <li> <a href="https://www.instagram.com" target="_blank" > <FaInstagram size={24} /> </a> </li>
                                    <li> <a href="https://twitter.com" target='_blank' ><FaTwitter size={24} /></a> </li>
                                </ul>
                                <p className='text-xs mt-3'>Copyright &copy; 2023 event.</p>
                            </div>
                        </div>
                        <div className=''>
                            <h4 className="text-2xl capitalize mb-4 font-semibold">event venues</h4>
                            <ul>
                                <li>
                                    InterContinental Dhaka
                                </li>
                                <li>
                                    International Convention City Bashundhara (ICCB)
                                </li>
                                <li>
                                    Bangabandhu International Conference Center
                                </li>
                                <li>
                                    Pan Pacific Sonargaon Dhaka Hotel
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-2xl capitalize mb-4 font-semibold">recent event</h4>
                            <div className="space-y-3">
                                <div className='flex items-center gap-3'>
                                    <figure>
                                        <img src="https://img.freepik.com/free-photo/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles_8353-10052.jpg?w=740&t=st=1673432788~exp=1673433388~hmac=25afa30b5b45cd3c32351308d29aaae2ecd3989aa1f24ce16558d1444210be1a" alt="" className='w-20 h-20 rounded-md' />
                                    </figure>
                                    <div>
                                        <p className=' capitalize'>wedding event</p>
                                        <p>22 Oct 2022</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <figure>
                                        <img src="https://img.freepik.com/free-photo/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles_8353-10052.jpg?w=740&t=st=1673432788~exp=1673433388~hmac=25afa30b5b45cd3c32351308d29aaae2ecd3989aa1f24ce16558d1444210be1a" alt="" className='w-20 h-20 rounded-md' />
                                    </figure>
                                    <div>
                                        <p className=' capitalize'>wedding event</p>
                                        <p>22 Oct 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='capitalize'>
                            <h4 className="text-2xl  mb-4 font-semibold">customar service</h4>
                            <ul>
                                <li> <Link href='/'>customar services</Link> </li>
                                <li> <Link href='/'>terms & conditions</Link> </li>
                                <li> <Link href='/'>FAQs</Link> </li>
                            </ul>
                            <div className='mt-4'>
                                <div className="flex items-center gap-6">
                                    <img src="https://i.ibb.co/khpBckc/f67.png" alt="" className='h-16 w-16' />
                                    <h4 className="text-2xl font-bold"> <span className='text-[#0EA5E9]'>Event</span>Mart</h4>
                                </div>
                                <p id="google_translate_element" className='text-sm mt-3 text-justify'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;