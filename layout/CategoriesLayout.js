import React from 'react';
import CategorySidebar from '../components/CategorySidebar/CategorySidebar';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const CategoriesLayout = ({ children }) => {
    return (
        <div className='container mx-auto pb-8 mt-28'>
            <div className="drawer drawer-mobile relative">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn bg-[#0EA5E9] z-50 hover:bg-[#0EA5E9] border-none drawer-button lg:hidden absolute right-4  top-0"> <HiOutlineMenuAlt1 size={20} className='text-white' title='Show Categories'></HiOutlineMenuAlt1> </label>
                    {children}
                </div>
                <div className="drawer-side overflow-y-hidden m-0 p-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <CategorySidebar />
                </div>
            </div>
        </div>
    );
};

export default CategoriesLayout;