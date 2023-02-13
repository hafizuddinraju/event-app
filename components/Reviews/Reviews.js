import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getReviews } from "../../lib/helperReviews";
import ReviewForm from "../ReviewForm/ReviewForm";
import Spinner from "../Spinner/Spinner";

const Reviews = () => {

  const { data: allReviews = [], error, isError, refetch, isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await getReviews();
      return res;
    }
  })
//   console.log(allReviews)


  if (isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <>
      <div className='my-28 mx-5'>
            <div className="flex justify-center mb-5">
                <div className='text-center'>
                    <p className='text-md sm:text-xl font-bold text-center text-cyan-900 pt-10'>Provide your valuable reviews</p>
                </div>
            </div>
            <div className="mb-20">
                <ReviewForm></ReviewForm>
            </div>
            <div className='mb-10'>
                <p className='text-lg sm:text-3xl font-bold text-center text-cyan-900'>All Reviews</p>
            </div>
            <div>
            {
                allReviews.length >0 ?
                    <div>
                        {
                            allReviews.map(rvw=> 
                                <div key={rvw._id}>
                                    <div className='mb-10 bg-orange-50 py-4 mx-6 border rounded-lg'>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>User name: <span className='text-md font-semibold text-dark-900'>{rvw.user_name}</span></p>
                                            <p>Email: <span className='text-md font-semibold text-dark-900'>{rvw.user_email}</span></p>
                                            <p>Date: <span className='text-md font-semibold text-dark-900'>{rvw.date}</span></p>
                                        </div>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>Category: <span className='text-md font-semibold text-dark-900'>{rvw.category}</span></p>
                                            <p>Type: <span className='text-md font-semibold text-dark-900'>{rvw.title}</span></p>
                                        </div>
                                        <div className='py-3 px-2 text-lg font-bold text-cyan-900'>
                                            <p>Rating: <span className='text-md font-semibold text-dark-900'>{rvw.rating}</span></p>
                                            <p>Review: <span className='text-md font-semibold text-dark-900'>{rvw.reviewDesc}</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                :
                    <div>
                        <p className='py-3 text-lg sm:text-2xl font-bold text-center text-cyan-900 mb-10'>No reviews found</p>
                    </div>
            }
            </div>
        </div>
    </>
  );
};

export default Reviews;