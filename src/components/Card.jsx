import HaskellLogo from "../assets/haskell_logo.png"

export const Card = () => {

    return <div className="card">
        <div>
            <h2 className="card-title">Project name</h2>
            <img className="project-img" src={HaskellLogo} alt="Project name" />
            <div className="project-desc">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, error rerum sapiente sint nam alias provident consectetur sunt mollitia repudiandae sed cumque ipsam magni dolore eius sit dolor optio. Illum.</p>
            </div>
        </div>
        <div className="card-buttons">
            <button className="btn">GitHub</button>
            {/* <button className="btn">Demo</button> */}
        </div>
    </div>
}