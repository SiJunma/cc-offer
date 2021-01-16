function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    let clock = document.querySelector(id);
    let daysSpan = clock.querySelector('.js-days');
    let hoursSpan = clock.querySelector('.js-hours');
    let minutesSpan = clock.querySelector('.js-min');
    let secondsSpan = clock.querySelector('.js-sec');
   
    function updateClock() {
      let t = getTimeRemaining(endtime);
   
      daysSpan.textContent = t.days;
      hoursSpan.textContent = ('0' + t.hours).slice(-2);
      minutesSpan.textContent = ('0' + t.minutes).slice(-2);
      secondsSpan.textContent = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  // for endless timer
  // Например, всегда осталось 15 дней
//   let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); 

  let deadline = '2021-01-31';

  initializeClock('.counter', deadline);