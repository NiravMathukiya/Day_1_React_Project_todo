import React from 'react'
// import logo from ""

function Navbar() {
    return (
        <div className='w-[100%]   h-[70px] bg-black text-white flex flex-row justify-between pl-5 pt-4 pb-4 pr-5 items-center text-sm md:text-xl lg:text-xl xl:text-xl    '>

            {/* logo  */}
            <a href='/'><img src="/images/logo.png" className="object-cove pl-4 h-[50px] " alt="Logo" /></a>

            {/* -- serach -- */}
            <div className='font-bold '>
                Day 1 :-  <span>Todo App</span>
            </div>

            {/* -- user-- */}
            <div className='h-full flex items-center justify-center'>
                <h2 className='pr-3 font-bold'>Nirav</h2>
                <div className='h-20 md:p-2 lg:p-2 xl:p-2  flex items-center'>
                    <img src="/images/logo.png" className="object-cover h-10" alt="Logo" />
                </div>
            </div>
        </div>  
    )
}

export default Navbar
