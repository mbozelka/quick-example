
const ButtonFunctionality = (props) => {
  return (
      <div onClick={props.onClick}>
          {props.children}
      </div>
  );
};

export default ButtonFunctionality;