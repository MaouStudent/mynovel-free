// Card React Component
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye, FaList } from "react-icons/fa";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// type
interface Card {
  _id: string;
  id: string;
  ProductName: string;
  ProductIntro: string;
  CreateBy: string;
  CreateId: string;
  ProductView: number;
  ProductGroup: string;
  ProductTypeSet: string;
  isPublish: boolean;
  ImageUrl: string;
  EpCountPublised: number;
  ProductRate: string;
  ProductType: string;
  fanClubTranslate: string;
  ProductPublisher: string;
  isCopyright: boolean;
  ProductPrice: number;
  G;
  isFinished: boolean;
  EpLastUpdate: string;
  Discount: number;
  isAccept: boolean;
}

// Card React Component
export default function Card(props: Card): JSX.Element {
  return (
    <div
      className="transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
      title={props.ProductName}
      onClick={() => {
        window.location.href = `/product/${props.id}`;
      }}
    >
      <div className="relative rounded-lg overflow-hidden">
        <span
          className="block"
          style={{
            backgroundColor: "rgb(217, 230, 251)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "contain",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            alt={props.ProductName}
            draggable="false"
            src={props.ImageUrl}
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
          />
        </span>
        <span
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            color: "white",
            fontSize: "14px",
            fontWeight: "700",
            textAlign: "right",
            paddingRight: "5px",
            paddingBottom: "5px",
            width: "100%",
            background:
              "linear-gradient(0deg, rgba(45, 45, 45, 0.9), rgba(45, 45, 45, 0))",
          }}
        >
          updated to {props.EpCountPublised}
        </span>
      </div>
      <div className="mb-2">
        <div className="overflow-hidden"></div>
        <div className="pt-2" style={{ width: "160px", lineHeight: "1.2" }}>
          <h3
            className="text-dark d-inline-block truncate cursor-pointer font-bold text-16"
            data-toggle="modal"
            data-target=".bd-example-modal-xl"
            data-backdrop="static"
            data-keyboard="false"
            style={{
              fontWeight: "800",
              cursor: "pointer",
              width: "160px",
              fontSize: "16px",
            }}
          >
            {props.ProductName}
          </h3>
          <span>
            <small className="text-secondary d-inline-block truncate">
              <strong>
                {props.ProductGroup} X {props.ProductType}
              </strong>
            </small>
          </span>
          <div
            className="text-08em flex justify-between"
            style={{ fontSize: "0.8em" }}
          >
            <div className="font-bold">
              <strong>
                <FaEye /> {props.ProductView}
              </strong>
            </div>
            <div className="font-bold">
              <strong>
                <FaList aria-hidden="true" /> {props.EpCountPublised}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
