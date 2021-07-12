/* loading the drum pads */
const pads = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


/* class for each drum pad to handle clicks */
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.handleClick();
    }
  }

  handleClick() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.play();
    this.props.updateDisplay(this.props.keyTrigger);
    const pad = document.getElementById(this.props.keyTrigger + this.props.keyCode);
    pad.style.backgroundColor = "#666666";
    setTimeout(() => pad.style.backgroundColor = "#999999", 100);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        className: "drum-pad",
        id: this.props.keyTrigger + this.props.keyCode,
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("audio", {
        className: "clip",
        id: this.props.keyTrigger,
        src: this.props.clip }), /*#__PURE__*/

      React.createElement("p", null, this.props.keyTrigger)));



  }}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "By Tim Meyer" };

    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(display) {
    this.setState({
      display: display });

  }

  /* rendering the entire ui */
  render() {
    let PadBank = pads.map(pad => {
      return /*#__PURE__*/(
        React.createElement(DrumPad, {
          clip: pad.url,
          keyCode: pad.keyCode,
          keyTrigger: pad.keyTrigger,
          updateDisplay: this.updateDisplay }));


    });
    return /*#__PURE__*/(
      React.createElement("div", { id: "inner-container" },
      PadBank, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.display))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('drum-machine'));