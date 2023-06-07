import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Kategoriya from "./kategoriya";
import Taom from "./Taom";

export default function Qoshish() {
  return (
    <>
      <div className="arizlar-tex-box">
        <h3 className="fw-bold">Qo'shish</h3>
        <p>Yangi kategoriya/taom qo’shish</p>
      </div>
      <div className="Kategoriya-btn-box">
        <Link to={"kategoriya"}>
          <button className="bg-warning border-0 rounded pt-2 pb-2 ps-3 pe-3">
            kategoriya
          </button>
        </Link>
        <Link to={`taom`}>
          <button className="bg-warning border-0 rounded pt-2 pb-2 ps-3 pe-3 ms-2">
            Taom
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="kategoriya" element={<Kategoriya></Kategoriya>} />
        <Route path="taom" element={<Taom></Taom>} />
      </Routes>
    </>
  );
}
