"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { card_data } from '../redux/reducer'
import { useState,useEffect } from 'react'
export default function cateogoriesinfo() {
  const [data, setData] = useState(undefined);
  const cardData = useSelector((state) => state?.app?.client?.card_data);

  useEffect(() => {
    setData(cardData);
  }, [cardData]);
  return (<>
  {
    
    data?
    
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
      <h1 class="leading-relaxed text-2xl font-semibold text-center mb-4 mx-auto text-black">{data.title}</h1>
        <div class="lg:w-4/6 mx-auto shadow-2xl shadow-slate-950">
          <div class="rounded-sm h-full overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full shadow-2xl" src={data.urlToImage}/>
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center">
              <p class="leading-relaxed text-lg mb-4 mx-auto">{data.content}</p>
              <Link href={data.url}>
              <div class="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
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


