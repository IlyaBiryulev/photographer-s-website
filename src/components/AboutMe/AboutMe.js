import './AboutMe.css'
import Header from "../Header/Header";

function AboutMe() {
  return (
    <div>
      <section className="about-me">
          <Header />
          <p className="about-me__quote">&laquo;Фотографировать&nbsp;&mdash; это все равно что ходить на&nbsp;цыпочках на&nbsp;кухню поздно вечером и&nbsp;красть печенье Oreo&raquo;.
&mdash;&nbsp;Диана Арбус</p>
      </section>
    </div>
  );
}

export default AboutMe;
