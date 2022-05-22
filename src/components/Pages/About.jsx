import React from "react";
// import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./About.css";
import Logo from "./olawale.jpg";

const About = () => {
  return (
    <>
      <OurAim />
      <Image />
    </>
  );
};

const DevelopersProfile = [
  {
    id: 1,
    img: Logo,
    title: "Adetunji Marvellous",
    author: "Front-End Web Developer",
    socials: "FaInstagram FaGit FaTwitter",
    background:
      "Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime",
  },
  {
    id: 2,
    img: Logo,
    title: "Olatunji Mubarak",
    author: "Front-End Web Developer",
    socials: "FaInstagram FaGit FaTwitter",
    background:
      "Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime",
  },
  {
    id: 3,
    img: Logo,
    title: "Olajide OluwaTosin",
    author: "DS & ML Engineer",
    socials: "FaInstagram FaGit FaTwitter",
    background:
      "Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime",
  },
];

const MeetTeam = (props) => {
  const { img, title, author, background } = props.profile;
  return (
    <>
      <section className="MeetTeam">
        <div className="whiteDiv">
          <img src={img} alt="images" />
          <div className="Teamname">
            <h2>{title}</h2>
            <h3>{author}</h3>
          </div>
        </div>
        <p>{background}</p>
      </section>
    </>
  );
};

const OurAim = () => {
  return (
    <>
      <section className="white-bg">
        <div className="class underlined-div">
          <h1>About The Project</h1>
        </div>
        <div className="class">
          <h4>
            Occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum
            quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Maecenas id est sed lacus
            volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Et harum quidem rerum facilis est et
            expedita distinctio. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem
            ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi repudiandae
            consequuntur voluptatum laborum numquam blanditiis harum quisquam
            eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            Provident similique accusantium nemo autem. Veritatis obcaecati
            tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat,
            odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
            laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint? Sed quibusdam recusandae alias error harum maxime
            adipisci amet laborum. Perspiciatis minima nesciunt dolorem!Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Maxime //
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            // voluptatum laborum numquam blanditiis harum quisquam eius sed
            odit // fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique // accusantium nemo autem. Veritatis obcaecati tenetur
            iure eius earum ut // molestias architecto voluptate aliquam nihil,
            eveniet aliquid culpa // officia aut! Impedit sit sunt quaerat,
            odit, tenetur error, harum // nesciunt ipsum debitis quas aliquid.
            Reprehenderit, quia. Quo neque // error repudiandae fuga? Ipsa
            laudantium molestias eos sapiente // officiis modi at sunt excepturi
            expedita sint? Sed quibusdam // recusandae alias error harum maxime
            adipisci amet laborum. // Perspiciatis minima nesciunt dolorem!
          </h4>
        </div>
        <div className="container">
          <h1>Check out the GitHub repository</h1>
          <a href="https://github.com/heisguyy/skinDisease.git" target="_blank" className="GithubLink">
            <FaGithub style={{ fontSize: "2rem", color: "white", float:"left" }} />
            <p>https://github.com/heisguyy/skinDisease.git</p>
          </a>
        </div>
      </section>
    </>
  );
};

const Image = () => {
  return (
    <>
      <section className="MeetOurTeam">
        <h1>Meet The Team</h1>
        <div className="DevelopersProfile">
          {DevelopersProfile.map((profile) => {
            return <MeetTeam profile={profile}></MeetTeam>;
          })}
        </div>
      </section>
    </>
  );
};

export default About;
