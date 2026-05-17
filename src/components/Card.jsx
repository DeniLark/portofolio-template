import HaskellLogo from "../assets/haskell_logo.png"

export const Card = (props) => {
  const { project } = props
  const { image, text, githubLink, demoLink } = project

  return <div className="card">
    <div>
      {/* <h2 className="card-title">Project name</h2> */}
      <div className="card__image">
        <img className="project-img" src={image} />
      </div>
      <div className="project-desc">
        <p>{text}</p>
      </div>
    </div>
    <div className="card-buttons">
      <a href={githubLink} target="_blank" className="btn">GitHub</a>
      {demoLink && <a
        href={demoLink}
        target="_blank"
        className="btn"
      >Demo
      </a>}
    </div>
  </div>
}