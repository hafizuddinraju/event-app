import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { addReview } from '../../lib/helperReviews';

const ReviewModal = ({productId}) => {
    const {user} = useContext(AuthContext);
    const router = useRouter();
    const [selectedRating, setSelectedRating] = useState("");

    const ratings = [
        "click to rate",
        "5",
        "4.5",
        "4",
        "3.5",
        "3",
        "2",
        "1"
    ];

    const date = new Date().toDateString();

    const handleSelectRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

    const handleAddReview = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const userImg = '';
        const reviewDesc = form.reviewDesc.value;
        const rating = form.rating.value;
        const product_id = form.productId.value;

        const review = {
            user_name: user?.displayName,
            user_email: user?.email,
            user_img: userImg,
            date: date,
            product_id: product_id,
            reviewDesc: reviewDesc,
            rating: rating
        };

        addReview(review).then(res => {
                console.log(res)
                router.push('/dashboard');
            }).catch(error=>{
            console.log(error)})
        };

    return (
        <div>
        <input type="checkbox" id="review-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="review-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold"></h3>
            <form
              onSubmit={handleAddReview}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <input
                name="productId"
                type="text"
                value={productId}
                readOnly
                className="input hidden w-full text-gray-800 input-bordered"
              />

              <select 
                name="rating" 
                placeholder='Click to rate'
                value={selectedRating}
                onChange={handleSelectRatingChange}
                className="input w-full text-gray-800 input-bordered" 
                >
                  {ratings.map((rating, index) => (
                    <option key={index} value={rating}>
                      {rating}
                    </option>
                  ))}
              </select>
  
              <textarea
                name="reviewDesc"
                placeholder="Write your review here"
                className="input text-gray-800 w-full input-bordered"
              />
  
              <br />
  
              <input
                className="btn bg-sky-500 hover:bg-sky-600 border-none w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
        </div>
    );
};

export default ReviewModal;