

const Header = () => {
  return (
    
        <>

         <div className="drawer sticky top-0 z-[1000]">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 

            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full navbar bg-white text-lime-400 shadow-2xl">
                    <div className="flex-none lg:hidden">
                      <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-lime-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </label>
                    </div> 
                    <div className="flex-1 px-2 mx-2 text-lime-500">CGmark</div>
                    <div className="flex-none hidden lg:block">
                      <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                        <li><a>Home</a></li>
                        <li><a>About us</a></li>
                        <li><a>Resume</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact us</a></li>
                      </ul>
                    </div>
              </div>
            </div> 

            <div className="drawer-side  z-[1000] ">
              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
              <ul className="menu p-4 w-80 min-h-full bg-lime-400">
                {/* Sidebar content here */}
                {/* <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li> */}
                    <div className="flex flex-col w-full">
                      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
                      <div className="divider"></div> 
                      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                  </div>
              </ul>
            </div>
         </div>

        </>

  )
}

export default Header