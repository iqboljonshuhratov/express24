import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Children, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, Outlet, NavLink } from "react-router-dom";
import DashboardTemplateWrapper from "./DashboardTemplateWrapper";
import expressImg from "./img/express.png";
import statistic from "./img/statistic.png";
import pilus from "./img/pilus.png";
import check from "./img/check.png";
import doira from "./img/doira.jpg";
import contact from "./img/contact.png";
import menu from "./img/menu.png";
import { LoginContext } from "../../App";
// import axror from './img/axror.png'

const links = [
  {
    to: "home",
    igm: `${doira}`,
    pTitle: "Arizalar",
    spanTitle: "Yetib kelgan arizalarni kuzatishingiz mumkin",
  },
  {
    to: "products",
    igm: `${check}`,
    pTitle: "Yetkazilgan",
    spanTitle: "Yetkazilgan taomlar ro’yxati bilan tanishing",
  },
  {
    to: "statistika",
    igm: `${statistic}`,
    pTitle: "Statistika",
    spanTitle: "Diagrammalar bilan ishlangan statistika",
  },
  {
    to: "qoshish",
    igm: `${pilus}`,
    pTitle: "Qo’shish",
    spanTitle: "Yangi kategoriya/taom qo’shish",
  },
  {
    to: "foydalanuvchi",
    igm: `${contact}`,
    pTitle: "Foydalanuvchilar",
    spanTitle: "Rollarni biriktirishingiz mumkin",
  },
];

export default function DashboardTemplate() {
  const { isLogin, setLogin } = useContext(LoginContext);

  return (
    <DashboardTemplateWrapper>
      <aside className="p-3 shadow">
        <div className="express-img-box">
          <img src={expressImg} alt="" />
        </div>
        <ListGroup className="p-3">
          {links.map((item) => {
            return (
              <ListGroup.Item>
                <NavLink
                  to={item.to}
                  className={`${({ isActive }) =>
                    isActive
                      ? "active"
                      : ""} rounded d-flex align-items-center mt-1`}
                >
                  {" "}
                  <div className="icon-box">
                    <img src={item.igm} alt="" />
                  </div>
                  <div className="link-box">
                    <p className="fw-bold">{item.pTitle}</p>
                    <span>{item.spanTitle}</span>
                  </div>
                </NavLink>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </aside>
      <div className="rightside">
        <header className="p-3 shadow  d-flex align-items-center justify-content-between">
          {" "}
          <p>
            <img src={menu} alt="" />
          </p>{" "}
          <div>
            <Link to={"/"} className="axror">
              <button className="btn btn-primary">Home</button>
            </Link>
            <Link to={"/"} className="axror">
              <button className="btn btn-primary ms-5" onClick={() => {setLogin(false)}}>
                Log out
              </button>
            </Link>
          </div>
        </header>
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </DashboardTemplateWrapper>
  );
}
