import styled , { ThemeProvider }from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactsForm from 'components/Form';
import Loader from 'components/Loader';
import ThemeBtn from 'components/ThemeBtn';
import ListContact from 'components/ListContact';
import SearchInput from 'components/SearchInput';
import ScrollToTop from 'components/Helpers/ScrollToTop';
import {
  Container,
  ContainerList,
  ListTitle,
  FormTitle,
  ListIsEmpty,
  Global,
  Heading,
} from './App.styled';
import { selectLoading, selectError } from 'redux/selectors';
import { useState } from 'react';

const StyledApp = styled.div`
min-height: 100vh;
background-color: ${(props)=>props.theme.body};
`
const lightTheme = {
  body: '#bcc2f0',
  text: '#1c1c1e',
  main: '#0385ff'
}
const darkTheme = {
  body: '#1c1c1e',
  text: '#bcc2f0',
  main: '#030309'
}

const App = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }
  const loading = useSelector(selectLoading);
  const isErr = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledApp>
      <Container>
          <Global />
          <ScrollToTop/>
          <Heading>
            <FormTitle>Phonebook</FormTitle>
            <ThemeBtn toggleTheme={toggleTheme}/>
          </Heading>
          <ContactsForm/>
          <ContainerList>
            <ListTitle>Contacts</ListTitle>
            {fetchContacts().length > 0 ? (
              <SearchInput></SearchInput>
            ) : (
              <ListIsEmpty>
                Your list is empty... Please add a new contact
              </ListIsEmpty>
            )}
             {loading && !isErr && <Loader/>}
             {isErr && <div style={{color:'red'}}>loading error!</div>}
            <ListContact></ListContact>
          </ContainerList>
      </Container>
    </StyledApp>
    </ThemeProvider>
    
  );
};

export default App;
