import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="side-div-container">
        <div className="side-div"></div>
        <div className="side-div"></div>
      </div>

      <div className="center-div">
        <div class="center-circle ">
          <div class="center-circle  circle-1"></div>
          <div class="center-circle  circle-2"></div>
          <div class="center-circle  circle-3"></div>
          <div class="center-circle  circle-4"></div>
        </div>
        <div class="circle top-left"></div>
        <div class="circle top-right"></div>
        <div class="circle bottom-left"></div>
        <div class="circle bottom-right"></div>
      </div>

      <div className="side-div-container">
        <div className="side-div"></div>
        <div className="side-div"></div>
      </div>
    </div>
  );
}

export default App;
