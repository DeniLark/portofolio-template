import { Wrapper } from "./Wrapper"

export const Hero = () => {

    return <Wrapper>
        <div className="hero">
            <div className="hero-content">

                <div className="hero-text">
                    <h1>Привет, я Даниил — разработчик, увлечённый Haskell.</h1>
                    <div>
                        <p>Люблю функциональное программирование, типы, красивые математические абстракции и элегантные решения.</p>
                        <p>Знаю фронтенд (React), но настоящее вдохновение нахожу в функциональном подходе.</p>
                    </div>
                </div>

                <div className="hero-buttons">
                    {/* <button className="btn">Примеры проектов</button> */}
                    {/* <button className="btn">Click me too</button> */}
                </div>

            </div>

            <div className="hero-icon"><span>{">>"}</span></div>
        </div>
    </Wrapper>
}