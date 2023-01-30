import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardDemo from '../../components/CategoryCard/CardDemo';
import Spinner from '../../components/Spinner/Spinner';
import CategoriesLayout from '../../layout/CategoriesLayout';
import { getSingleSubCategory } from '../../lib/helperSubCategory';

const SubCat = () => {
    const router = useRouter()
    const id = router.query.subcatId
    const [data, setData] = useState([])



    useEffect(() => {

        getSingleSubCategory(id).then(res => {
            console.log(res);
            setData(res)

        })
            .catch(error => {
                console.log(error)
            })


    }, [router.query.subcatId])
    console.log(data);
    const [gridView , setGridView] = useState(false);
    console.log(gridView);
    return (
        <CategoriesLayout>
           <div className='relative'>
            <button className={`hidden z-50 fixed top-[110px] text-xl font-bold mb-10 md:block border-2 border-indigo-500 px-2 py-2 rounded-md ${gridView ? "bg-blue-500 text-white" : null}`} onClick={()=>setGridView(!gridView)}>{gridView ? "Grid View" :"List View"}</button>
           <div className={`md:mt-20 ${gridView ? "space-y-10" :"grid grid-cols-1 md:grid-cols-2 "}  `}>
                {
                    data?.map(sub => <CardDemo gridView={gridView} key={sub._id} sub={sub}></CardDemo>)
                }
            </div>
           </div>
        </CategoriesLayout>
    );
};

export default SubCat;