import styled from 'styled-components'

export const GridContainer = styled.div`
    margin-top: ${props => props.theme.navbarHeight};
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);

    ${props => props.theme.down(props.theme.breakpoints.sm)} {
        grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
        margin-top: 65px;
    }

`

