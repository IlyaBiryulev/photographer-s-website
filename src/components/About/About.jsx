import './About.css';
import photo from '../../image/cb1nOsuHEHE.jpg'

function About() {
  return (
    <section className='about'>
        <article className='about__wrapper'>
          <h1 className='about__title'>О себе</h1>
          <p className='about__info'> Меня зовут Илья, и я с удовольствием приветствую вас на своем фотографическом портфолио.
            Профессионально фотографией занимаюсь более 5 лет назад, и с тех пор каждый кадр для меня — это возможность запечатлеть мгновение, сохранить эмоции и рассказать уникальную историю через объектив.
            Моя работа — это путешествие в мир визуальных возможностей, в поисках идеального ракурса и игры света.
            За эти годы я преодолел(а) множество творческих барьеров, развивал(ась) свой стиль и подход к съемке.
            Мне важно не только создавать красивые фотографии, но и передавать настроение, эмоции, искренность.
            Я верю, что именно эти аспекты делают каждое фото неповторимым и ценным.</p>
          <img src={photo} alt='Фотография автора' className='about__img'></img>
        </article>
      </section>
  );
}

export default About;
