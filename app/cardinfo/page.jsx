"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
export default function cateogoriesinfo() {
  const [data, setData] = useState(undefined);
  const cardData = useSelector((state) => state?.app?.client?.card_data);
  
  useEffect(() => {
    if(cardData){
      setData(cardData);
    }
  }, [cardData]);
  return (<>
  {
    
    data?
    
    <section className="text-gray-600 body-font">
      <div className={`bg-red-600 p-2 hover:p-2.5 fixed shadow-md shadow-black rounded-xl`}>
                        <button className='text-white'>Authenticat</button>
                    </div>
      <div className="container px-5 py-10 mx-auto flex flex-col">
      <h1 className="leading-relaxed text-2xl font-semibold text-center mb-4 mx-auto text-black">{data.title}</h1>
        <div className="lg:w-4/6 mx-auto shadow-2xl shadow-slate-950">
          <div className="rounded-sm h-full overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full shadow-2xl" src={data.urlToImage}/>
          </div>
          <div className="flex flex-col sm:flex-row mt-10 justify-center">
            
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center">
              <p className="leading-relaxed text-lg mb-4 mx-auto">{data.content}</p>
              <Link href={data.url}>
              <div className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    :
    <></>
  }
  </>
  )
}


