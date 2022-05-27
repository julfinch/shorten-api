import { useEffect, useState } from "react";
import ShortenerStyles from "./ShortenerStyles.css";
import bgDesktop from "../../assets/bg-shorten-desktop.svg";
import bgMobile from "../../assets/bg-shorten-mobile.svg";
import Links from "../links/Links";

const getLocalStorage = () => {
  let links = localStorage.getItem("links");
  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

const Shortener = () => {
  const [text, setText] = useState("");
  const [links, setLinks] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      document.querySelector(".form-error").innerText = "Please add a link";
    } else {
      document.querySelector(".form-error").innerText = "";
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
        setLinks([data.result, ...links]);
        setText("");
      };
      shortenLink();
    }
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <>
      <section className="shortener-section">
        <div className="shortener">
          <picture>
            <source media="max-width: 768px" srcSet={bgMobile} />
            <img src={bgDesktop} alt="" />
          </picture>

          <form className="form" onSubmit={handleSubmit}>
            <div className="content">
              <input
                type="url"
                value={text}
                className="input-url"
                placeholder="Shorten a link here..."
                onChange={(e) => setText(e.target.value)}
              />
              <p className="form-error"></p>
              <button
                className="submit-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Shorten It!
              </button>
            </div>
          </form>
        </div>
        <Links sendlinks={links} />
      </section>
    </>
  );
};

export default Shortener;
