import styles from '/styles/profile.module.css'
import { BsArrowLeftSquare } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const UpdateProfile = ({ hide }) => {
    const { user } = useContext(AuthContext)
    //back to profile 
    const handleLayout = () => {
        hide(false)
    }
    //control update form
    const handleUpdateForm = e => {
        e.preventDefault()
    }
    return (
        <section className="bg-white p-8">
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-2xl capitalize  py-3">Update profile</h3>
                <button onClick={handleLayout} type="button" className="hover:text-[#0EA5E9] duration-500"><BsArrowLeftSquare className="" size={24} title="Edit Profile" /></button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                <div className="border-r text-center">
                    <div className=" p-2 w-40 mx-auto  m-2 relative ">
                        <button type='button' className='absolute top-0 right-0'><RiPencilFill size={24} /></button>
                        <img src="https://1.bp.blogspot.com/-t-6LHB4Oiuo/YUgU9E5RWNI/AAAAAAAAN8c/fPjpFYIYKAA2QH-KDKJ5jBKdYhqP2c5CgCLcBGAsYHQ/s720/DP%2BFor%2BGirls%2B%252817%2529.jpg" alt=""
                            className="w-36 h-36 mx-auto rounded-full border-2 border-transparent p-3 duration-500" />
                    </div>
                </div>
                <div className="col-span-2 p-8">
                    <form onSubmit={handleUpdateForm} className='space-y-4 lg:w-3/4 '>
                        <div className="form-control space-y-4">
                            <input type="text" placeholder='Name' defaultValue={user?.displayName} className='input border-transparent rounded-none focus:outline-none border-b border-b-slate-300 focus:border-b-[#0EA5E9]' />
                            <input type="email" value={user?.email} className='input border-transparent rounded-none focus:outline-none input-disabled' disabled />
                        </div>
                        <button type='submit' className={`${styles.updateBtn} relative btn border border-[#0EA5E9] bg-transparent text-black hover:bg-transparent hover:border-[#0EA5E9]`}>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfile;