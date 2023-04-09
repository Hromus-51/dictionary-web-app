import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 737px;
    margin: 0 auto;

    @media(max-width: 768px) {
        max-width: 768px;
        padding: 0px 40px ;
    }

    @media(max-width: 425px) {
        max-width: 425px;
        padding: 0px 24px ;
    }
`