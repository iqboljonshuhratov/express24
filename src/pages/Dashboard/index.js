import React from "react";
import { useSearchParams } from "react-router-dom";
import getProductsAriza from "../../data/ArizlarProducts";

export default function Dashboard() {
  const products = getProductsAriza();

  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div className="arizlar-tex-box">
        <h3 className="fw-bold">Arizalar</h3>
        <p>Yetib kelgan arizalarni kuzatishingiz mumkin</p>
      </div>

      <input
        className="form-control mb-4"
        placeholder="filter"
        value={searchParams.get("filter")}
        onChange={(e) => {
          const filter = e.target.value;
          if (filter != "") setSearchParams({ filter: e.target.value });
          else setSearchParams({});
        }}
      />

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>to'liq ismi</th>
            <th>Taom nomi</th>
            <th>Narxi</th>
            <th>Soni</th>
            <th>Umumiy narx</th>
            <th>Telefon raqam</th>
            <th>izoh</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((item) => {
              const filter = searchParams.get("filter");
              if (!filter) return true;
              return item.ism.toLowerCase().includes(filter);
            })
            .map((item, index) => (
              <tr key={index}> 
                <td>{index + 1}</td>
                <td>{item.ism}</td>
                <td>{item.Taom_nomi}</td>
                <td>{item.narxi}</td>
                <td>{item.soni}</td>
                <td>{item.umumiy_narx}</td>
                <td>{item.telefon}</td>
                <td>{item.izoh}</td>
                {/* <td>
                <Link to={`${index}`} className="btn btn-primary">
                  show
                </Link>
              </td> */}
              </tr>
            ))}
        </tbody>
      </table>

      <div className="jami d-flex justify-content-between me-5">
        <p className="fw-bold">jami</p>
        <p className="fw-bold">182 000 so’m</p>
      </div>
    </>
  );
}
