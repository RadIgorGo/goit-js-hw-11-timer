import './styles.css';

const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
};
//Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
function getTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
function pad(value) {
  return String(value).padStart(2, '0');
}

//Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

class СountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;

    this.start = function () {
      const startTime = targetDate;

      setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = startTime - currentTime;
        const { days, hours, mins, secs } = getTimer(deltaTime);
        refs.days.innerText = days;
        refs.hours.innerText = hours;
        refs.mins.innerText = mins;
        refs.secs.innerText = secs;
      }, 1000);
    };
  }
}

const deadLine = new СountdownTimer({
  targetDate: new Date('05, 07, 2021'),
});

deadLine.start();
