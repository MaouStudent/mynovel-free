import React, { useState, useEffect } from "react";

export default function App() {
  // state readed
  const [reading, setReading] = useState(false);

  // state title
  const [title, setTitle] = useState("");

  // state images
  const [images, setImages] = useState([]);

  // current chapter
  const [currentChapter, setCurrentChapter] = useState({ id: "", name: "" });

  // chapters
  const [chapters, setChapters] = useState([]);

  // function to call fetch component
  const onSubmit = (e) => {
    e.preventDefault();
    const bookId = e.target.elements.bookId.value;
    if (bookId) {
      fetch(
        `https://asia-southeast2-mynovel01.cloudfunctions.net/product/${bookId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTitle(data["ProductName"]);
          const chapterList = data["EpTopic"].map((chapter) => ({
            id: chapter["EpId"],
            name: chapter["EpName"],
          }));
          setChapters(chapterList);
        });
    }
  };

  const onClick = (e) => {
    const id = e.target.id;
    const chapterName = e.target.innerHTML;
    setCurrentChapter({ id: id, name: chapterName }); // set current chapter name
    setReading(true);
    fetch(
      "https://asia-southeast2-mynovel01.cloudfunctions.net/productEP/getProductEpById",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    ).then((res) => {
      res.json().then((data) => {
        if (data["ImageUrlLists"]) setImages(data["ImageUrlLists"]);
      });
    });
  };
  return (
    <>
      {title === "" ? (
        <div className="text-center m-10 bg-gray-500 h-screen">
          <h1 className="text-3xl font-bold text-white p-10">My Novel</h1>
          <form className="flex justify-center" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="BookId"
              id="bookId"
              className="border-2 border-gray-400 p-2 m-2"
            />
            <button
              type="submit"
              className="text-white border-2 border-gray-400 p-2 m-2"
            >
              Read
            </button>
          </form>
        </div>
      ) : !reading ? (
        <div>
          <button
            type="button"
            className="text-black text-3xl border-2 bg-red-300 border-gray-400 p-2 m-2"
            onClick={() => {
              setTitle("");
              setChapters([]);
              setReading(false);
            }}
          >
            Back
          </button>
          <h1 className="text-3xl font-bold text-center text-black p-10">
            {title}
          </h1>
          <div className="flex flex-wrap justify-center">
            {chapters.map((chapter) => (
              <button
                type="button"
                onClick={onClick}
                id={chapter.id}
                className="border-2 text-black border-gray-400 p-2 m-2"
                key={chapter.id}
              >
                {chapter.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className="text-black text-3xl border-2 bg-red-300 border-gray-400 p-2 m-2"
            onClick={() => {
              setReading(false);
            }}
          >
            Back
          </button>
          <h1 className="text-3xl font-bold text-center text-black p-10">
            {currentChapter.name} {/* display current chapter name */}
          </h1>
          {/* container for images center fit width */}
          <div className="flex justify-center w-screen">
            <div className="w-1/2 justify-center">
              {/* map images and classname style and auto size width same*/}
              {images.map((image) => (
                <img src={image} className="w-full" key={image} />
              ))}
              </div>
            </div>
        </div>
      )}
    </>
  );
}
  