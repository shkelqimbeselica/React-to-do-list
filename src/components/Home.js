import React, { Component } from "react";
import Board from "../components/Board";
import Header from "../components/Header";
import Modal from "../components/Modal";
import CreateBoard from "./CreateBoard";

import fire, { database } from "../config/Firebase";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { boards: [0], showModal: false, user: null };
    this.boardsRef = React.createRef();
    this.containerRef = React.createRef();
  }

  addBoard = () => {
    this.setState({ showModal: true }, () => {
      this.containerRef.current.style.filter = "blur(8px)";
    });
  };

  getNumberOfBoards = () => {
    var userId = fire.auth().currentUser.uid;
    return fire
      .database()
      .ref("/users/" + userId)
      .once("value")
      .then(function (snapshot) {
        const boards = snapshot.val().numberOfBoards;
        console.log("num of boards: ", boards);

        return boards;
      });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      this.setState({ user: this.props.user });
    }
    // this.setState(prevState => ({ boards: prevState.boards }, () => {
    //   console.log(this.state.boards);
    // }));
  }

  componentDidMount() {
    setTimeout(() => {
      this.getNumberOfBoards().then((res) => {
        console.log("res: ", res);
        console.log(this.state.boards);
        for (let i = 1; i < res; i++) {
          this.setState(
            (prevState) => {
              return {
                boards: prevState.boards.concat(i),
              };
            },
            () => {}
          );
        }
      });
    }, 5000); // QITU KAM MBET
  }

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

          <div className="scrollable">
            <div className="boards" ref={this.boardsRef} style={style.boards}>
              {this.state.boards.map((board, index) => {
                return (
                  <Board
                    user={this.state.user}
                    numberOfBoards={this.state.boards.length}
                    key={index}
                    title={this.state.boardTitle}
                    id={Date.now()}
                  />
                );
              })}
            </div>
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
    marginTop: "8px",
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
    height: "calc(100vh - 174px)",
    width: "calc(100% - 32px)",
    margin: "auto",
    display: "flex",
    alignItems: "flex-start",
    overflowX: "scroll",
    whiteSpace: "nowrap",
  },
};

export default Home;
