const endsWithOperator = /[-\+\*\/]$/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: "",
      done: false,
      currentValue: "0" };

    this.allClear = this.allClear.bind(this);
    this.evalFormula = this.evalFormula.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.backSpace = this.backSpace.bind(this);

  }

  allClear() {
    this.setState({
      formula: "",
      done: false,
      currentValue: "0" });

  }

  /* replaces duplicte operators and evaluates the formula */
  evalFormula() {
    let currentFormula = this.state.formula;
    currentFormula = currentFormula.replace(/-{2}/g, "+");
    currentFormula = currentFormula.replace(/([-\+\*\/])([\+\*\/])/g, '$2');
    this.setState({
      formula: currentFormula });


    return currentFormula == "" ?
    0 :
    Math.round(1000000000000 * eval(currentFormula)) / 1000000000000;
  }

  /* runs when a number is input */
  handleNumber(e) {
    if (this.state.done) {
      this.setState({
        formula: "",
        currentValue: e.target.value.toString(),
        done: false });

    } else {
      if (endsWithOperator.test(this.state.currentValue)) {
        this.setState({
          formula: this.state.formula + this.state.currentValue,
          currentValue: e.target.value.toString() });

      } else {
        if (!this.state.currentValue.includes(".") ||
        e.target.value.toString() != ".") {
          if (this.state.currentValue == "0") {
            this.setState({
              currentValue: e.target.value.toString() });

          } else {
            this.setState({
              currentValue: this.state.currentValue +
              e.target.value.toString() });

          }
        }
      }
    }

  }

  /* runs when an operator is input */
  handleOperator(e) {
    let newOperator = e.target.value.toString();
    let newFormula = this.state.currentValue;
    if (this.state.done) {
      this.setState({
        formula: newFormula,
        currentValue: e.target.value.toString(),
        done: false });

    } else {

      if (parseFloat(newFormula) > 0) {
        this.setState({
          formula: this.state.formula + newFormula,
          done: false,
          currentValue: newOperator });

      } else {


        if (endsWithOperator.test(newFormula)) {
          if (newOperator == "-") {
            this.setState({
              formula: this.state.formula + newFormula,
              done: false });

          }

          this.setState({
            currentValue: newOperator,
            done: false });


        }
      }
    }
  }

  /* runs when = is input */
  handleEqual() {
    let lastValue = this.state.currentValue;
    if (endsWithOperator.test(lastValue)) {
      lastValue = "";
    }
    this.setState({
      formula: this.state.formula + lastValue },
    () => {
      this.setState({
        currentValue: this.evalFormula(),
        done: true });
    });
  }

  /* runs when <- is input */
  backSpace() {
    if (this.state.currentValue.length > 0) {
      this.setState({
        currentValue: this.state.currentValue.substring(
        0, this.state.currentValue.length - 1),
        done: false });


    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "app" }, /*#__PURE__*/
      React.createElement("div", { id: "output" }, /*#__PURE__*/
      React.createElement("div", { id: "result" },
      this.state.formula), /*#__PURE__*/

      React.createElement("div", { id: "display" },
      this.state.currentValue)), /*#__PURE__*/


      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("button", {
        id: "clear",
        onClick: this.allClear }, "AC"), /*#__PURE__*/



      React.createElement("button", {
        id: "back",
        onClick: this.backSpace }, "<--"), /*#__PURE__*/



      React.createElement("button", {
        id: "divide",
        onClick: this.handleOperator,
        value: "/" }, "/"), /*#__PURE__*/



      React.createElement("button", {
        id: "multiply",
        onClick: this.handleOperator,
        value: "*" }, "*"), /*#__PURE__*/




      React.createElement("button", {
        id: "seven",
        onClick: this.handleNumber,
        value: "7" }, "7"), /*#__PURE__*/



      React.createElement("button", {
        id: "eight",
        onClick: this.handleNumber,
        value: "8" }, "8"), /*#__PURE__*/



      React.createElement("button", {
        id: "nine",
        onClick: this.handleNumber,
        value: "9" }, "9"), /*#__PURE__*/



      React.createElement("button", {
        id: "subtract",
        onClick: this.handleOperator,
        value: "-" }, "-"), /*#__PURE__*/




      React.createElement("button", {
        id: "four",
        onClick: this.handleNumber,
        value: "4" }, "4"), /*#__PURE__*/



      React.createElement("button", {
        id: "five",
        onClick: this.handleNumber,
        value: "5" }, "5"), /*#__PURE__*/



      React.createElement("button", {
        id: "six",
        onClick: this.handleNumber,
        value: "6" }, "6"), /*#__PURE__*/



      React.createElement("button", {
        id: "add",
        onClick: this.handleOperator,
        value: "+" }, "+"), /*#__PURE__*/



      React.createElement("button", {
        id: "one",
        onClick: this.handleNumber,
        value: "1" }, "1"), /*#__PURE__*/



      React.createElement("button", {
        id: "two",
        onClick: this.handleNumber,
        value: "2" }, "2"), /*#__PURE__*/



      React.createElement("button", {
        id: "three",
        onClick: this.handleNumber,
        value: "3" }, "3"), /*#__PURE__*/



      React.createElement("button", {
        id: "equals",
        onClick: this.handleEqual }, "="), /*#__PURE__*/



      React.createElement("button", {
        id: "zero",
        onClick: this.handleNumber,
        value: "0" }, "0"), /*#__PURE__*/



      React.createElement("button", {
        id: "decimal",
        onClick: this.handleNumber,
        value: "." }, "."))));






  }}




ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("root"));