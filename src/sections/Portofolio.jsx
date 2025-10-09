import { Card } from "../components/Card"
import { Wrapper } from "./Wrapper"

export const Portofolio = () => {

    return <Wrapper>
        <div className="portofolio">
            <h2>Примеры проектов</h2>
            <h1 style={{
                fontSize: "50px",
                textAlign: "center"
            }}>Всему свое время!</h1>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </Wrapper>
}