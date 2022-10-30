import "./App.css";

function App() {

  const handleChange = (id) => {
    document.getElementById("changeColor").style.backgroundColor = id;
  };

  return (
    <div
      style={{ height: "100vh" }}
      id="changeColor"
    >
      <div className="border border-black w-25 m-auto">
      <h3 className="text-dark">Background Color Change</h3>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="red"
          name="color"
          onClick={(e) => {
            handleChange(e.target.id);
          }}
        />
        <label className="form-check-label" htmlFor="red">Red</label>
        </div>

        <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="green"
          name="color"
          onClick={(e) => {
            handleChange(e.target.id);
          }}
        />
        <label className="form-check-label" htmlFor="green">Green</label>
        </div>

        <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="blue"
          name="color"
          onClick={(e) => {
            handleChange(e.target.id);
          }}
        />
        <label className="form-check-label" htmlFor="blue">Blue</label>
        
        </div>
      </div>
    </div>
  );
}

export default App;
