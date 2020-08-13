import React, { Component } from "react";

const Plus = (props) => {
  if (props.color === "black") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{
          enableBackground: "new 0 0 512 512",
          transition: "all 250ms ease-in-out",
        }}
        // xml:space="preserve"
        height={props.height}
        width={props.width}
      >
        <g>
          <g>
            <g>
              <path
                d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                data-original="#000000"
                className="active-path"
                data-old_color="#000000"
                fill="#000000"
              />
            </g>
          </g>
        </g>{" "}
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      height={props.height}
      width={props.width}
      viewBox="0 0 512 512"
      style={{
        enableBackground: "new 0 0 512 512",
        transition: "all 250ms ease-in-out",
      }}
    >
      <g>
        <g>
          <g>
            <path
              d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
              data-original="#000000"
              className="active-path"
              data-old_color="#000000"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </g>{" "}
    </svg>
  );
};

export default Plus;
