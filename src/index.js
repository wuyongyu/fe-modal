import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "title",
      content: "content",
      visible: false
    };
  }
  openModal = () => {
    this.setState({
      visible: true
    });
  };
  onOk = () => {
    this.setState({
      visible: false
    });
  };
  onCancel = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const { title, content, visible } = this.state;
    return (
      <div className="App">
        <div onClick={this.openModal}>开启弹窗</div>
        <Modal
          visible={visible}
          title={title}
          content={content}
          width={"600px"}
          height={"600px"}
          onOk={this.onOk}
          opacity={0.66}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
