import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardDemo from '../../components/CategoryCard/CardDemo';
import Spinner from '../../components/Spinner/Spinner';
import CategoriesLayout from '../../layout/CategoriesLayout';
import { getSingleSubCategory } from '../../lib/helperSubCategory';
import { FiGrid, FiList } from "react-icons/fi";
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
    // console.log(data);
    const [gridView, setGridView] = useState(false);
    // console.log(gridView);
    return (
        <CategoriesLayout>
            <div className='relative'>
                <button className={`hidden z-50 fixed right-20 top-[110px] text-xl font-bold mb-10 md:block  px-2 py-2 rounded-md ${gridView ? "bg-blue-500 text-white" : "border border-blue-500"}`} onClick={() => setGridView(!gridView)}>{gridView ? <FiGrid size={24} /> : <FiList size={24} />}</button>
                <div className={`md:mt-20 ${gridView ? "space-y-10" : "grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto gap-4"}  `}>
                    {
                        data?.map(sub => <CardDemo gridView={gridView} key={sub._id} sub={sub}></CardDemo>)
                    }
                </div>
            </div>
        </CategoriesLayout>
    );
};

export default SubCat;