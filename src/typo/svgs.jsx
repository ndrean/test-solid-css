import { css } from "solid-styled-components";

export function gitHubSVG(width) {
  return (props) => {
    const size = () => props?.size || "40px";
    const color = () => props?.color || "black";

    return (
      <svg
        // fill="currentColor"
        fill={color()}
        stroke-width="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={size()}
        width={size()}
        style="overflow: visible;"
        role="img"
        {...props}
      >
        <path
          fill-rule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  };
}

export function hamburgerSVG(context) {
  return (props) => {
    const size = () => props?.size || "40px";
    const color = () => props?.color || "black";
    return (
      <svg
        id="burger-icon"
        version="1.1"
        viewBox="0 0 32 32"
        width={size()}
        height={size()}
        role="img"
        {...props}
      >
        <path
          fill={color()}
          d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
        />
      </svg>
    );
  };
}

export function tickSVG(context) {
  return (props) => {
    const size = () => props.size || "40px";
    const color1 = () => props.color1 || "black";
    const color2 = () => props.color2 || "white";

    return (
      <svg
        width={size()}
        height={size()}
        viewBox="0 0 24 24"
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          opacity="1"
          d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
          fill={color1()}
        />
        <path
          d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
          fill={color2()}
        />
      </svg>
    );
  };
}

export function cheersSVG(context) {
  return (props) => {
    const size = () => props?.size || "40px";
    const color = () => props?.color || "black";

    return (
      <svg
        width={size()}
        height={size()}
        viewBox="0 0 1024 1024"
        class="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
      >
        <path
          d="M513 102.1c-6.1 0-11-4.9-11-11v-59c0-6.1 4.9-11 11-11s11 4.9 11 11v59.1c0 6-4.9 10.9-11 10.9zM459.6 111.8c-4.3 0-8.3-2.5-10.1-6.6L426.1 51c-2.4-5.6 0.1-12.1 5.7-14.5 5.6-2.4 12.1 0.1 14.5 5.7l23.5 54.2c2.4 5.6-0.1 12.1-5.7 14.5-1.5 0.6-3 0.9-4.5 0.9zM566.4 111.8c-1.5 0-2.9-0.3-4.4-0.9-5.6-2.4-8.1-8.9-5.7-14.5l23.5-54.2c2.4-5.6 8.9-8.1 14.5-5.7 5.6 2.4 8.1 8.9 5.7 14.5l-23.5 54.2c-1.8 4.1-5.9 6.6-10.1 6.6zM298.9 1005.4c-1 0-2-0.1-3.1-0.4-39.1-11.3-71.6-37.4-91.3-73.3-19.8-35.9-24.4-77.2-13.1-116.4l54.2-186.8c1.7-5.8 7.8-9.2 13.6-7.5 5.8 1.7 9.2 7.8 7.5 13.6l-54.2 186.8c-9.7 33.5-5.7 68.9 11.2 99.6 16.9 30.8 44.7 53.1 78.2 62.8 5.8 1.7 9.2 7.8 7.5 13.6-1.3 4.9-5.7 8-10.5 8z"
          fill="#86878E"
        />
        <path
          d="M65.5 931.9c-14.2 0-28.5-2-42.5-6.1-5.8-1.7-9.2-7.8-7.5-13.6 1.7-5.8 7.8-9.2 13.6-7.5 33.5 9.7 68.9 5.7 99.6-11.2 30.8-16.9 53.1-44.7 62.8-78.2l54.2-186.8c1.7-5.8 7.8-9.2 13.6-7.5 5.8 1.7 9.2 7.8 7.5 13.6l-54.2 186.8c-11.3 39.1-37.4 71.6-73.3 91.3-23 12.7-48.3 19.2-73.8 19.2z"
          fill="#86878E"
        />
        <path
          d="M298.9 1005.4c-1 0-2-0.1-3.1-0.4L22.9 925.8c-5.8-1.7-9.2-7.8-7.5-13.6 1.7-5.8 7.8-9.2 13.6-7.5l273 79.1c5.8 1.7 9.2 7.8 7.5 13.6-1.4 4.9-5.8 8-10.6 8z"
          fill="#86878E"
        />
        <path
          d="M193.2 346.8l-48.8 142.9c-26.8 79.3 17.9 165 98.3 188.4 80.4 23.3 164.1-25.2 183.8-106.5l35.2-146.8-268.5-78z"
          fill="#A5328F"
        />
        <path
          d="M284 694.9c-14.8 0-29.7-2.1-44.3-6.4-41.8-12.1-75.9-40.1-96.1-78.6-20.1-38.6-23.6-82.6-9.6-123.8l52.2-152.8L474.9 417l-37.6 157c-10.3 42.3-36.7 77.7-74.3 99.5-24.6 14.2-51.6 21.4-79 21.4z m-83.8-334.6l-45.4 132.9c-12 35.5-9.1 73.3 8.3 106.5 17.3 33.2 46.7 57.3 82.7 67.7 36 10.4 73.7 5.8 106.1-13 32.4-18.8 55.1-49.2 64-85.6l32.7-136.6-248.4-71.9z"
          fill="#680946"
        />
        <path
          d="M284 694.9c-14.8 0-29.7-2.1-44.3-6.4-41.8-12.1-75.9-40.1-96.1-78.6S120 527.4 134 486.1l123.3-361 268.9 78L437.3 574c-10.3 42.3-36.7 77.7-74.3 99.5-24.6 14.2-51.6 21.4-79 21.4z m-12.7-542.7l-116.5 341c-12 35.5-9.1 73.3 8.3 106.5 17.3 33.2 46.7 57.3 82.7 67.7l-3.1 10.6 3.1-10.6c36 10.4 73.7 5.8 106.1-13 32.4-18.8 55.1-49.2 64-85.6l84-350.5-228.6-66.1z"
          fill="#680946"
        />
        <path
          d="M730.1 1005l-6.1-21.1c33.5-9.7 61.2-32 78.2-62.8 16.9-30.8 20.9-66.2 11.2-99.6l-54.2-186.8c-1.7-5.8 1.7-11.9 7.5-13.6 5.8-1.7 11.9 1.7 13.6 7.5l54.2 186.8c11.3 39.1 6.7 80.5-13.1 116.4-19.7 35.8-52.2 61.8-91.3 73.2z"
          fill="#86878E"
        />
        <path
          d="M960.5 931.9c-25.5 0-50.8-6.5-73.8-19.1-35.9-19.8-61.9-52.2-73.3-91.3l-54.2-186.8c-1.7-5.8 1.7-11.9 7.5-13.6 5.8-1.7 11.9 1.7 13.6 7.5l54.2 186.8c9.7 33.5 32 61.2 62.8 78.2 30.8 16.9 66.2 20.9 99.6 11.2 5.8-1.7 11.9 1.7 13.6 7.5 1.7 5.8-1.7 11.9-7.5 13.6-13.9 4-28.3 6-42.5 6z"
          fill="#86878E"
        />
        <path
          d="M727.1 1005.4c-4.8 0-9.2-3.1-10.6-7.9-1.7-5.8 1.7-11.9 7.5-13.6l272.9-79.1c5.8-1.7 11.9 1.7 13.6 7.5 1.7 5.8-1.7 11.9-7.5 13.6L730.1 1005c-1 0.3-2 0.4-3 0.4z"
          fill="#86878E"
        />
        <path
          d="M832.8 346.8l48.8 142.9c26.8 79.3-17.9 165-98.3 188.4-80.4 23.3-164.1-25.2-183.8-106.5l-35.2-146.8 268.5-78z"
          fill="#A5328F"
        />
        <path
          d="M742 694.9c-27.4 0-54.5-7.2-78.9-21.4-37.7-21.8-64.1-57.2-74.3-99.5l-37.7-157 288.7-83.7L892 486.1c14 41.3 10.6 85.2-9.6 123.8-20.1 38.6-54.3 66.5-96.1 78.6-14.6 4.3-29.5 6.4-44.3 6.4zM577.4 432.3l32.7 136.6c8.8 36.4 31.6 66.8 64 85.6 32.4 18.8 70.1 23.4 106.1 13 36-10.4 65.4-34.5 82.7-67.7 17.3-33.2 20.3-71.1 8.3-106.6l-45.4-132.9-248.4 72z"
          fill="#680946"
        />
        <path
          d="M742 694.9c-27.4 0-54.4-7.2-78.9-21.4-37.7-21.8-64.1-57.2-74.3-99.5l-88.9-370.9 268.9-78 123.2 361c14 41.3 10.6 85.2-9.6 123.8-20.1 38.6-54.3 66.5-96.1 78.6l-3.1-10.6 3.1 10.6c-14.6 4.3-29.5 6.4-44.3 6.4zM526.1 218.4l84 350.5c8.8 36.4 31.6 66.8 64 85.6 32.4 18.8 70.1 23.4 106.1 13 36-10.4 65.4-34.5 82.7-67.7 17.3-33.2 20.3-71.1 8.3-106.6l-116.5-341-228.6 66.2z"
          fill="#680946"
        />
      </svg>
    );
  };
}
