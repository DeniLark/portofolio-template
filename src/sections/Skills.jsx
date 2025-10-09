import { Wrapper } from "./Wrapper"

const haskellLibs = [{
    libName: "base",
    libUrl: "https://hackage.haskell.org/package/base",
    libDesc: "фундамент стандартных типов и функций."
}, {
    libName: "containers",
    libUrl: "https://hackage.haskell.org/package/containers",
    libDesc: "эффективные структуры данных."
}, {
    libName: "text",
    libUrl: "https://hackage.haskell.org/package/text",
    libDesc: "работа с текстом"
}, {
    libName: "bytestring",
    libUrl: "https://hackage.haskell.org/package/bytestring",
    libDesc: "обработка бинарных данных"
}, {
    libName: "aeson",
    libUrl: "https://hackage.haskell.org/package/aeson",
    libDesc: "JSON-парсинг, используется при интеграции с API."
}, {
    libName: "servant",
    libUrl: "https://hackage.haskell.org/package/servant",
    libDesc: "декларативное описание REST API."
}, {
    libName: "zenacy-html",
    libUrl: "https://hackage.haskell.org/package/zenacy-html",
    libDesc: "декларативная генерация и парсинг HTML"
}, {
    libName: "effectful",
    libUrl: "https://hackage.haskell.org/package/effectful",
    libDesc: "современный способ описывать эффекты без лишней сложности."
}]

const frontend = [{
    frontName: "React",
    frontDesc: "основа интерфейса."
}, {
    frontName: "React Router",
    frontDesc: "управление маршрутизацией."
}, {
    frontName: "Vite",
    frontDesc: "быстрая и лёгкая сборка."
}, {
    frontName: "SCSS/SASS",
    frontDesc: "аккуратное оформление."
}]


export const Skills = () => {

    return <Wrapper>
        <div>
            <h2>Технологии</h2>
            <div className="skills">
                <div className="skill">
                    <div className="skill-text skill-block">
                        <h3>Haskell</h3>

                        <div>
                            <ul>
                                {haskellLibs.map(l => {
                                    return <li key={l.libName}>
                                        <span className="list-label">{">>= "}</span>
                                        <a href={l.libUrl}>{l.libName}</a>
                                        <span> - </span>
                                        {l.libDesc}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* <div className="skill-img skill-block skill-img--haskell"></div> */}
                </div>
                <div className="skill">
                    <div className="skill-text skill-block">
                        <h3>Frontend</h3>
                        <div>
                            <ul>
                                {frontend.map(f => {
                                    return <li key={f.frontName}>
                                        <span className="list-label">{" > "}</span>
                                        {f.frontName}
                                        <span> - </span>
                                        {f.frontDesc}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* <div className="skill-img skill-block skill-img--front"></div> */}
                </div>
            </div>

            <div className="skills-block-bottom skill">
                <div>
                    <p><strong>Инструменты, без которых ничего не сделать:</strong> git, cabal, npm, ghcup, ghci, linux.</p>
                </div>
            </div>

        </div>
    </Wrapper>
}