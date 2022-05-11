import StyledButton from "./Button.styled";

const Button = ({ data, styles, className }) => {
  console.log(styles);
  return (
    <StyledButton styles={styles} className={className}>
      {data.name}
    </StyledButton>
  );
};

export default Button;
