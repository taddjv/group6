import data from "../assets/data.js";
import picture from "../assets/portrait.jpeg";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import React from "react";
import "../notreEquipe.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function NotreEquipe() {
  return (
    <>
      <div className="ne-title">Notre Équipe</div>
      <Splide
        options={{
          arrows: false,
          pagination: false,
          rewind: true,
          gap: "1rem",
          type: "loop",
          drag: "free",
          perPage: 4,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {data
          .sort(() => Math.random() - 0.5)
          .map((person) => {
            return (
              <SplideSlide>
                {" "}
                <div className="ne-card">
                  <img className="nec-image" src={picture} />

                  <div className="nec-name">
                    {person.name}
                    {person.facebook ? (
                      <a target="_blank" href={person.facebook}>
                        <img className="nec-logo" src={facebook} />
                      </a>
                    ) : null}
                    {person.linkedin ? (
                      <a target="_blank" href={person.linkedin}>
                        <img className="nec-logo" src={linkedin} />
                      </a>
                    ) : null}
                  </div>
                  <div className="nec-title">{person.title}</div>
                </div>
              </SplideSlide>
            );
          })}
      </Splide>
    </>
  );
}

export default NotreEquipe;
