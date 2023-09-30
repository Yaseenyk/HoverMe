import { useState } from 'react';
import './App.css';
import ToolTip from './component/ToolTip';

function App() {
  const [visible, setVisible] = useState(false);
  const showToolTip = () => {
    setVisible(true);
  };

  const hideToolTip = () => {
    setVisible(false);
  };
  const text = 'Thanks for Hovering! I\'m a tooltip'
  return (
    <div className="App">
      <span className='Hover'
     onMouseEnter={showToolTip}
     onMouseLeave={hideToolTip}
     >Hover Me!</span>
     <ToolTip  text={text} visible={visible}/>
     
    </div>
  );
}

export default App;
