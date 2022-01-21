
import ButtonFunctionality from './buttonFunctionality';

const PrimaryButton = (props) => {
  
  return (
    <ButtonFunctionality onClick={props.onClick}>
        <div className="button primary-button">{ props.cta }</div>
    </ButtonFunctionality>
  );
}

export default PrimaryButton;
