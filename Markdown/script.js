marked.setOptions({
  gfm: true,
  breaks: true });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initial };


    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate(event) {
    this.setState({
      input: event.target.value });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Editor, { input: this.state.input, onChange: this.handleUpdate }), /*#__PURE__*/
      React.createElement(Preview, { input: this.state.input })));


  }}
;

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", {
      id: "editor",
      type: "text",
      value: props.input,
      onChange: props.onChange }));


};

const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", {
      id: "preview",
      dangerouslySetInnerHTML: {
        __html: marked(props.input, { renderer: renderer }) } }));



};

const initial =
`<!--Welcome to my React markdown previewer.  Change or replace text in this top editor to affect the preview below.
-->
# h1 size header
## h2 size header
**some bold text**

inline code \`<p></p>\`

\`\`\`
//code block
for (let i = 0; i < 3; i++) {
  console.log("Hello!");
}

\`\`\`

> a block quote

- list item
  - more list item
    - even more
    
[here's a link](https://www.freecodecamp.org)

![and an image](https://friconix.com/jpg/fi-xnsuxl-codeigniter.jpg)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));