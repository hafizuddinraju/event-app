import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import reviews from '../../lib/helperReviews'
import Spinner from "../Spinner/Spinner";

const Reviews = () => {

  const { data: allReviews = [], error, isError, refetch, isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await reviews();
      return res;
    }
  })
  // console.log(allReviews)


  if (isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <>
      <div className='my-36 mx-5'>
            <div className='mb-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <p className='py-3 text-lg sm:text-3xl font-bold text-center text-cyan-900'>All Reviews</p>
            </div>
            <div>
            {
                allReviews.length >0 ?
                    <div>
                        {
                            allReviews.map(review=> 
                                <div key={review._id}>
                                  <div className="flex justify-end">
                                    <div className='text-center'>
                                        <Link href='/addReview' className='btn btn-outline btn-info normal-case'>Add Review</Link>
                                    </div>
                                  </div>
                                    <div className='mb-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>User name: <span className='text-md font-semibold text-dark-900'>{review.user_name}</span></p>
                                            <p>Email: <span className='text-md font-semibold text-dark-900'>{review.user_email}</span></p>
                                            <p>Date: <span className='text-md font-semibold text-dark-900'>{review.date}</span></p>
                                        </div>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>Category: <span className='text-md font-semibold text-dark-900'>{review.category}</span></p>
                                            <p>Type: <span className='text-md font-semibold text-dark-900'>{review.title}</span></p>
                                        </div>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>Rating: <span className='text-md font-semibold text-dark-900'>{review.rating}</span></p>
                                            <p>Review: <span className='text-md font-semibold text-dark-900'>{review.reviewDesc}</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                :
                    <div>
                        <p className='py-3 text-lg sm:text-2xl font-bold text-center text-cyan-900 mb-10'>No reviews found</p>
                        <div className='text-center'>
                            <Link href='/addReview' className='btn btn-outline btn-info normal-case'>Add Review</Link>
                        </div>
                    </div>
            }
            </div>
        </div>
    </>
  );
};

export default Reviews;
