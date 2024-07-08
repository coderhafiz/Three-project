
const Body = () => {
    return (
      <div className="relative mt-5">
        <div className=" min-h-[60vh] sm:min-h-[70vh] mb-5 relative top-0 sm:relative" style={{backgroundImage: 'url(pexels-pixabay-247599.jpg)'}}>
            <div className="hero-overlay bg-transparent"></div>
            <div className="hero-content text-center text-white sm:text-slate-700 h-[50vh] ">
              <div className="max-w-md ">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn glass text-white bg-lime-400">contact us</button>
              </div>
            </div>
          
        </div>
  
        <div className="flex justify-between mb-5  flex-col sm:flex-row w-full p-5 gap-5 relative">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-lime-400 text-white">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-lime-400 text-white">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-lime-400 text-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        

      </div>
          
    )
  }
  
  export default Body