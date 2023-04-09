import { motion } from "framer-motion";
import styled from "styled-components";

export const SearchEl = styled.div`
    &:not(:last-child) {
        margin-bottom: 45px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 24px;
        }
    }
`;

export const SearchForm = styled.form`
    position: relative;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

export const Input = styled.input.attrs(props => ({
    placeholder: 'Search for any word…',
})) <{ alert: boolean }>`
    width: 100%;
    background: var(--colors-bg-input);
    border-radius: 16px;
    padding: 20px 64px 20px 24px;
    outline: 1px solid ${props => props.alert ? 'none' : 'var(--alert)'};

    font-size: var(--fs-hs);
    line-height: var(--lh-hs);
    font-weight: var(--fw-bold);

    &::placeholder {
        opacity: 0.25;
    }

    &:focus {
        outline: 1px solid ${props => props.alert ? 'var(--accent)' : 'var(--alert)'};
    }

    @media(max-width: 425px) {
        font-size: var(--fs-bms);
        line-height: var(--lh-bms);

        padding: 15px 64px 15px 24px;
    }
`

export const SearchIcon = styled.img`
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
`
export const AlertMessage = styled(motion.div)`
    font-size: var(--fs-hs);
    line-height: var(--lh-hs);

    color: var(--alert);
`

