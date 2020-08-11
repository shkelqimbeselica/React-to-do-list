import React, { Component } from "react";
import Board from "../components/Board";
import Header from "../components/Header";
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

  handleModalClick = (obj) => {
    this.containerRef.current.style.filter = "blur(0px)";

    if (obj.action === "create") {
      this.setState(
        (prevState) => ({
          boards: [...prevState.boards, parseInt(prevState.boards) + 1],
          showModal: false,
          boardTitle: obj.value,
        }),
        () => {
          this.boardsRef.current.lastChild.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }
      );
    } else {
      this.setState({ showModal: false });
    }
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <div
          style={style.container}
          className="exclude-modal"
          ref={this.containerRef}
        >
          <Header username={this.props.username} />
          <div className="static" style={style.static}>
            <h3 style={style.currentLists}>Current lists</h3>
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
  static: {
    height: "92px",
    display: "flex",
    alignItems: "center",
    width: "calc(100% - 80px)",
    margin: "auto",
  },
  currentLists: {
    color: "#2F313D",
    fontFamily: "Source Sans Pro Bold",
    fontSize: "32px",
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
    alignItems: "flex-start",
    overflowX: "auto",
    whiteSpace: "nowrap",
    width: "100%",
  },
};

export default Home;
