import React, { Component } from "react";
import fire, { database } from "../config/Firebase";
import Board from "../components/Board";
import CreateBoard from "./CreateBoard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.state = { boards: [0] };
  }
  logout() {
    fire.auth().signOut();
  }

  addBoard = () => {
    this.setState((prevState) => ({
      boards: [...prevState.boards, parseInt(prevState.boards) + 1],
    }));
  };

  render() {
    console.log(this.state);

    return (
      <div style={{ height: "100%" }}>
        <button onClick={this.logout}>Log Out</button>
        {this.props.username !== null && <h1>Welcome {this.props.username}</h1>}
        <div style={style.container}>
          {this.state.boards.map((board) => {
            return <Board />;
          })}
          <CreateBoard addBoard={this.addBoard} />
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 32px",
  },
};

export default Home;
