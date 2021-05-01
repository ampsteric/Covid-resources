import React, { Component } from "react";
import AppMarkdown from "./README.md";
import Res1 from "./Resources/Res1/Index";
import Res2 from "./Resources/Res2/Index";
import ReactMarkdown from "react-markdown";

class App extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div>
        <ReactMarkdown children={markdown} />
        <Res1 />
        <Res2 />
      </div>
    );
  }
}

export default App;
