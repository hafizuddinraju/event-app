
import styles from '/styles/profile.module.css'
import { FaUserEdit } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const UserProfile = ({ show }) => {
    const { user } = useContext(AuthContext)
    const handleLayout = () => {
        show(true)
    }
    return (
        <section className="bg-white p-8">
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-2xl capitalize  py-3">profile</h3>
                <button onClick={handleLayout} type="button" className="hover:text-[#0EA5E9] duration-500"><FaUserEdit className="" size={24} title="Edit Profile" /></button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                <div className="border-r text-center">
                    <img src={user.photoURL} alt=""
                        className="w-36 h-36 mx-auto rounded-full border-2 border-transparent hover:border-[#0EA5E9] p-3 duration-500" />
                </div>
                <div className="col-span-2 p-8">
                    <ul className={`${styles.detailsUl} flex flex-col w-2/4 space-y-4  font-medium text-xl`}>
                        <li className={`${styles.details} border-l-4 border-[#0EA5E9] p-2 shadow-md`}> {user?.displayName} </li>
                        <li className={`${styles.details} border-l-4 border-[#0EA5E9] p-2 shadow-md`}> {user?.email} </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;