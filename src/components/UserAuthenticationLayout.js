import React, { Component, useRef } from "react";

const UserAuthenticationLayout = React.forwardRef((props, ref) => {
  return (
    <div
      className="container"
      style={{ width: props.width, height: props.height }}
    >
      <div className="owl-placeholder">
        <div class="owl" ref={ref}>
          <div class="hand"></div>
          <div class="hand hand-r"></div>
          <div class="arms">
            <div class="arm"></div>
            <div class="arm arm-r"></div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
});

export default UserAuthenticationLayout;
