import './AboutMe.css';
import Header from '../Header/Header';

function AboutMe() {
  return (
    <div>
      <Header />
      <div className="about-me">
      <p className="about-me__quote">
        &laquo;Фотографировать&nbsp;&mdash;
        это все равно что ходить на&nbsp;цыпочках на&nbsp;кухню поздно вечером
        и&nbsp;красть печенье Oreo&raquo;. &mdash;&nbsp;Диана Арбус
      </p>
    </div>
    </div>
  );
}

export default AboutMe;
