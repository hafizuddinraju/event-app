import React from 'react';

const GallerySection = () => {
    return (
       <>
         <div>
            <div>
                <h2>OUR GALLERY</h2>
                <h4>Some of our project  discussion,management and meeting image</h4>
            </div>
            <div>
                {Data.map((val)=>{
                    return(   
                <a>
                    <div>
                        <img src={val.cover} alt="" />
                        <div>
                            <p>{val.title}</p>
                            <p>{val.desc}</p>
                        </div>
                        <div>
                            <Fullscreen/>
                        </div>
                    </div>
                </a>
                    )
                })}
            </div>
        </div>
       </>
    );
};

export default GallerySection;