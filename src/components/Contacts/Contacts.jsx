import './Contacts.css';
import Header from '../Header/Header';

function Contacts() {
  return (
    <div className="contacts">
      <Header />
      <main className="contacts__content">
        <h1 className="contacts__title"><span className="contacts__title-span">ОБЯЗАТЕЛЬНО</span> НАПИШИ МНЕ</h1>
        <p className="contacts__subtitle">Если у&nbsp;тебя есть какие-то вопросы или предложения, очень жду тебя в&nbsp;сообщениях.</p>
        <ul className="contacts__list">
          <li className='contacts__list-item'><a href="https://vk.com/stormsi" className="contacts__link">ВКОНТАКТЕ</a></li>
          <li className='contacts__list-item'><a href="https://t.me/ilya_bir" className="contacts__link">TELEGRAM</a></li>
          <li className='contacts__list-item'><a href="2" className="contacts__link">INSTAGRAM</a></li>
          <li className='contacts__list-item'><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=birulevila@gmail.com" className="contacts__link">GMAIL</a></li>
        </ul>
        <p className="contacts__quote">&laquo;На&nbsp;каждой фотографии всегда есть два человека: фотограф и&nbsp;зритель&raquo;.&mdash; Ансель Адамс</p>
      </main>
    </div>
  );
}

export default Contacts;
