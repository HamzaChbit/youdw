

const Banner = () => {
    return (
  <section className="bg-hero text-black">
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className=" text-center mx-auto">
        <h2 className="text-3xl text-title font-bold sm:text-4xl">How to Use YouTube Downloader</h2>
  
    
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-full bg-blue-100 p-5 text-white ">
         <span  className="text-3xl font-bold text-blue-500"> 1
            </span>  
          </span>
  
          <div>
            <h2 className="text-lg  text-black">just copy and paste the YouTube video URL into the download box.</h2>
  
         
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-full bg-red-100 p-5 text-white ">
         <span  className="text-3xl font-bold text-red-500"> 2
            </span>  
          </span>
  
          <div>
            <h2 className="text-lg  text-black">just copy and paste the YouTube video URL into the download box.</h2>
  
         
          </div>
        </div>
     
        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-full bg-green-100 p-5 text-white ">
         <span  className="text-3xl font-bold text-green-500"> 3
            </span>  
          </span>
  
          <div>
            <h2 className="text-lg  text-black">just copy and paste the YouTube video URL into the download box.</h2>
  
         
          </div>
        </div>
     
  
  
  
  
   
      </div>
    </div>
  </section>
    )
  }
  
  export default Banner;