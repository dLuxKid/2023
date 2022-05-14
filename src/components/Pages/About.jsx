import React from 'react';
import './About.css'
import Logo from './olawale.jpg'

const About = () => {
  return (
    <>
      <OurProject />
      <OurAim />
      <Image />
    </>
  );
}

const DevelopersProfile = [
  {
    id: 1,
    img : Logo,
    title : "Adetunji Marvellous",
    author : "Front-End Web Developer",
  },
  {
    id: 2,
    img : Logo,
    title : "Olatunji Mubarak",
    author : "Front-End Web Developer",
  },
  {
    id: 3,
    img : Logo,
    title : "Olajide OluwaTosin",
    author : "DS & ML Engineer",
  }
]

const MeetTeam = (props) => {
  const { img, title, author } = props.profile
  return (
      <div className='MeetTeam'>
        <img src= {img} alt='images' />
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
  );
}



const OurProject = () => {
  return (
    <div className='blue'>
      <div className='Text'>
        <h2>A little bit about <br></br><span className='Big-Text'>Our Project</span></h2>
      </div>
      <div className='Text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
          minima nesciunt dolorem! 
        </p>
      </div>
    </div>
  )
}


const OurAim = () => {
  return (
    <>
      <div className='white'>
        <div className='class'>
          <div className='underlined-div'>
            <h1>Our Aim</h1>
          </div>
        </div>
        <div className='class'>
          <h4>
            Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
        </div>
      </div>
    </>
  );
}


const Image = () => { 

  return (
  <>
    <div className='blue Meet-Dev'>
      <div className='MeetDevDiv'>
          <h1 className='Big-Text'>Meet Our Team</h1>
      </div>
      <div className='DevelopersProfile'>
        {
        DevelopersProfile.map((profile) =>{
          return(
            <MeetTeam profile={profile} ></MeetTeam>
          )
        })
      }
      </div>
    </div>
  </>
  )
}



export default About;