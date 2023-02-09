import { useState } from "react";
import { useRef } from "react";

const AccordionItem = ({ faq }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { title, content } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        {title}
        <span className="control">{clicked ? "—" : "+"} </span>
      </button>

      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="content">{content}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
