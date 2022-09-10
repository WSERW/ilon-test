import logo from './img/logo.png';
import arrow from './img/arrow.png';
import './App.css';

function App() {
  return (
    <main>
      <nav>
        <div className="container">
          <div className="nav">
            <a href="#" className="logo">
              <img src={logo} alt="" />
            </a>
            <ul className="nav__list">
              <li className="nav__item"><a href="#" className="nav__link">Главная</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Технология</a></li>
              <li className="nav__item"><a href="#" className="nav__link">График полетов</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Гарантии</a></li>
              <li className="nav__item"><a href="#" className="nav__link">О компании</a></li>
              <li className="nav__item"><a href="#" className="nav__link">Контакты</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <div className="container">
          <div className="header">
            <div className="header__text">
              <h1 className='header__title'>Путешествие<br /><span>на красную планету</span></h1>
              <div  className='header__btn__arrow'>
              <button className='header__btn'>Начать путешествие</button>
              <img src={arrow} alt="" />
              </div>
            </div>
            <div className="header__info">
              <div className="header__cards">
                <div className="header__card">
                  <h3>мы<br /><span>1</span><br />на рынке</h3>
                </div>
                <div className="header__card">
                  <h3>гарантируем<br /><span>50%</span><br />безопасность</h3>
                </div>
                <div className="header__card">
                  <h3>календарик за<br /><span>2001<small>г.</small></span><br />в подарок</h3>
                </div>
                <div className="header__card">
                  <h3>путешествие<br /><span>597</span><br />дней</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

export default App;
