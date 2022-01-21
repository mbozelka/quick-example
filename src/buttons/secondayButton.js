
import ButtonFunctionality from './buttonFunctionality';

const SecondaryButton = (props) => {
  
  return (
    <ButtonFunctionality onClick={props.onClick}>
        <div className="button secondary-button">{ props.cta }</div>
    </ButtonFunctionality>
  );
}

export default SecondaryButton;
