import React from 'react';
import FooterTop from './FooterTop';

const Footer = () => {
    return (
        <footer>
            <FooterTop />
            <div className="py-3 border-t bg-[#37C2E1] text-base-100">
                <div className="container mx-auto flex justify-between items-center">
                    <p className='font-semibold   capitalize'>Copyright &copy; 2023 eventPlanner. All rights reserved</p>
                    <div>
                        <ul className='navbar gap-3 capitalize'>
                            <li><a href="https://www.facebook.com/" target='_blank'>facebook</a></li>
                            <li><a href="https://www.facebook.com/" target='_blank'>instagram</a></li>
                            <li><a href="/" target='_blank'>twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;