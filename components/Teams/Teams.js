import React from 'react';
import TeamDetails from './TeamDetails';

const Teams = () => {

    const detailsMember = [
        {
            id:1,
            name:"Md.Ansarul Islam",
            title:"Mern Stack Developer",
            desc:"I'm a motivated and enthusiastic self-starter with fresh experience in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js and Node.js. I have a deep understanding of web development principles and practices as well as an eagerness to learn more about the industry.  ",
            img:"https://i.ibb.co/fGpBf2x/275224967-989202215025873-2141847335832663562-n.jpg",
        },
        {
            id:2,
            name:"Md. Hafizuddin Raju",
            title:"Mern Stack Developer",
            desc:" I want to be a full-stack web developer in my career. Skilled in JavaScript, React, React.Js, Node.Js, MongoDB, C++, Java, Software Development, and C#. Strong education professional with a Bachelor of Engineering - Computer Science from Bangladesh University of Business and Technology.",
            img:"https://i.ibb.co/8Mw2ntP/1642260359858.jpg",
        },
        {
            id:3,
            name:"Fatema Khatun",
            title:"Mern Stack Developer",
            desc:"I am enthusiastic to work with a proactive developer team that can help me to build a strong and constructive mindset to amplify my qualities with various opportunities by working different projects which will be the aid of my glaring future.",
            img:"https://i.ibb.co/25r71dZ/1670508024529.jpg",
        },
        {
            id:4,
            name:"Md Myraj Uddin",
            title:"Mern Stack Developer",
            desc:"I prefer to work with the front-end part of it. But that doesn't presume I can't work on the backend of websites. I've accomplished a lot of full-stack development projects. The finest projects I have listed on my ",
            img:"https://i.ibb.co/phHPYdq/330972811-564913668998001-8112381265970299127-n.jpg",
        },
        {
            id:5,
            name:"Rukunul Joy",
            title:"Mern Stack Developer",
            desc:"As a quick learner, I learn anything so quickly and I try to do the task related to the thing which I learned. Currently, I'm working on a full-stack project which is something related to an e-commerce-based website.",
            img:"https://i.ibb.co/BVyRS6W/FB-IMG-1656443840486.jpg",
        },
        {
            id:6,
            name:"Md Shakil Talukder",
            title:"Mern Stack Developer",
            desc:"I am a passionate Front-End Web Developer from Bangladesh. I consider myself to be a dedicated developer who enjoys coding and the web platform. Despite developing a clear understanding of web development,",
            img:"https://i.ibb.co/FHBvH9b/331234199-583433513706425-1115686668747347645-n.jpg",
        },
    ]
    return (
        <div className='px-4  max-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-28'>
            <div className='my-12'>
                <h2 className='text-3xl font-bold text-center'>Our all team members <br/> Information</h2>
            </div>
            <div className="grid gap-5 mb-8 w-full lg:grid-cols-3 md:grid-cols-2 sm:row-gap-6 sm:grid-cols-1">
                {
                    detailsMember?.map(member => <TeamDetails
                        key={member._id}
                        member={member}
                    ></TeamDetails>) 
                }
            </div>
        </div>
    );
};

export default Teams;