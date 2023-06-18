import React, { useEffect, useState } from "react";

export default function ReadView(): JSX.Element {
  const id: string = window.location.href.split("chapter=")[1];
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [nextId, setNextId] = useState("");
  const [prevId, setPrevId] = useState("");

  useEffect(() => {
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
        if (data["EpName"]) setTitle(data["EpName"]);
        const numberCh: number = data["EpTopic"].length;
        data["EpTopic"].map((item: any, index: any) => {
          if (item["EpId"] === id) {
            numberCh < index + 1
              ? null
              : setNextId(data["EpTopic"][index + 1]["EpId"]);
            index - 1 < 0
              ? null
              : setPrevId(data["EpTopic"][index - 1]["EpId"]);
            return;
          }
        });
      });
    });
  }, []);

  console.log(`ID: ${id}`);
  console.log(`nextId: ${nextId}`);
  console.log(`prevId: ${prevId}`);

  return (
    <>
      <div>
        {/* title chaptername */}
        <div className="container mx-auto my-8">
          <h1 className="text-center text-3xl font-bold">{title}</h1>
        </div>
        {/* Button next-prev */}
        <div className="container mx-auto my-8 flex justify-between">
          {prevId !== "" ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => (window.location.href = `/read?chapter=${prevId}`)}
            >
              Prev
            </button>
          ) : (
            <button></button>
          )}
          {nextId !== "" ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => (window.location.href = `/read?chapter=${nextId}`)}
            >
              Next
            </button>
          ) : (
            <button></button>
          )}
        </div>
        {/* images scroll */}
        <div className="container mx-auto my-8 flex justify-center">
          <div className="flex flex-wrap justify-center">
            {images.map((item, index) => (
              <img src={item} height={"auto"} className="w-full" key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* Button next-prev */}
      <div className="container mx-auto my-8 flex justify-between">
        {prevId !== "" ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => (window.location.href = `/read?chapter=${prevId}`)}
          >
            Prev
          </button>
        ) : (
          <button></button>
        )}
        {nextId !== "" ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => (window.location.href = `/read?chapter=${nextId}`)}
          >
            Next
          </button>
        ) : (
          <button></button>
        )}
      </div>
    </>
  );
}
