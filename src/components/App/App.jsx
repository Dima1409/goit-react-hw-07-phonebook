import { ThemeProvider } from 'styled-components';
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
import { selectTheme, selectLoading, selectError } from 'redux/selectors';

const App = () => {
  const theme = useSelector(selectTheme);
  const loading = useSelector(selectLoading);
  const isErr = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <Global />
          <ScrollToTop/>
          <Heading>
            <FormTitle>Phonebook</FormTitle>
            <ThemeBtn />
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
             {loading && <Loader/>}
             {isErr && <div style={{color:'red'}}>loading error!</div>}
            <ListContact></ListContact>
          </ContainerList>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default App;
