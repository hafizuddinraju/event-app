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
    return (
        <CategoriesLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                {
                    data?.map(sub => <CardDemo key={sub._id} sub={sub}></CardDemo>)
                }
            </div>
        </CategoriesLayout>
    );
};

export default SubCat;