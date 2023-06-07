import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import expressImg from "../../components/DashboardTemplate/img/express.png";
import ImgeProductWrapper from "../../components/DashboardTemplate/DashboardTemplateWrapper";

export default function Welcome() {
  const { isLogin } = useContext(LoginContext);

  return (
    <div className="container py-3 justify-content-center text-center mt-5">
      {isLogin ? (
        <Link to={`/dashboard/home`} className="btn btn-primary mt-5">
          Dashboard
        </Link>
      ) : (
        <Link to={`/login`} className="btn btn-primary mt-5">
          Sign in
        </Link>
      )}

      <h1 className="text-center display-1 mt-5">
        <img src={expressImg} alt="" />
      </h1>
      <img className="mt-5" src="https://i.mycdn.me/i?r=AyENid1PUfRjbfTS8I1wumQ-gJOJDNgQmHbGwjQTxcSxnQ" />
    </div>
  );
}
