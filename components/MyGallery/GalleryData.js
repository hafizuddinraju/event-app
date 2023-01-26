// const GalleryData = ({category}) => {
//     const {title,desc,cover}= category;
//     return (
//         <div>
//             <div
//               className="relative overflow-hidden transition rounded duration-200 transform shadow-lg hover: translate-y-2 hover:shadow-2xl"
//             >
//               <img
//                 src={cover}
//                 alt="pic"
//                 className="object-cover w-full h-56 md:h-64 xl:h-80"
//               />

//               <div className="absolute inset-0 px-6 py-4 top-0 left-0 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
//                 <p className="mb-4 text-lg font-bold text-gray-100">{title}</p>
//                 <PhotoProvider>
//                   <PhotoView src={cover}>
//                     <img src={cover} alt="" className="w-full absolute top-0 left-0 opacity-0 h-full" />
//                   </PhotoView>
//                 </PhotoProvider>

//                 <p className="text-sm tracking-wide text-gray-300">{desc}</p>
//               </div>
//             </div>
//             <div className='flex justify-center mb-20 tooltip' data-tip='Tap to explore more events'>
//                 <Link href='/' className='btn text-xl normal-case bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer border border-blue-500'>See more...<MdOutlineKeyboardArrowRight size={30}/></Link>
//             </div>
//         </div>
//     );
// };

// export default GalleryData;