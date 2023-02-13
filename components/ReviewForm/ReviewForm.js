import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getCategory } from '../../lib/helperCategory';
import { addReview } from '../../lib/helperReviews';
import Spinner from '../Spinner/Spinner';

const ReviewForm = () => {
    const {user} = useContext(AuthContext);
    const router = useRouter();
    const [selectedTypes, setSelectedTypes] = useState("");
    const [selectedCategories, setSelectedCategories] = useState("");
    const [selectedRatings, setSelectedRatings] = useState("");

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

    const date = new Date().toDateString();

    const handleSelectTypesChange = (e) => {
        setSelectedTypes(e.target.value);
    };

    const handleSelectCategoriesChange = (e) => {
        setSelectedCategories(e.target.value);
    };

    const handleSelectRatingsChange = (e) => {
        setSelectedRatings(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const reviewDesc = form.reviewDesc.value;
        const category = form.category.value;
        const title = form.title.value;
        const rating = form.rating.value;

        const review = {
            user_name: user?.displayName,
            user_email: user?.email,
            date: date,
            category: category,
            title: title,
            reviewDesc: reviewDesc,
            rating: rating
        };

        addReview(review).then(res => {
                console.log(res)
                router.push('/Reviews');
            }).catch(error=>{
            console.log(error)})
        form.reset('');
    };

    if(isLoading){
        return <Spinner></Spinner>
    }

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
                    defaultValue={user?.displayName}
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

            <div className='block sm:flex'>
                <div className='mr-0 sm:mr-10 mb-2'>
                    <label
                    className='text-white' htmlFor="category">
                        Category:
                    </label>
                    <br />
                    <select
                        name="category" 
                        value={selectedCategories}
                        onChange={handleSelectCategoriesChange}
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
                        value={selectedTypes}
                        onChange={handleSelectTypesChange}
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
                    value={selectedRatings}
                    onChange={handleSelectRatingsChange}
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