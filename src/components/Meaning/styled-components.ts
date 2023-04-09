import styled from "styled-components";

export const MeaningEl = styled.div``;

export const Phonetics = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
        margin-bottom: 40px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 32px;
    }
    }
`;

export const Writing = styled.div``;

export const Word = styled.h1`
    font-size: var(--fs-hl);
    line-height: var(--lh-hl);
    font-weight: var(--fw-bold);

    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media(max-width: 425px) {
        font-size: var(--fs-hml);
        line-height: var(--lh-hml);
    }
`;

export const Phonetic = styled.div`
    font-size: var(--fs-hm);
    line-height: var(--lh-hm);
    font-weight: var(--fw-regular);
    color: var( --accent);

    @media(max-width: 425px) {
        font-size: var(--fs-bm);
        line-height: var(--lh-bm);
    }
`;

export const ButtonPlay = styled.button<{ iconPlay: string, iconPlayHover: string }>`
    width: 75px;
    height: 75px;
    background: url(${props => props.iconPlay}) 0 0 / 100% 100% ;

    transition: all 0.15s ease 0s;
    
    &:hover {
        background: url(${props => props.iconPlayHover}) 0 0 / 100% 100%;
    }

    &:active {
        transform: scale(0.95)
    }

    @media(max-width: 425px) {
        width: 48px;
        height: 48px;
    }
`

export const PartOfSpeech = styled.div`
    &:not(:last-child) {
        margin-bottom: 40px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 32px;
        }
    }
`;

export const PartOfSpeechTitle = styled.div`
    font-size: var(--fs-hm);
    line-height: var(--lh-hm);
    font-weight: var(--fw-bold);

    display: flex;
    align-items: center;
    column-gap: 20px;

    &:not(:last-child) {
        margin-bottom: 40px;
    }

    @media(max-width: 425px) {
        font-size: var(--fs-bm);
        line-height: var(--lh-bm);

        column-gap: 16px;

        &:not(:last-child) {
        margin-bottom: 31px;
        }
    }
`;

export const Line = styled.div`
    flex: 1 1 50%;
    height: 1px;
    background-color: var(--color-line);
`;

export const MeaningWrapper = styled.div`
    &:not(:last-child) {
        margin-bottom: 64px;
    }

    @media(max-width: 425px) {
        &:not(:last-child) {
        margin-bottom: 24px;
        }
    }
`;

export const MeaningTitle = styled.div`
    font-size: var(--fs-hs);
    line-height: var(--lh-hs);
    font-weight: var(--fw-regular);
    color: var(--secondary);

    &:not(:last-child) {
        margin-bottom: 25px;
    }

    @media(max-width: 425px) {
        font-size: var(--fs-bms);
        line-height: var(--lh-bms);

        &:not(:last-child) {
        margin-bottom: 17px;
        }
    }
`;

export const Definitions = styled.ul`
`;

export const DefinitionsItem = styled.li`
    position: relative;
    padding-left: 47px;

    @media(max-width: 425px) {
        padding-left: 25px;
    }

    &::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--accent);

        position: absolute;
        left: 22px;
        top: 10px;

        @media(max-width: 425px) {
            left: 0px;
        }
    }

    &:not(:last-child) {
        margin-bottom: 13px;
    }
`;

export const Definition = styled.p`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);
    font-weight: var(--fw-regular);

    &:not(:last-child) {
        margin-bottom: 13px;
    }

    @media(max-width: 425px) {
        font-size: 15px;
    }
`;

export const VariantsWrapper = styled.div`
    display: flex;
    column-gap: 22px;

    &:not(:last-child) {
        margin-bottom: 25px;
    }

    @media(max-width: 425px) {
        column-gap: 24px;
    }
`;

export const VariantsTitle = styled.div`
    font-size: var(--fs-hs);
    line-height: var(--lh-hs);
    font-weight: var(--fw-regular);
    color: var(--secondary);

    @media(max-width: 425px) {
        font-size: var(--fs-bms);
        line-height: var(--lh-bms);
    }
`;

export const VariantsWords = styled.div`
    font-size: var(--fs-hs);
    line-height: var(--lh-hs);
    font-weight: var(--fw-bold);
    color: var(--accent);

    @media(max-width: 425px) {
        font-size: var(--fs-bms);
        line-height: var(--lh-bms);
    }
`;

export const VariantsLink = styled.p`
    display: inline-block;
    cursor: pointer;
    position: relative;

    margin-right: 6px;

    &:hover {
        &::before {
            content: '';
            width: 95%;
            height: 1px;
            background: var(--accent);

            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
`;

export const Example = styled.p`
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);
    font-weight: var(--fw-regular);

    color: var(--secondary);

    @media(max-width: 425px) {
        font-size: 15px;
        line-height: var(--lh-bms);
    }
`;

export const Source = styled.div`
    border-top: 1px solid var(--color-line);
    padding: 20px 0px 20px;

    @media(max-width: 425px) {
        padding: 24px 0px 20px
    }
`;

export const SourceWrapper = styled.div`
    display: flex;
    column-gap: 20px;
    row-gap: 8px;
    flex-wrap: wrap;
`;

export const SourceTitle = styled.div`
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    font-weight: var(--fw-regular);
    color: var(--secondary);
`;

export const SourceUrlsUl = styled.ul`
    font-size: var(--fs-bs);
    line-height: var(--lh-bs);
    font-weight: var(--fw-regular);
`;

export const SourceUrlsLi = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;

    &:not(:last-child) {
        margin-bottom: 5px;
    }
`;

export const Url = styled.a`
    color: var( --color-text);
`;