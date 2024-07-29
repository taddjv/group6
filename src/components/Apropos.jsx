import React from "react";
import "../style/aPropos.css";
import room from "../assets/room.jpg";
import comments from "../assets/comments.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Apropos() {
  return (
    <>
      <section id="a-propos" className="banner ap-container">
        <img
          className="bannerImage"
          src={room}
          alt="Logo"
          style={{ filter: "brightness(0.25)" }}
        />
        <div className="aPropos">
          <span className="ap-title">À Propos</span>
          <div className="ap-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            aperiam aspernatur consequatur quaerat, exercitationem iste
            accusamus nulla, beatae inventore debitis nesciunt blanditiis.
          </div>
        </div>
        {/* <Swiper
          navigation={true}
          modules={[Navigation]}
          className="ap-comments"
        >
          {comments.map((el) => {
            return (
              <SwiperSlide className="comment">
                <div className="comment-text">{el.comment}</div>
                <div className="comment-name">
                  <em>
                    -{el.name} , {el.title}
                  </em>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </section>
    </>
  );
}

export default Apropos;
