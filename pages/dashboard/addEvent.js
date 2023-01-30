import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import LayoutDashboard from '../../layout/LayoutDashboard';

const addEvent = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
      code: '',
      name: '',
      description: '',
      availability: '',
      image_url: '',
      price: '',
      imagePreview: ''
    });
  
    const handleChange = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      if (e.target.name === "image_url") {
        const reader = new FileReader();
        reader.onload = function(e) {
          setFormData({
            ...formData,
            imagePreview: e.target.result
          });
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
      router.push('/dashboard/addEvent');
    };
  
    return (
        <>
        <title>Add Event</title>
        <LayoutDashboard>
            <div className='bg-slate-800 border rounded-lg'>
                <div className='block sm:flex bg-slate-900 border border-slate-900 rounded-lg m-5 sm:m-10 md:m-10 lg:m-20 p-5'>
                    <div className='my-5 w-full md:w-1/3'>
                        <div className='text-center mb-5'>
                            <h1 className="text-white text-xl font-semibold p-2">
                            Add an Event!
                            </h1>
                        </div>
                        <div>
                            <p className='text-white text-sm text-justify'>
                                You can add your desired event simply by filling up the form properly.Use this form to submit your event information for inclusion on your website.
                            </p>
                        </div>
                    </div>
                    <div className="ml-0 md:ml-10">
                        <div className="mx-auto my-5">
                        <form onSubmit={handleSubmit} className="p-5">
                            <div className='block sm:flex justify-between'>
                            <div className="form-group">
                                <label htmlFor="code" className="block text-sm font-normal text-white">Code</label>
                                <select
                                id="code"
                                name="code"
                                value={formData.code}
                                onChange={handleChange}
                                className="w-full mb-2 rounded-lg bg-white p-2 cursor-pointer"
                                >
                                <option value="">Select a code</option>
                                <option value="11">11</option>
                                <option value="22">22</option>
                                <option value="44">44</option>
                                <option value="55">55</option>
                                <option value="66">66</option>
                                <option value="77">77</option>
                                <option value="88">88</option>
                                <option value="99">99</option>
                                <option value="101">101</option>
                                <option value="102">102</option>
                                </select>
                            </div>
                            <div className="form-group">
                            <label htmlFor="name" className="block text-sm font-normal text-white">Event type</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mb-2 rounded-lg bg-white p-2 cursor-pointer"
                            />
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="description" className="block text-sm font-normal text-white">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full mb-2 rounded-lg bg-white p-2 cursor-pointer"
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="image_url" className="block text-sm font-normal text-white">Image</label>
                            <input
                                type="file"
                                id="image_url"
                                name="image_url"
                                value={formData.image_url}
                                onChange={handleChange}
                                className="w-full mb-2 rounded-lg bg-white p-2 cursor-pointer"
                            />
                            </div>
                            {formData.imagePreview && (
                          <div className="mt-5">
                            <img src={formData.imagePreview} alt="Preview"className="w-full rounded-lg mb-5" />
                            </div>
                            )}
                            <div className='block sm:flex'>
                                <div className="form-group mr-5">
                                <label htmlFor="price" className="block text-sm font-normal text-white">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full mb-2 rounded-lg  bg-white p-2 cursor-pointer"
                                />
                                </div>
                                <div className="form-group">
                                <label htmlFor="availability" className="block text-sm font-normal text-white">Availability</label>
                                <select
                                    id="availability"
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleChange}
                                    className="w-full mb-2 rounded-lg bg-white p-2 cursor-pointer"
                                >
                                    <option value="">Select availability</option>
                                    <option value="1">1</option>
                                    <option value="0">0</option>
                                </select>
                                </div>
                            </div>
                            <div className="flex justify-end mt-5">
                                <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg ml-2 tooltip" data-tip="Click to add the event">
                                    Add
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDashboard>
        </>
    );
};

export default addEvent;