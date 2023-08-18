export default card = ({ info, index }) => {
    
    return (
      <>
      <div className="flex justify-center" key={index}>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
              <div className="flex flex-col md:flex-row items-center">
                <div className="">
                  <img src={info.urlToImage} alt="image" className="h-20 w-20" />
                </div>
                <div className="md:w-2/3 m-4 ">
                  <div className="flex text-gray-500 text-sm m-2">
                    <div className="m-1 font-bold">Vlog,</div>
                    <div className="m-1">31 March, 2023</div>
                  </div>
                  <div className="font-bold text-black text-xl m-2">The 8 Best City Lights In The World! </div>
                  <div className="text-sm text-gray-500 mt-4 m-2"><a href="#">There's something about city lights that
                    make them so captivating and romantic. Maybe it's because they remind us of all the
                    possibilities that exist in the world, or maybe it's because they're just so darn pretty
                    to look at.
  
                    No matter what the reason is, there's no denying that city lights are some of the most
                    beautiful things in the world.</a></div>
                  <div className="flex cursor-pointer">
                    <div className="m-2"> <img src="https://source.unsplash.com/50x50/?man" alt=""
                      className=" rounded-full" /> </div>
                    <div className="grid m-1">
                      <div className="font-bold text-sm hover:text-gray-600 mt-2">Jason Bourne</div>
                      <div className=" text-sm hover:text-gray-600">Student, Los Angeles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                      </>
  
    )
  }