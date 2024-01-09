import "./styles/app.scss";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">HTML</a>
          </li>
          <li>
            <a href="#">CSS</a>
          </li>
          <li>
            <a href="#">SASS</a>
          </li>
        </ul>
      </nav>

      <h1>Hello World</h1>

      <p className="danger">Warning! This is some text.</p>

      <button className="button-basic">Basic Button</button>
      <button className="button-report">Report Button</button>
      <button className="button-submit">Submit Button</button>
    </>
  );
}

export default App;
