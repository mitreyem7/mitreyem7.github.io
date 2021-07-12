const beep = document.getElementById("beep");

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerType: "Session",
      timer: 1500 };

    this.decBreakLength = this.decBreakLength.bind(this);
    this.incBreakLength = this.incBreakLength.bind(this);
    this.decSessLength = this.decSessLength.bind(this);
    this.incSessLength = this.incSessLength.bind(this);
    this.resetClick = this.resetClick.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.startTimer = this.startTimer.bind(this);

  }

  /* decrements the length of the break */
  decBreakLength() {
    if (this.state.breakLength > 1) {
      this.setState({
        timer: this.state.timerType == "Break" ?
        (this.state.breakLength - 1) * 60 :
        this.state.timer,
        breakLength: this.state.breakLength - 1 });

    }
    document.getElementById("start_stop").className = "fas fa-play fa-2x";
    clearInterval(this.timerInterval);
  }

  /* increments the length of the break */
  incBreakLength() {
    if (this.state.breakLength < 60) {
      this.setState({
        timer: this.state.timerType == "Break" ?
        (this.state.breakLength + 1) * 60 :
        this.state.timer,
        breakLength: this.state.breakLength + 1 });

    }
    document.getElementById("start_stop").className = "fas fa-play fa-2x";
    clearInterval(this.timerInterval);
  }

  /* decrements the length of the session */
  decSessLength() {
    if (this.state.sessionLength > 1) {
      this.setState({
        timer: this.state.timerType == "Session" ?
        (this.state.sessionLength - 1) * 60 :
        this.state.timer,
        sessionLength: this.state.sessionLength - 1 });

    }
    document.getElementById("start_stop").className = "fas fa-play fa-2x";
    clearInterval(this.timerInterval);
  }

  /* increments the length of the session */
  incSessLength() {
    if (this.state.sessionLength < 60) {
      this.setState({
        timer: this.state.timerType == "Session" ?
        (this.state.sessionLength + 1) * 60 :
        this.state.timer,
        sessionLength: this.state.sessionLength + 1 });

    }
    document.getElementById("start_stop").className = "fas fa-play fa-2x";
    clearInterval(this.timerInterval);
  }


  /* decrement the timer by 1 second */
  decrementTimer() {
    if (this.state.timer == 0) {
      beep.play();
      const wasType = this.state.timerType;
      switch (wasType) {
        case "Session":
          this.setState({
            timerType: "Break",
            timer: this.state.breakLength * 60 });

          break;
        case "Break":
          this.setState({
            timerType: "Session",
            timer: this.state.sessionLength * 60 });

          break;
        default:
          break;}

    } else {
      this.setState({ timer: this.state.timer - 1 });
    }
  }

  /* runs the timer decrement function every second */
  startTimer() {
    this.timerInterval = setInterval(() => this.decrementTimer(), 1000);

  }

  /* handles reset button click */
  resetClick() {
    document.getElementById("start_stop").className = "fas fa-play fa-2x";
    clearInterval(this.timerInterval);
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerType: "Session",
      timer: 1500 });

    beep.pause();
    beep.currentTime = 0;
  }

  /* handles play/pause button click */
  changeStatus() {
    let statusButton = document.getElementById("start_stop");
    let currentButton = statusButton.className;
    switch (currentButton) {
      case "fas fa-play fa-2x":
        statusButton.className = "fas fa-pause fa-2x";
        this.startTimer();
        break;
      case "fas fa-pause fa-2x":
        statusButton.className = "fas fa-play fa-2x";
        clearInterval(this.timerInterval);
        break;
      default:
        break;}


  }


  render() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return /*#__PURE__*/(
      React.createElement("div", { id: "app" }, /*#__PURE__*/
      React.createElement("h1", null, "25 + 5 Clock"), /*#__PURE__*/
      React.createElement("div", { id: "break-label", className: "control" }, /*#__PURE__*/
      React.createElement("p", null, "Break Length", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", { class: "fas fa-minus",
        id: "break-decrement",
        onClick: this.decBreakLength }), /*#__PURE__*/

      React.createElement("span", { id: "break-length" },
      this.state.breakLength), /*#__PURE__*/

      React.createElement("i", { class: "fas fa-plus",
        id: "break-increment",
        onClick: this.incBreakLength }))), /*#__PURE__*/




      React.createElement("div", { id: "session-label", className: "control" }, /*#__PURE__*/
      React.createElement("p", null, "Session Length", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("i", { class: "fas fa-minus",
        id: "session-decrement",
        onClick: this.decSessLength }), /*#__PURE__*/

      React.createElement("span", { id: "session-length" },
      this.state.sessionLength), /*#__PURE__*/

      React.createElement("i", { class: "fas fa-plus",
        id: "session-increment",
        onClick: this.incSessLength }))), /*#__PURE__*/






      React.createElement("div", { id: "timer-wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "timer-label" },
      this.state.timerType), /*#__PURE__*/

      React.createElement("div", { id: "time-left" },
      minutes + ":" + seconds), /*#__PURE__*/

      React.createElement("div", { id: "timer-controls" }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-play fa-2x",
        id: "start_stop",
        onClick: this.changeStatus }), /*#__PURE__*/

      React.createElement("i", { class: "fas fa-redo-alt fa-2x",
        id: "reset",
        onClick: this.resetClick })))));






  }}





ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), document.getElementById('root'));