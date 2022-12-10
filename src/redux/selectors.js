const selectContacts = state => state.contacts.items;

const selectByFilter = state => state.filter.filter;

const selectTheme = state => state.theme;

export {selectContacts, selectByFilter, selectTheme};