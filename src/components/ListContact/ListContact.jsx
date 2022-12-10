import React from 'react';
import { List, ListItem, DeleteButton, ItemInfo, CallTo } from './ListContact.styled';
import { selectContacts, selectByFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { AiTwotoneDelete, AiOutlinePhone } from "react-icons/ai";
import { IconContext } from 'react-icons';

const ListContact = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectByFilter);
  const dispatch = useDispatch();

  const onDeleteItem = id => {
    dispatch(deleteContact(id));
  };

  const getSortContacts = () => {
    const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizedValue)
    )
  };
  const sortedContacts = getSortContacts().sort((a,b)=>a.name.localeCompare(b.name));

  return (
    <List>
      {sortedContacts.length === 0 ? (
        null
      ) : (
        sortedContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <ItemInfo>
                <span>{name}:</span>
                <span>{number}</span>
              </ItemInfo>
                 
              <IconContext.Provider value={{ size: '25px' }}>
              <CallTo href={`tel:${number}`}><AiOutlinePhone/></CallTo>
              <DeleteButton onClick={()=>onDeleteItem(id)}>
              <AiTwotoneDelete />
            </DeleteButton>
            </IconContext.Provider>
            </ListItem>
          );
        })
      )}
    </List>
  );
};

export default ListContact;
