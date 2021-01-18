import styled from 'styled-components'

export const ImageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const GridContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(50px, auto);
`