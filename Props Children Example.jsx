import React from "react";

function Card(props) {
  const style = {
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
  };

  return <div style={style}>{props.children}</div>;
}

export default Card;
import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card>
        <h2>This is inside Card 1</h2>
        <p>Props.children allows flexible wrapping.</p>
      </Card>

      <Card>
        <button>Click Me</button>
      </Card>
    </div>
  );
}

export default App;
