import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { formData } from '../../lib/mailerHelper';

const ConfirmMailForm = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const [inputs, setInputs] = useState({
        name: '',
        email: user.email,
        message: ''
    })

    //form input value
    const handleChange = e => {
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    //Control Form
    const handleContact = async (e) => {
        e.preventDefault()
        console.log(inputs)
        try {
            await formData(inputs)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='container mx-auto'>
            <div className=" w-1/3 mx-auto">
                <h3 className="text-2xl capitalize text-blue-500 text-center font-bold pb-3">Contact</h3>
                <form onSubmit={handleContact} className='border p-4 border-blue-300'>
                    <div className="form-control">
                        <label htmlFor="name" className='label'>Name</label>
                        <input type="text" id='name' value={inputs.name} onChange={handleChange} className='input-bordered input' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className='label'>Email</label>
                        <input type="email" id='email' value={user.email} className='input-bordered input' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea type="text" id='message' value={inputs.message} onChange={handleChange} className='textarea textarea-bordered' />
                    </div>
                    <div className="text-center">
                        <button type='submit' className='btn-primary btn w-1/2 mt-4'>sent</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConfirmMailForm;