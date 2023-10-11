import Bug from './Bug';
import Circle from './Circle';
import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import SassImage from './SassImage';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponents />
      <hr />

      <SassComponent />
      <hr />

      <StyledComponent />

      {/* 실습 */}
      <Bug />
      <hr />

      <Circle />
      <hr />

      <SassImage />
    </div>
  );
}

export default App;
