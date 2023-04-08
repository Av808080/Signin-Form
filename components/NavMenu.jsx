import React, { useState } from "react";
import Link from "next/link";
const NavMenu = () => {
  const [isShown, setisShown] = useState(false);
  return (
    <div className="inline-block" >
         {isShown && (
          <button className={`sm:hidden m-5`} onClick={() => setisShown(false)}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>menu-hamburger-solid</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <g>
                    <path d="M42,12a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2H6a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2Z" />
                    <path d="M42,24a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2H6a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2Z" />
                    <path d="M42,36a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2H6a2,2,0,0,1,2-2H40a2,2,0,0,1,2,2Z" />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        )}
      <nav
        className={`bg-indigo-500 left-0 z-10 sm:space-y-0 px-10
         space-y-10 sm:w-screen ${!isShown&& `h-screen`} w-fit text-white flex flex-col justify-start p-4 sm:h-fit items-center sm:flex-row sm:justify-around `}
      >
        {!isShown && (
          <button className={`sm:hidden`} onClick={() => setisShown(true)}>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        )}
       
        {!isShown && (
          < >
            <Link
              className="hover:text-slate-200/80 transition duration-150"
              href={"./"}
            >
              Home
            </Link>
            <Link
              className="hover:text-slate-200/80 transition duration-150"
              href={"./Movie"}
            >
              Movie
            </Link>
            <Link
              className="hover:text-slate-200/80 transition duration-150"
              href={"./Gallery"}
            >
              Gallery
            </Link>
            <Link
              className="hover:text-slate-200/80 transition duration-150"
              href={"./P"}
            >
              P
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavMenu;
