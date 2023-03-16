import Header from "./Header";

function Portfolio() {
  return (
    <div>
      <div className="header_dark-theme">
        <Header />
      </div>
      <main className="portfolio">
        <p className="portfolio__quote">&quot;Большинство вещей в&nbsp;жизни&nbsp;&mdash; это моменты удовольствия и&nbsp;смущения на&nbsp;всю жизнь. Фотография&nbsp;&mdash; это момент смущения и&nbsp;наслаждения на&nbsp;всю жизнь&quot;.&mdash; Тони Бенн</p>
        <section className="cards">
          <img src="../../image/Card1"></img>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
