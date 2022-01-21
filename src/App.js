import './App.css';
import ButtonFunctionality from './buttons/buttonFunctionality';
import PrimaryButton from './buttons/primaryButton';
import SecondaryButton from './buttons/secondayButton';

function App() {
  
  const clickHandler = (message) => {
    alert(message);
  };

  return (
    <div className="App">
      <PrimaryButton cta="Primary Button" onClick={() => { clickHandler('Primary button') }}/>
      <SecondaryButton cta="Secondary Button" onClick={() => { clickHandler('Secondary button') }}/>
      <ButtonFunctionality onClick={() => { clickHandler('Custom button') }}>
        <div className="button custom-button">Custom button</div>
      </ButtonFunctionality>

      <div className="sub-page">
        <PrimaryButton cta="Primary Button Override" onClick={() => { clickHandler('Primary button override') }}/>
      </div>
    </div>
  );
}

export default App;
