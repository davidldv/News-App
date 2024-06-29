const Navbar = () => {
  return (
    <header className="px-6 bg-white shadow">
        <div className="flex items-center justify-between h-16 max-w-6xl mx-auto">
            <button className="p-1 transition-colors rounded-full hover:bg-slate-100 hover:text-slate-700 focus:ring-1 focus:ring-slate-200">
                <svg
                    className="w-8 h-8" 
                    fill="none" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                    />
                </svg>
            </button>
            <div className="flex items-center -mr-4">
                <a className="text-red-500 duration-100 hover:rotate-6" href="#">
                    <svg 
                        className="w-8 h-8" 
                        fill="none" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" 
                        />
                    </svg>
                </a>
                <div className="hidden ml-8 space-x-8 md:flex">
                    <a className="px-3 py-2 font-semibold text-red-500" href="#">Home</a>
                    <a className="px-3 py-2 font-semibold hover:text-red-500" href="#">About</a>
                    <a className="px-3 py-2 font-semibold hover:text-red-500" href="#">Blog</a>
                    <a className="px-3 py-2 font-semibold hover:text-red-500" href="#">Contact</a>
                </div>
            </div>
            <div className="flex">
                <button className="p-1 transition-colors rounded-full hover:text-slate-700 hover:bg-slate-100 focus:ring-1 focus:ring-slate-200">
                    <svg 
                        className="w-8 h-8" 
                        fill="none" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                    </svg>  
                </button>
                <button className="p-1 ml-2 transition-colors rounded-full ml- hover:text-slate-700 hover:bg-slate-100 focus:ring-1 focus:ring-slate-200">
                    <svg
                        className="w-8 h-8"
                        fill="none" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div className="hidden pt-2 pb-3 space-y-1 border-t md:hidden">
            <a href="#" className="block px-3 py-2 font-semibold text-white bg-red-500 rounded-md ">Home</a>
            <a href="#" className="block px-3 py-2 font-semibold rounded-md hover:bg-red-500 hover:text-white">About</a>
            <a href="#" className="block px-3 py-2 font-semibold rounded-md hover:bg-red-500 hover:text-white">Blog</a>
            <a href="#" className="block px-3 py-2 font-semibold rounded-md hover:bg-red-500 hover:text-white">Contact</a>
        </div>
    </header>
  )
}

export default Navbar