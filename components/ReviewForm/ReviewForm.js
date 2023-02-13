import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getCategory } from '../../lib/helperCategory';

const ReviewForm = () => {
    const {user} = useContext(AuthContext);
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState("");

    const types = [
        "Types of event", 
        "Personal",
        "Family",
        "community",
        "National Sports", 
        "International Sports",
        "Concert",
        "Festival of Folk Music",
        "Live Music",
        "WorkShop",
        "Seminar",
        "Conference",
        "Ekushey Book Fair",
        "Dhaka International Film Festival",
        "Bisu Mela",
        "Android",
        "Laptop",
        "Tab",
        "Art",
        "Trade shows",
        "Tech fairs",
        "Surprise party",
        "Dinner party",
        "Tea party",
      ];

    const ratings = [
        "click to rate",
        "5",
        "4.5",
        "4",
        "3.5",
        "3",
        "2",
        "1"
    ]

    const { data: AllCategories = [], error, isError, refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
          const res = await getCategory();
          return res;
        }
      })
    //   console.log(AllCategories)

    const postTime = new Date().toLocaleTimeString()
    const postDay = new Date().toDateString()
    const postDate = new Date()
    const date ={
        postTime,
        postDay,
        postDate
    }

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    date: '',
    category: '',
    title: '',
    reviewDesc: '',
    rating: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit form data to the server goes here
  };

  return (
    <div className='flex justify-center mt-5'>
        <div className='bg-slate-800 border rounded-lg'>
            <form className='p-5' onSubmit={handleSubmit}>
            <div className='block sm:flex'>
                <div className='mr-0 sm:mr-10 mb-2'>
                    <label
                    className='text-white'
                    htmlFor="user_name">
                        Your name:
                    </label>
                    <br/>
                    <input
                    type="text"
                    readOnly
                    defaultValue={user?.name}
                    className="input text-gray-800 w-full sm:w-[280px] input-bordered"
                    />
                </div>

                <div className='mb-2'>
                    <label
                    className='text-white'
                    htmlFor="user_email">
                        Your Email:
                    </label>
                    <br />
                    <input
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                    className="input text-gray-800 w-full sm:w-[280px] input-bordered"
                    />
                </div>
            </div>

            {/* <div>
                <label htmlFor="date">Date:</label>
                <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                />
            </div> */}

            <div className='block sm:flex'>
                <div className='mr-0 sm:mr-10 mb-2'>
                    <label
                    className='text-white' htmlFor="category">
                        Category:
                    </label>
                    <br />
                    <select
                        name="category" 
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="input text-gray-800 w-full sm:w-[280px] input-bordered "
                    >
                        <option>Select One</option>
                        {AllCategories?.map((category) => (
                        <>
                        <option key={category._id} value={category.cate_name}>
                            {category.cate_name}
                        </option>
                        </>
                        ))}
                    </select>
                </div>

                <div className='mb-2'>
                    <label
                    className='text-white' 
                    htmlFor="title">
                        Title:
                    </label>
                    <br />
                    <select 
                        name="title" 
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="input w-full sm:w-[280px] text-gray-800 input-bordered" 
                        >
                        {types.map((type, index) => (
                            <option key={index} value={type}>
                            {type}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='mb-2'>
                <label
                    className='text-white' 
                    htmlFor="reviewDesc">
                        Review:
                </label>
                <br />
                <textarea
                name="reviewDesc"
                placeholder="Write your review here"
                className="input text-gray-800 w-full sm:w-[600px] input-bordered"
                />
            </div>

            <div className='mb-2'>
                <label
                    className='text-white' 
                    htmlFor="rating">
                        Rating:
                </label>
                <br />
                <select 
                    name="rating" 
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="input w-full sm:w-[600px] text-gray-800 input-bordered" 
                    >
                    {ratings.map((rating, index) => (
                        <option key={index} value={rating}>
                        {rating}
                        </option>
                    ))}
                </select>
            </div>

            <button 
                className="btn bg-sky-500 hover:bg-sky-600 border-none w-full sm:w-[600px]"
                type="submit"
                value="Submit">Submit
            </button>
            </form>
        </div>
    </div>
  );
};

export default ReviewForm;