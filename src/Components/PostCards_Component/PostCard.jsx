import React from "react";
import image1 from "../../Assets/nature-rDsfVg8l.jpg";
import image2 from "../../Assets/wood-SIbopgrg.jpg";
import image3 from "../../Assets//car-kZ9O3U5Q.jpg";
import user_profile1 from "../../Assets/user1-COSOQoOX.jpg";
import user_profile2 from "../../Assets/15d7211204149d93adda6dfafb5d81f2-08Q1wamp.jpg";
import user_profile3 from "../../Assets/c3ac7682e52df2e10d0a36ec3f243a44-6fhMyk-S.jpg";
import user_profile4 from "../../Assets/siddrath-t0piMZRc.jpg";
import { IoShareSocialSharp } from "react-icons/io5";

const cardObj = [
  {
    id: 1,
    project_name: "✍️ Article",
    project_image: image1,
    card_heading:
      " What if famous brands had regular fonts? Meet RegulaBrands!",
    project_pera:
      "I’ve worked in UX for the better part of a decade. From now on,I plan to rei…",
    user_profile: user_profile1,
    user_name: "Siddharth Goyal",
  },
  {
    id: 2,
    project_name: "🔬️ Education",
    project_image: image2,
    card_heading:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    project_pera:
      "I’ve worked in UX for the better part of a decade. From now on,I plan to rei…",
    user_profile: user_profile2,
    user_name: "Siddharth Goyal",
  },
  {
    id: 3,
    project_name: "🗓️ Meetup",
    project_image: image3,
    card_heading: " Finance & Investment Elite Social Mixer @Lujiazui",
    card_desc: "Fri, 12 Oct, 2018",
    user_location: "Ahmedabad, India",
    icon1: <i class="fa-regular fa-calendar"></i>,
    icon2: <i class="fa-solid fa-location-dot"></i>,
    user_profile: user_profile3,
    user_name: "Siddharth Goyal",
    card_button: "Visit WebSite",
  },
  {
    id: 4,
    project_name: "💼️ Job",
    card_heading: "Software Developer",
    card_desc: "Innovaccer Analytics Private Ltd.",
    user_location: "Noida, India",
    icon1: <i class="fa-regular fa-calendar"></i>,
    icon2: <i class="fa-solid fa-location-dot"></i>,
    user_profile: user_profile4,
    card_button: "Apply on Timejobs",
    user_name: "Siddharth Goyal",
  },
];

const PostCard = () => {
  return (
    <>
      {cardObj.map((card, i) => {
        return (
          <>
            <div className="card-container d-flex flex-column border border-1 rounded-2">
              <img
                src={card.project_image}
                style={
                  card.project_image
                    ? { display: "block" }
                    : { display: "none" }
                }
                alt=""
                className="imagePost"
              />
              <div className="p-4">
                <h3 className="d-flex">{card.project_name}</h3>
                <div className="d-flex gap-6 justify-content-between">
                  <h4>{card.card_heading}</h4>
                  <div className="btn align-self-start">
                    <div className="dropdown">
                      <div typeof="button">
                        <i class="fa-solid fa-ellipsis"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="d-flex align-items-center gap-5 list-unstyled ">
                  <li
                    className="d-flex align-items-center gap-1"
                    style={
                      card.card_desc
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    {card.icon1} {card.card_desc}
                  </li>
                  <li
                    className="d-flex align-items-center gap-1"
                    style={
                      card.user_location
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    {card.icon2}
                    {card.user_location}
                  </li>
                </ul>
                <button
                  className="custom-post-link btn mb-4 fw-semibold"
                  style={
                    // card.card_button
                    //   ? { display: "block" }
                    //   : { display: "none" }

                    card.card_button
                      ? { display: "block", color: "orange" }
                      : { display: "none", color: "green" }
                  }
                >
                  {card.card_button}
                </button>
                <p
                  style={
                    card.project_pera
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {card.project_pera}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={card.user_profile}
                      className="rounded-circle"
                      alt=""
                      width={48}
                      height={48}
                    />
                    <div className="d-flex flex-column">
                      <div className="text-wrapper">{card.user_name}</div>
                      <div className="d-lg-none">
                        <i class="fa-solid fa-eye"></i>
                        <span>1.4k views</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-none d-lg-block pe-4">
                      <i class="fa-solid fa-eye"></i>
                      <span>1.4k views</span>
                    </div>
                    <button className="btn d-flex align-items-center gap-2">
                      <IoShareSocialSharp /> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PostCard;
