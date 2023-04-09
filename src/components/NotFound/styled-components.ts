import styled from "styled-components";

export const NotFoundEl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding-top: 87px;
`;

export const Smile = styled.img`
    &:not(:last-child) {
        margin-bottom: 44px;
    }
`;

export const Title = styled.h2` 
    font-size: var(--fs-hs);
    line-height: var(--lh-hs);
    font-weight: var(--fw-bold);

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const Text = styled.p`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);
    font-weight: var(--fw-regular);
    color: var(--secondary)
`;