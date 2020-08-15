import React, { PureComponent } from "react";

class RemainingTasks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p style={style.paragraph}>
        Remaining tasks:{" "}
        <div style={style.bgTasks} className="bgTasks">
          <span style={style.remainingTask}>{this.props.tasks}</span>
        </div>
      </p>
    );
  }
}

const style = {
  paragraph: {
    marginLeft: "auto",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
  },
  bgTasks: {
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    marginLeft: "8px",
    height: "24px",
    width: "24px",
    padding: "8px",
    borderRadius: "6px",
    backgroundColor: "#F8F8FA",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  remainingTask: {
    position: "absolute",
  },
};

export default RemainingTasks;
