import React from "react";
import Kategoriyastyle from "./kategoryastyle";

export default function Kategoriya() {
  return (
    <Kategoriyastyle>
      <input
        type="text"
        className="rounded mt-5"
        placeholder="Kategoriya nomi"
      />
      <div className="box w-100 d-flex mt-5 justify-content-center">
        <button className="bg-warning border-0 rounded pt-2 pb-2 ps-3 pe-3">
          Qo'shish
        </button>
      </div>
    </Kategoriyastyle>
  );
}
