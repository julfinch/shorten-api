import React, { useState } from "react";
import LinksStyles from "./LinksStyles.css";

function Links(props) {
  const [copyIndex, setCopyIndex] = useState();
  const { sendlinks } = props;
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      {sendlinks.map((data, index) => {
        return (
          <div className="output-box" key={data.code}>
            <div className="output-left">
              <a href={data.original_link} className="full-url">
                {data.original_link}
              </a>
            </div>
            <div className="combined">
              <a href={data.full_short_link}>{data.full_short_link}</a>
              <button
                className="copy-button"
                onClick={() => {
                  handleCopy(data.full_short_link);
                  setCopyIndex(index);
                }}
              >
                {copyIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Links;
