import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "Face recognition system using computer vision that identifies individuals, displaces information about them and syncs data with real time database to manage attendence.",
      technologies: ['Computer Vision', 'Machine Learning', 'Python']
    },
    {
      title: "Movie Recommender System",
      description: "A Python based system that suggests 5 similar movies based on the genre of the input movie with a user friendly interface. Helps user discover films with matching themes and styles for personalized viewing experience.",
      technologies: ['Python', 'Pandas', 'Numpy', 'Machine Learning']
    },
    {
      title: "Window Blinds E-Commerce website",
      description: "Designed and developed a responsive e-commerce website using HTML, CSS, and JavaScript, featuring product listings, a shopping cart,a wishlist and a seamless user interface.",
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className='projects-box' key={index}>
          <p className="title">{project.title}</p>
          <p className="project-description">{project.description}</p>
          <div className='technology'>
            {project.technologies.map((tech, i) => (
              <div className='tech' key={i}>
                <p className='tech-names'>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
