import './LandingPage.css'
import { FaGraduationCap, FaCode } from "react-icons/fa";
import Projects from './Projects';
import GetInTouch from './GetInTouch';
import { useRef } from "react"; 

const LandingPage = () =>{
  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero">
        <span className='heading'>
          <p className='heading-info'>Hi, I'm</p>
          <p className='heading-name'>Vismaya</p>
        </span>

        <span className='para-info'>
          <p className='para-line1'>Aspiring Software Engineer.</p>
          <p className='para-line2'>I like building new things using code!</p>
        </span>

        <button className='view-projects' onClick={scrollToProjects}>View Projects</button>
      </section>

      {/* About Me Section */}
      <section className='about-me'>
        <p className='about-me-heading'>About Me</p>
        <p className='about-me-para'>
          I am Vismaya Jagadeesh, an engineering student (B.E. 2026) with a strong passion for technology and innovation. I have hands-on experience in Python, JavaScript, Java, and SQL, and I enjoy working on projects that integrate machine learning, computer vision, and full-stack development.<br/><br/>
          With a mindset rooted in analytical thinking, adaptability, and continuous learning, I strive to create solutions that are both impactful and user-friendly. My long-term goal is to grow as a software engineer and contribute to meaningful projects that make a difference.
        </p>
      </section>

      {/* Boxes Section */}
      <section className='boxes-section'>
        <div className='boxes'>
          <div className='education-box'>
            <FaGraduationCap size={70}/>
            <p className='education'>Education</p>
            <p className='year'>B.E - 2026</p>
          </div>

          <div className='tech-stack-box'>
            <FaCode size={70} />
            <p className='tech-stack'>Tech Stack</p>
            <p className='stack-1'>Front-end Development</p>
            <p className='stack-2'>Machine Learning</p>
            <p className='stack-3'>Java</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='projects' ref={projectsRef}>
        <p className='projects-heading'>Projects</p>
        <p className='description'>Here are some of my recent projects.</p>
        <Projects />
      </section>

      <GetInTouch />
    </div>
  )
}

export default LandingPage;
