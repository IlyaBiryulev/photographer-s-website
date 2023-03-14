import Header from "./Header";

function Contacts() {
  return (
    <div>
      <section className="contacts">
          <Header />
          <main className="contacts__content">
            <h1 className="contacts__title"><span className="contacts__title-span">ОБЯЗАТЕЛЬНО</span> НАПИШИ МНЕ</h1>
            <p>Если у&nbsp;тебя есть какие-то вопросы или предложения, очень жду тебя в&nbsp;сообщениях.</p>
            <ul>
              <li><a href="https://vk.com/stormsi">ВКОНТАКТЕ</a></li>
              <li><a href="https://t.me/@ilya_bir">TELEGRAM</a></li>
              <li><a href="">INSTAGRAM</a></li>
              <li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=birulevila@gmail.com">GMAIL</a></li>
            </ul>
            <p>Или пиши через форму</p>
            <div></div>
            <p>&quot;На&nbsp;каждой фотографии всегда есть два человека: фотограф и&nbsp;зритель&quot;.&mdash; Ансель Адамс</p>
          </main>

      </section>
    </div>
  );
}

export default Contacts;
