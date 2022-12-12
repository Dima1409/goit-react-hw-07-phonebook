const selectContacts = state => state.contacts.items;

const selectLoading = state => state.contacts.isLoading;

const selectByFilter = state => state.filter.filter;

// const selectTheme = state => state.theme;

const selectError = state => state.contacts.error;

export {selectContacts, selectByFilter, selectLoading, selectError};