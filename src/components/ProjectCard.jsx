import "../css/Card.css"

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <img
        className="card-img"
        src={project.url}
        alt={project.title}
      />

      <h2 className="card-title">
        {project.title}
      </h2>

      <p className="card-description">
        {project.description}
      </p>

    
    </div>
  )
}

export default ProjectCard