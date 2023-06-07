import React from "react";
import getProductsFoydalanuvchi from "../../data/FoydalanuvchiProducts";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "react-router-dom";

export default function Foydalanuvchi() {
  const products = getProductsFoydalanuvchi();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="arizlar-tex-box">
        <h3 className="fw-bold">Foydalanuvchilar</h3>
        <p>Rollarni biriktirishingiz mumkin</p>
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
            <th>Telefon raqam</th>
            <th>Roli</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((item) => {
              const filter = searchParams.get("filter");
              if(!filter) return true;
              return item.ism.toLowerCase().includes(filter);
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.ism}</td>
                <td>{item.telefon}</td>
                <td>{item.roli}</td>
                <td>
                  <div className="box d-flex ">
                    <button className="me-3 border-0">
                      <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <button className="border-0">
                      <FontAwesomeIcon
                        className="text-danger"
                        icon={faTrashCan}
                      />
                    </button>
                  </div>
                </td>
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
        <p className="fw-bold">4 ta akkaunt</p>
      </div>
    </>
  );
}
