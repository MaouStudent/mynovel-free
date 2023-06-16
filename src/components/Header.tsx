// components
import React from "react";

export default function Header(): JSX.Element {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="bg-bluegreen1">
      <header className="max-w-4xl mx-auto flex items-center justify-between px-8 py-3">
        <div className="flex items-center">
          <img
            onClick={() => handleButtonClick("/")}
            src="https://mynovel.co/static/assets/img/logos/MyNovel_sec1.png"
            alt="Logo"
            className="overflow-clip box-content h-16 cursor-pointer"
          />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="mx-2 px-2 text-1xl outline-purple-700 hover:bg-gray-100"
            onClick={() => handleButtonClick("/cartoon")}
          >
            การ์ตูน
          </button>
          <button
            className="mx-2 px-2 text-1xl outline-purple-700 hover:bg-gray-100"
            onClick={() => handleButtonClick("/novel")}
          >
            นิยายลิขสิทธิ์
          </button>
          <button
            className="mx-2 px-2 text-1xl outline-purple-700 hover:bg-gray-100"
            onClick={() => handleButtonClick("/fiction")}
          >
            นิยายแต่ง
          </button>
          <button
            className="mx-2 px-2 text-1xl outline-purple-700 hover:bg-gray-100"
            onClick={() => handleButtonClick("/ebook")}
          >
            อีบุ๊ค
          </button>
          <button
            className="mx-2 px-2 text-1xl outline-purple-700 hover:bg-gray-100"
            onClick={() => handleButtonClick("/search")}
          >
            ค้นหา
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg
              className="h-6 w-6 fill-current text-gray-600"
              viewBox="0 0 24 24"
            >
              {showMenu ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 6H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white z-10">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <button
                className="mx-2 px-2 text-2xl outline-purple-700 hover:bg-gray-100"
                onClick={() => handleButtonClick("/")}
              >
                หน้าแรก
              </button>
              <button
                className="mx-2 px-2 text-2xl outline-purple-700 hover:bg-gray-100"
                onClick={() => handleButtonClick("/cartoon")}
              >
                การ์ตูน
              </button>
              <button
                className="mx-2 px-2 text-2xl outline-purple-700 hover:bg-gray-100"
                onClick={() => handleButtonClick("/novel")}
              >
                นิยายลิขสิทธิ์
              </button>
              <button
                className="mx-2 px-2 text-2xl outline-purple-700 hover:bg-gray-100"
                onClick={() => handleButtonClick("/fiction")}
              >
                นิยายแต่ง
              </button>
              <button
                className="mx-2 px-2 text-2xl outline-purple-700 hover:bg-gray-100"
                onClick={() => handleButtonClick("/ebook")}
              >
                อีบุ๊ค
              </button>
              <button
                className="mx-2 px-2 text-2xl outline-purple-700 hover:bg-gray-100"
                onClick={() => handleButtonClick("/search")}
              >
                ค้นหา
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
