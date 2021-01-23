import { StyledButton, TextContainer, IconContainer } from './saveButtonStyles'
import { FaThumbtack } from "react-icons/fa";

const SaveButton = (props) => (

    <StyledButton onClick={props.onClick}>
        <IconContainer>
            <FaThumbtack />
        </IconContainer>
        <TextContainer>
            Save
        </TextContainer>
    </StyledButton>


)

export default SaveButton;