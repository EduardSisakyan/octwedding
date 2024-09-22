import './App.css';
import { useEffect, useState } from 'react';
import Img1 from './images/1.webp';
import Img2 from './images/2.webp';
import Img3 from './images/3.webp';

const getTimeUntilDate = (targetDate) => {
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();

  if (timeDifference <= 0) {
      return {
          day: "00",
          hour: "00",
          minute: "00"
      };
  }

  const totalMinutes = Math.floor(timeDifference / 1000 / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const days = totalDays;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  return {
      day: days.toString().padStart(2, "0"),
      hour: hours.toString().padStart(2, "0"),
      minute: minutes.toString().padStart(2, "0")
  };
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilDate(new Date("2024-10-12T13:30:00")));

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeUntilDate(new Date("2024-10-12T13:30:00"));
      setTimeLeft(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div className="cover">
        <div className='cover-title'>
          <h3>Էդուարդ <br /> Ծովինար</h3>
        </div>
        <div className='cover-text'>
          <div className='time-item'>
            <p>{timeLeft.day}</p>
            <p>Օր</p>
          </div>
          <div className='time-item'>
            <p>{timeLeft.hour}</p>
            <p>Ժամ</p>
          </div>
          <div className='time-item'>
            <p>{timeLeft.minute}</p>
            <p>Րոպե</p>
          </div>
        </div>
      </div>

      <div className='kjsadbf'>
        <h4>Հոկտեմբերի 12, 2024</h4>

        <p>Ուրախ կլինենք, որ այս անմոռանալի օրը անցկացնեք մեզ հետ</p>
      </div>

      <div className='info'>
        <div className='list'>
          <div className='info-item'>
            <div className='top'>
              <img src={Img1} alt='' />
            </div>
            <h4>ՊՍԱԿԻ ԱՐԱՐՈՂՈՒԹՅՈՒՆ</h4>
            <p className='time'>Ժամը 13:30-ին</p>
            <p className='descr'>Սուրբ Գևորգ եկեղեցի (Մուղնի)</p>
            <a href='https://yandex.com/maps/-/CDHOeTiN' target='_blank' rel="noreferrer">Հայաստան, Արագածոտնի մարզ, Աշտարակ <br /> Մուղնի թաղամաս</a>
          </div>
          <div className='info-item'>
            <div className='top'>
              <img src={Img2} alt='' />
            </div>
            <h4>ՀԱՐՍԱՆՅԱՑ ԽՆՋՈՒՅՔ</h4>
            <p className='time'>Ժամը 17:00-ին</p>
            <p className='descr'>Ohana Yvn</p>
            <a href='https://yandex.com/maps/-/CDHOmO4r' target='_blank' rel="noreferrer">Կոտայքի մարզ, Ջրվեժ</a>
          </div>
          {/* <div className='info-item'>
            <div className='top'>
              <img src={Img3} alt='' />
            </div>
            <h4>ՏՈՐԹԻ ԱՐԱՐՈՂՈՒԹՅՈՒՆ</h4>
            <p className='time'>Ժամը 22:00-ին</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
