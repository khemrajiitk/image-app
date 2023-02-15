import './App.css';
import { ThreeGirdImageComponet } from './component/three-grid-image.component';
import { TwoGirdImageComponet } from './component/two-grid-image.component';

function App() {
  return (
    <div className="App">
      <h5>Two Image Grid</h5>
      <TwoGirdImageComponet />
      <h5>Three Image Grid</h5>
      <ThreeGirdImageComponet />
    </div>
  );
}

export default App;
