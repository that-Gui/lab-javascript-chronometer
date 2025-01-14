class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  
  start(callback) {
    this.intervalId = setInterval(() => {
      if ( callback ) return callback;
      this.currentTime++;
    }, 1000);
    //if ( !callback ) return;
  }

  getMinutes() {
    if ( this.currentTime < 60) return 0;
    return Math.floor(this.currentTime / 60);
  }
  
  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if ( value < 10 ) return `0${value}`;
    if ( value > 10 ) return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
