import { Card } from "../components/Card"
import { Wrapper } from "./Wrapper"

export const Portofolio = () => {

    return <Wrapper>
        <div className="portofolio">
            <h2>Примеры проектов</h2>
            <div className="cards">
                <div className="cards-stab">
                    <div className="cards-stab-text">
                        <div>Нет идеи, которую стоит воплотить.</div>
                        <div>А может, она у вас.</div>
                        <div>Всё зависит не от средств, а от смысла.</div>
                        <div>Потому идей так мало.</div>
                    </div>
                </div>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </Wrapper>
}