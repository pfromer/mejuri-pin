import { ButtonContainer, TextContainer, IconContainer } from './buttonStyles'
import { FaThumbtack } from "react-icons/fa";

const Button = (props) => (

    <ButtonContainer onClick={props.onClick}>
        <IconContainer>
            <FaThumbtack />
        </IconContainer>
        <TextContainer>
            Save
        </TextContainer>
    </ButtonContainer>


)

export default Button;