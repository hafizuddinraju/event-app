import Image from "next/image";
import LayoutDashboard from "../../layout/LayoutDashboard";
import styles from '/styles/profile.module.css'
import { FaUserEdit } from "react-icons/fa";
const profile = () => {
    return (
        <LayoutDashboard>

            <section className="bg-white p-8">
                <div className="flex justify-between items-center">
                    <h3 className="font-medium text-2xl capitalize  py-3">profile</h3>
                    <button type="button" className="hover:text-[#0EA5E9] duration-500"><FaUserEdit className="" size={24} title="Edit Profile" /></button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                    <div className="border-r text-center">
                        <img src="https://1.bp.blogspot.com/-t-6LHB4Oiuo/YUgU9E5RWNI/AAAAAAAAN8c/fPjpFYIYKAA2QH-KDKJ5jBKdYhqP2c5CgCLcBGAsYHQ/s720/DP%2BFor%2BGirls%2B%252817%2529.jpg" alt=""
                            className="w-36 h-36 mx-auto rounded-full border-2 border-transparent hover:border-blue-400 p-3 duration-500" />
                        <h4 className="font-medium text-xl capitalize py-4">User Name</h4>
                    </div>
                    <div className="col-span-2 p-8">
                        <ul className={`${styles.detailsUl} flex flex-col w-2/4 space-y-4  font-medium text-xl`}>
                            <li className={`${styles.details} border-l-4 border-blue-400 p-2 shadow-md`}>mayraj@gmail.com</li>
                            <li className={`${styles.details} border-l-4 border-blue-400 p-2 shadow-md`}>01628649295</li>
                        </ul>
                    </div>
                </div>
            </section>
        </LayoutDashboard>
    );
};

export default profile;