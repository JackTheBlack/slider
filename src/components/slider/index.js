import React, { useState } from "react";
import { DatePicker, message, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";

function Slider(props) {
  const [i, setI] = useState(0);

  return (
    <div className="component">
      <Button
        type="Primary"
        data-testid="button-restart"
        disabled={i === 0}
        onClick={() => setI(0)}
      >
        Restart
      </Button>
      <Button
        type="Primary"
        data-testid="button-prev"
        disabled={i === 0}
        onClick={() => setI(i - 1)}
      >
        Previous
      </Button>
      <Button
        type="Primary"
        data-testid="button-next"
        disabled={i === props.slides.length}
        onClick={() => setI(i + 1)}
      >
        Next
      </Button>
      <div>
        <h1 data-testid="title">{props.slides[i] && props.slides[i].title}</h1>
        <p data-testid="text">{props.slides[i] && props.slides[i].text}</p>
      </div>
    </div>
  );
}
export default Slider;
