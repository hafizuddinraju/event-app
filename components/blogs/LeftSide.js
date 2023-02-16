import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { blogData } from "../../lib/helperBlog";

const LeftSide = () => {
  
  const [readMore, setReadMore] = useState(200);

  const handleReadMore = () =>{
    setReadMore(1000);
}

const handleShowLess = () =>{
    setReadMore(200)
}

const { data: cards = [], error, isError, refetch, isLoading } = useQuery({
  queryKey: ['blog'],
  queryFn: async () => {
    const res = await blogData();
    return res;
  }
})

console.log(cards)
  // const cards = [
  //   {
  //     "name": "Next Js",
  //     "title": " Md Ansarul Islam",
  //     "desc": "NextJS is a react framework built as an open-source on top of React library. It is created by vercel. NextJS framework creates fast search engine optimize react applications with zero configuration. A traditional react application is rendered client-side where the browser starts with a shell of an HTML page lacking any rendered content from which the browser extracts the JS file which consists of ReactJS files to display the content to the webpage. NestJS is growing popular with the increased dependency of Node.js it uses under the hood along with frameworks like Express. For the sake of understanding, you learned how to develop an application using NestJS just by importing all the core files discussed in this article. There can also be the case of implementing the application with the use of certain modules like adding Courses, testing it with Postman and controlling the end points flow.",
  //     "image": "https://i.ibb.co/N7C0rhH/1-htb-Ud-Wg-FQ3a94-PMEv-Br-h-Q.png",
  //   },
  //   {
  //     "name": "Authentication Firebase",
  //     "title": " Shakil Talukder",
  //     "desc": "Firebase is a Backend-as-a-Service, and it is a real-time database which is basically designed for mobile applications. This tutorial is designed in such a way that we can easily understand or can perform the service of Firebase in a very efficient way.Firebase can be used for Android, iOS, Web, or Unity. In this tutorial, we perform Firebase services for Android. So, it is essential to have basic knowledge of Android Studio. A good understanding of basic JAVA and XML is required that allows us to understand the concept of Firebase better.We can ensure that they have no problems accessing their private data while using our app from multiple devices.Firebase Authentication provides all the server-side stuff for authenticating the user. Firebase Authentication becomes easy with SDK. It makes API easy to use.",
  //     "image":"https://i.ibb.co/4TypCrs/"image"s.jpg",
  //   },
  //   {
  //     "name": "mongoose",
  //     "title": " Hafizuddin Raju",
  //     "desc": "we will use the mongoose package. Mongoose is a third-party package that builds upon the official MongoDB driver, but it makes accessing MongoDB much easier and more convenient. Mongoose use schemas that mongodb does not really use, so we can define how our data should look like and that allows us to conveniently store and fetch data.we need to add the schema for that. We will go to our model.ts file, and this model shows us how a post looks like right now. We don't need to create a unique id on our own because the ID will be created automatically by Mongoose for us.we need to add the schema for that. We will go to our model.ts file, and this model shows us how a post looks like right now. We don't need to create a unique id on our own because the ID will be created automatically by Mongoose for us. Instead of ID, we need to focus on creating these schemas on the backend. For this, we will create new folder models.",
  //     "image": "https://i.ibb.co/191F3tB/0-8f-OM6-Ol-T5-ZAR3-J.jpg",
  //   },
  //   {
  //     "name": "Redux",
  //     "title": "Fatema khatun",
  //     "desc": "React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple. It subscribes to the Redux store, checks to see if the data which your component wants have changed, and re-renders your component.We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.",
  //     "image": "https://i.ibb.co/SmpkM0q/redux-cover-imgage-1024x768.jpg",
  //   },
  //   {
  //     "name": "Node js",
  //     "title": "Rukunul Joy",
  //     "desc": "Node.js is a cross-platform runtime environment and library for running JavaScript applications outside the browser. It is used for creating server-side and networking web applications. It is open source and free to use.Many of the basic modules of Node.js are written in JavaScript. Node.js is mostly used to run real-time server applications.Following is a list of some important features of Node.js that makes it the first choice of software architects:Extremely fast,I/O is Asynchronous and Event Driven,Single threaded,Highly Scalable,No buffering,Open source,LicenseIt provides online repositories for node.js packages/modules which are searchable on search.nodejs.It also provides command line utility to install Node.js packages, do version management and dependency management of Node.js packages.",
  //     "image": "https://i.ibb.co/NtKHSch/download.jpg"
  //   },
  //   {
  //     "name": "REST API",
  //     "title": "Mayraj uddin",
  //     "desc": "What is REST API for beginnersREST API is a way of accessing web services in a simple and flexible way without having any processing. REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, simple and flexible making it more suitable for internet usage.he state of a resource at any particular instant, or timestamp, is known as the resource representation. This information can be delivered to a client in virtually any format including JavaScript Object Notation (JSON), HTML, XLT, Python, PHP, or plain text. JSON is popular because it’s readable by both humans and machines—and it is programming language-agnostic.Request headers and parameters are also important in REST API calls because they include important identifier information such as metadata, authorizations, uniform resource identifiers (URIs), caching, cookies and more.",
  //     "image": "https://i.ibb.co/n60RCqP/Web-Service-What-is-REST-API-And-How-Does-it-Work.webp"
  //   },
  // ];
  return (
   <>
   
   <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 sm:grid-cols-1">
      {
      cards.length > 0  && cards?.map(({ id, name, title, desc ,image}) => (
        <div
          key={id}
          className=" max-w-screen-lg row-gap-5 md:row-gap-8 sm:mx-auto"
        >
          <div className="transition  duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow-2xl md:text-start">
            <div className="relative">
              
              <img
                className="object-cover w-full h-full rounded-t lg:h-80 xl:h-96"
                src={image}
                alt="img"
              />
              
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <div className="flex items-center mr-4 gap-4">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  {name}
                </h5>
              </div>
              <div className="flex items-center my-3 gap-2">
                <BsPersonCircle size={25}/>
                <h4 className="text-xl text-gray-500">{title}</h4>
              </div>
              <p className={' transition-all duration-1000 '}>
                            {desc?.length > readMore ? (
                      <small className='transition text-[16px] duration-1000'>
                        {" "}
                        {desc.slice(0, 200) + "..."}{" "}
                        <button
                          onClick={handleReadMore}
                          className="text-sky-700"
                        >
                          read more
                        </button>
                      </small>
                    ) : <>{desc} <button className='text-red-500 underline font-bold' onClick={handleShowLess}>show less</button></>}
                            </p>
              
                            <Link href='/BlogDetail'><button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mt-6 font-medium tracking-wide text-orange-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Read more
              </button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
   </> 
  );
};

export default LeftSide;
