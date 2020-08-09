import React, { Component } from "react";
import Board from "../components/Board";
import Avatar from "../components/Avatar";
import Modal from "../components/Modal";
import CreateBoard from "./CreateBoard";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { boards: [0], showModal: false };
    this.boardsRef = React.createRef();
    this.containerRef = React.createRef();
  }

  addBoard = () => {
    this.setState({ showModal: true }, () => {
      this.containerRef.current.style.filter = "blur(8px)";
    });
  };

  handleModalClick = (title) => {
    this.containerRef.current.style.filter = "blur(0px)";
    this.setState(
      (prevState) => ({
        boards: [...prevState.boards, parseInt(prevState.boards) + 1],
        showModal: false,
        boardTitle: title,
      }),
      () => {
        this.boardsRef.current.lastChild.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    );
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <div
          style={style.container}
          className="exclude-modal"
          ref={this.containerRef}
        >
          <header style={style.header}>
            <Avatar username={this.props.username} />
          </header>
          <div
            className="static"
            style={{ height: "80px", display: "flex", alignItems: "center" }}
          >
            <CreateBoard addBoard={this.addBoard} />
          </div>

          <div className="boards" ref={this.boardsRef} style={style.boards}>
            {this.state.boards.map((board) => {
              return <Board title={this.state.boardTitle} />;
            })}
          </div>
        </div>
        {this.state.showModal ? (
          <Modal handleModalClick={this.handleModalClick} />
        ) : null}
      </div>
    );
  }
}

const style = {
  container: {
    height: "100%",
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    borderBottom: "1px solid black",
    height: "64px",
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  avatar: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    border: "1px solid black",
  },
  boards: {
    height: "calc(100vh - 146px)",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    whiteSpace: "nowrap",
    width: "100%",
  },
};

export default Home;
