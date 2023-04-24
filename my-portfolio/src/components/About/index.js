import React from 'react';
import me from '../../assets/me/me.jpg';
function About() {
  return (
    <section className="my-5">
      <div className="d-flex justify-content-end my-2">
      <div className="profile-img my-5">
          <img src={me} alt="Myself" style={{ width: "400px", marginLeft: "10px"}} />
        </div>
        <p>Hello! My name is Frank Muniz. I am a Full Stack Web Developer and recently completed the UCLA Extension Full Stack Web Development Coding BootCamp. I took a class in computer programming in High School and have been interested in coding ever since. However, life had other stuff planned.
          I ended up becoming a registered Phlebotomist and Medical Assistant. But, my brother came across a coding bootcamp and asked if I was interested. I was! I have become passionate about coding through this experience once again. Can't wait for what the future of coding and tech holds!
        </p>
      </div>
    </section>
  );
}

export default About;
