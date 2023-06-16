// components
import React from "react";

export default function Header(): JSX.Element {
  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      <header className="bg-bluegreen flex items-center justify-between px-8 py-1">
        <div className="flex items-center">
          <img
            onClick={() => handleButtonClick("/")}
            src="https://mynovel.co/static/assets/img/logos/MyNovel_sec1.png"
            alt="Logo"
            className="overflow-clip box-content h-20 cursor-pointer"
          />
        </div>
        <div className="hidden md:flex items-center space-x-4">
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
      </header>
    </>
  );
}
