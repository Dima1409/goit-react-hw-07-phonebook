import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import ContactsForm from 'components/Form';
import ThemeBtn from 'components/ThemeBtn';
import ListContact from 'components/ListContact';
import SearchInput from 'components/SearchInput';
import {
  Container,
  ContainerList,
  ListTitle,
  FormTitle,
  ListIsEmpty,
  Global,
  Heading,
} from './App.styled';

const App = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <Global />
          <Heading>
            <FormTitle>Phonebook</FormTitle>
            <ThemeBtn />
          </Heading>

          <ContactsForm></ContactsForm>
          <ContainerList>
            <ListTitle>Contacts</ListTitle>
            {fetchContacts().length > 0 ? (
              <SearchInput></SearchInput>
            ) : (
              <ListIsEmpty>
                Your list is empty... Please add a new contact
              </ListIsEmpty>
            )}
            <ListContact></ListContact>
          </ContainerList>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default App;
