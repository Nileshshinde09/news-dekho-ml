"use client" 
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { card_dataAction } from '../redux/reducer'

const API_KEY = "8dcb683e4fe54fd4b1bbeacf31b6b32d"


const getData = async (cat) => {
  try {
    if (cat) {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=${API_KEY}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Response error:', response.status, response.statusText);
        throw new Error('Response error');
      }
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }

}
export default function cateogories({ params }) {
  const dispatch =useDispatch();
  const router = useRouter();
  
  const [resdata, setresdata] = useState(undefined)
  const clickhandler=(info)=>{
      if(info){
        dispatch(card_dataAction(info))
        router.push('/cardinfo')
      }
  }
  useEffect(() => {
    getData(params.categories).then(data => {
      if (data) {
        setresdata(data.articles);
      }
    });
  }, []);

  //   articles.forEach(article => {
  //     const title = article.title;
  //     const description = article.description;
  //     const url = article.url;
  //     const imageUrl = article.urlToImage;
  //     const publishedAt = article.publishedAt;
  //     const content = article.content;
  //   })

  return (
    <>
      {resdata?.map((info,i) => {
        const img=info.urlToImage
        return (
          <div key={i}>
          
            
          
            <div onClick={()=>clickhandler(info)}>
          <div className="flex justify-center mt-[2rem] max-sm:mt-[4rem]" key={info.title}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                  <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="">
                        <img src={img} alt="image" className="h-[15rem] shadow-2xl shadow-black hoverprop" />
                      </div>
                      <div className="md:w-2/3 m-4 ">
                        <div className="flex text-gray-500 text-sm m-2">
                          <div className="m-1 font-bold">Published</div>
                          <div className="m-1">{info.publishedAt}</div>
                        </div>
                        <div className="font-bold text-black text-xl m-2">{info.title}</div>
                        <div className="text-sm text-gray-500 mt-4 m-2">{info.description}</div>
                        <div className="flex cursor-pointer">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            </div>
        )
      })}
    </>
  )
}



