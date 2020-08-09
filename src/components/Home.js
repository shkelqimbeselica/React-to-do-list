import React, { Component } from "react";
import fire, { database } from "../config/Firebase";
import Board from "../components/Board";
import CreateBoard from "./CreateBoard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = { boards: [0] };
    this.boardsRef = React.createRef();
  }

  logout() {
    fire.auth().signOut();
  }

  addBoard = () => {
    this.setState(
      (prevState) => ({
        boards: [...prevState.boards, parseInt(prevState.boards) + 1],
        // display: "inline-flex",
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
        <div style={style.container}>
          <header style={style.header}>
            {this.props.username !== null && (
              <h1>Welcome {this.props.username}</h1>
            )}
            <button onClick={this.logout} style={style.button}>
              Log Out
            </button>
          </header>
          <div
            className="boards"
            ref={this.boardsRef}
            style={{
              height: "100vh",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              overflowX: "auto",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            {this.state.boards.map((board) => {
              return <Board />;
            })}
            <CreateBoard addBoard={this.addBoard} />
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    height: "100%",
  },
  header: {
    // display: "flex",
    // justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0,
  },
};

export default Home;
