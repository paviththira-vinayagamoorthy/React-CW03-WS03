import { useState } from "react";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Conditional Rendering</h1>

        <button onClick={toggleContent}>
          Toggle Content
        </button>

        {showContent ? (
          <div className="content">
            <h2> Welcome!</h2>

            <p>
              This content is displayed using conditional
              rendering in React.
            </p>

            <p>
              Click the button again to hide this content.
            </p>
          </div>
        ) : (
          <p className="hidden-message">
            Content is currently hidden.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;