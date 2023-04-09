import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { AnimatePresence } from 'framer-motion';
//==========================================
import {
    HeaderEl, ControlUnit,
    FontButton, Popup,
    PopupItem, VerticalLine,
    ThemeBlock, Switch, PopupContainer
} from './styled-components';
//==========================================
import logo from '../../assets/images/logo.svg';
import arrow from '../../assets/images/icon-arrow-down.svg';
import { ReactComponent as Moon } from '../../assets/images/icon-moon.svg';
import { selectTheme, selectFont } from '../../redux/themeSlice/slice';
import { setTheme, setFont } from '../../redux/themeSlice/slice';
//==========================================

const fontsFamily = [
    { text: 'Sans Serif', font: '--family-ss' },
    { text: 'Serif', font: '--family-sf' },
    { text: 'Mono', font: '--family-mn' }
];

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const font = useSelector(selectFont);
    const [isVisible, setIsVisble] = useState(false);
    const fontRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        document.body.setAttribute('data-font', font);
    }, [theme, font])

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (fontRef.current && !e.composedPath().includes(fontRef.current)) {
                setIsVisble(false);
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
        <HeaderEl>
            <img src={logo} alt="logo" />

            <ControlUnit>
                <FontButton
                    ref={fontRef}
                    onClick={() => { setIsVisble(isVisible === false ? true : false) }}>
                    {font}
                    <img src={arrow} alt={arrow} />

                    <AnimatePresence>
                        {isVisible && (
                            <Popup
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{
                                    duration: 0.15,
                                }}
                            >
                                <PopupContainer>
                                    {fontsFamily.map(item => (
                                        <PopupItem
                                            key={item.text}
                                            font={item.font}
                                            onClick={() => dispatch(setFont(item.text))}
                                        >{item.text}</PopupItem>
                                    ))}
                                </PopupContainer>
                            </Popup>
                        )}
                    </AnimatePresence>
                </FontButton>

                <VerticalLine></VerticalLine>

                <ThemeBlock toggle={theme === 'dark'}>
                    <Switch
                        toggle={theme === 'dark'}
                        onClick={() => { dispatch(setTheme(theme === 'light' ? 'dark' : 'light')) }}>
                    </Switch>
                    <Moon />
                </ThemeBlock>
            </ControlUnit>
        </HeaderEl>
    );
}

export default Header;