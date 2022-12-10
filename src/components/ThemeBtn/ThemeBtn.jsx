import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import { setDarkTheme, setDefaultTheme } from 'redux/themeSlice';
import { ModeButton, Wrapper } from './ThemeBtn.styled';
import { HiOutlineLightBulb, HiOutlineMoon } from 'react-icons/hi';
import { IconContext } from 'react-icons';

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const setDefault = () => {
    dispatch(setDefaultTheme());
  };
  const setDark = () => {
    dispatch(setDarkTheme());
  };
  return (
    <>
      {!theme.darkTheme ? (
        <ModeButton onClick={setDark}>
          <Wrapper>
            <IconContext.Provider value={{ size: '25px' }}>
              <HiOutlineLightBulb />
            </IconContext.Provider>
          </Wrapper>
        </ModeButton>
      ) : (
        <ModeButton onClick={setDefault}>
          <Wrapper>
            <IconContext.Provider value={{ size: '25px' }}>
              <HiOutlineMoon />
            </IconContext.Provider>
          </Wrapper>
        </ModeButton>
      )}
    </>
  );
};
export default ThemeBtn;
