import React from "react";
import { createRoot } from "react-dom/client";

// function App() {
//   return (
//     <div>
//       <h1>hello! ALL good to see u all again</h1>
//     </div>
//   );
// }
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit google site",
};
const areactElemet = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Visit google site"
);

// const AnotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

createRoot(document.getElementById("root")).render(areactElemet);
