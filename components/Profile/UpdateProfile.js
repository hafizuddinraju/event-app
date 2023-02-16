import styles from '/styles/profile.module.css'
import { BsArrowLeftSquare } from "react-icons/bs";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import { UpdateUser } from '../../lib/helperUser';

const UpdateProfile = ({ hide }) => {
    const [imgUrl, setImgUrl] = useState('')
    const { user, updateUser } = useContext(AuthContext)
    const { handleSubmit, register } = useForm()

    //back to profile 
    const handleLayout = () => {
        hide(false)
    }
    //control update form
    const imgHostKey = process.env.NEXT_PUBLIC_IMGBB_API;
    const handleUpdateForm = data => {
        const name = data.name
        const image = data.image[0]

        const formData = new FormData();
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
        //host user image 
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {

                    const updateInfo = {
                        displayName: name,
                        photoURL: imgData.data.url
                    }
                    setImgUrl(imgData.data.url)
                    handleUpdateUser(updateInfo)
                }
            })

        //update user details in firebase
        const handleUpdateUser = (userInfo) => {
            updateUser(userInfo)
                .then((result) => {
                    console.log(result);
                    toast.success(' successfully updated')
                    hide(false)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    }
    return (
        <section className="bg-white p-8">
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-2xl capitalize  py-3">Update profile</h3>
                <button onClick={handleLayout} type="button" className="hover:text-[#0EA5E9] duration-500"><BsArrowLeftSquare size={24} title="Edit Profile" /></button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                <div className=" ">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="border-l col-span-2 p-8">
                    <form onSubmit={handleSubmit(handleUpdateForm)} className='space-y-4 lg:w-3/4 '>
                        <div className="form-control space-y-4">
                            <input type="text" placeholder='Name' {...register("name")} defaultValue={user?.displayName} className='input border-transparent rounded-none focus:outline-none border-b border-b-slate-300 focus:border-b-[#0EA5E9]' />
                            <input type="email" value={user?.email} className='input border-transparent rounded-none focus:outline-none input-disabled' disabled />
                            <input type="file" {...register("image")} accept='image/jpeg, image/png' className='file-input border-b' />
                        </div>
                        <button type='submit' className={`${styles.updateBtn} relative btn border border-[#0EA5E9] bg-transparent text-black hover:bg-transparent hover:border-[#0EA5E9]`}>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfile;