import React from "react";
import "../style/nosServices.css";
import insurance from "../assets/insurance.svg";
import savings from "../assets/savings.svg";
import investing from "../assets/investing.svg";

function NosServices() {
  return (
    <>
      <section className="nos-services">
        <div className="ns-card">
          <img className="nsc-logo" src={insurance} />
          <div className="nsc-title">Assurance</div>
          <div className="nsc-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <div className="ns-card">
          <img className="nsc-logo" src={savings} />
          <div className="nsc-title">Épargne</div>
          <div className="nsc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <div className="ns-card">
          <img className="nsc-logo" src={investing} />
          <div className="nsc-title">Placements</div>
          <div className="nsc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
      </section>
    </>
  );
}
export default NosServices;
