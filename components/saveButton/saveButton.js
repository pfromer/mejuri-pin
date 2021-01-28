import { StyledButton, TextContainer, IconContainer } from "./saveButtonStyles";
import { FaThumbtack } from "react-icons/fa";

const SaveButton = (props) => (
  <StyledButton onClick={props.onClick} rounded={props.rounded}>
    {props.showIcon && (
      <IconContainer>
        <FaThumbtack />
      </IconContainer>
    )}
    <TextContainer>Save</TextContainer>
  </StyledButton>
);

export default SaveButton;
