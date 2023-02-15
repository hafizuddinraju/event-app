import styles from '/styles/profile.module.css'
import { BsArrowLeftSquare } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import DragFile from '../DragFile/DragFile';
import { useState } from 'react';
import { useCallback } from 'react';

const UpdateProfile = ({ hide }) => {
    const [showDrag, setShowDrag] = useState(false)
    const [img, setImg] = useState([])
    const { user, updateUser } = useContext(AuthContext)
    console.log(user)
    const handlebtn = () => {
        setShowDrag(true)
        if (showDrag) {
            setShowDrag(false)
        }
    }
    //back to profile 
    const handleLayout = () => {
        hide(false)
    }
    //control update form
    const handleUpdateForm = e => {
        e.preventDefault()
        console.log('clicked', e.target.name.value);

        //update user details in firebase
        const updateInfo = {
            displayName: e.target.name.value,
            photoURL: e.target
        }
        updateUser(updateInfo)
            .then(result => {

            })
    }

    //show img preview 
    const onDrop = useCallback((acceptedFiles) => {
        setImg(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, [])

    const images = img.map(file => {
        console.log(file.preview);
        < img src={file.preview} alt="" key={file.path} />
    })
    return (
        <section className="bg-white p-8">
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-2xl capitalize  py-3">Update profile</h3>
                <button onClick={handleLayout} type="button" className="hover:text-[#0EA5E9] duration-500"><BsArrowLeftSquare className="" size={24} title="Edit Profile" /></button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                <div className="border-r text-center">
                    <div className=" p-2 w-40 mx-auto  m-2 relative ">
                        <button onClick={handlebtn} type='button' className='absolute top-0 right-0'><RiPencilFill size={24} /></button>
                        <img src={images.preview || user.photoURL || "https://1.bp.blogspot.com/-t-6LHB4Oiuo/YUgU9E5RWNI/AAAAAAAAN8c/fPjpFYIYKAA2QH-KDKJ5jBKdYhqP2c5CgCLcBGAsYHQ/s720/DP%2BFor%2BGirls%2B%252817%2529.jpg"} alt=""
                            className="w-36 h-36 mx-auto rounded-full border-2 border-transparent p-3 duration-500" />
                    </div>
                </div>
                <div className="col-span-2 p-8">
                    <form onSubmit={handleUpdateForm} className='space-y-4 lg:w-3/4 '>
                        <div className="form-control space-y-4">
                            <input type="text" placeholder='Name' name='name' defaultValue={user?.displayName} className='input border-transparent rounded-none focus:outline-none border-b border-b-slate-300 focus:border-b-[#0EA5E9]' />
                            <input type="email" value={user?.email} className='input border-transparent rounded-none focus:outline-none input-disabled' disabled />
                        </div>
                        <div className='pt-3'>
                            {showDrag && <DragFile onDrop={onDrop} />}
                        </div>
                        <button type='submit' className={`${styles.updateBtn} relative btn border border-[#0EA5E9] bg-transparent text-black hover:bg-transparent hover:border-[#0EA5E9]`}>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfile;