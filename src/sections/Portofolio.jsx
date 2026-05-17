import { Card } from "../components/Card"
import { Wrapper } from "./Wrapper"
import SteellRatImage from "../assets/projects/steell_rat.jpg"
import AvejiImage from "../assets/projects/Aveji.png"
import FisherImage from "../assets/projects/fisher.jpg"

const projects = [
  {
    image: SteellRatImage,
    text: "Интерактивный роман Гарри Гаррисона \"Стань стальной крысой\", выполненный в виде телеграм бота на Haskell",
    githubLink: "https://github.com/DeniLark/NowYouAreSteelRat"
  },
  {
    image: AvejiImage,
    text: "Шаблон одностраничного сайта фирмы по производству мебели. Шаблон выполнен на React",
    githubLink: "https://github.com/DeniLark/aveji",
    demoLink: "https://denilark.github.io/aveji/"
  },
  {
    image: FisherImage,
    text: "Шаблон одностраничного сайта, выполненный на pug, scss, gulp",
    githubLink: "https://github.com/DeniLark/template_1",
    demoLink: "https://denilark.github.io/template_1/"
  }
]

export const Portofolio = () => {

  return <Wrapper>
    <div className="portofolio">
      <h2>Примеры проектов</h2>
      <div className="cards">
        {projects.map((project, index) => {
          return (
            <Card key={index} project={project} />
          )
        })}
      </div>
    </div>
  </Wrapper>
}