import { Wrapper } from "./Wrapper"

export const Contacts = () => {

    return <Wrapper>
        <div className="contacts">
            <div className="contacts-links contacts-block">
                <h2 className="links-title">Контакты</h2>
                <div><a href="https://vk.com/id30635808">ВКонтакте</a></div>
                <div><a href="https://t.me/DeniLark">Telegram</a></div>
            </div>
            {/* <div className="contacts-feedback contacts-block">
                <h2 className="links-feedback">Обратная связь</h2>
                <form className="form">
                    <div><input className="input" name="name" placeholder="Ваше имя" type="text" /></div>
                    <div><input className="input" name="email" placeholder="Ваш email" type="email" /></div>
                    <div><textarea className="input" name="message" placeholder="Ваше сообщение" /></div>
                    <div><input className="btn" type="submit" /></div>
                </form>
            </div> */}
        </div>
    </Wrapper>
}