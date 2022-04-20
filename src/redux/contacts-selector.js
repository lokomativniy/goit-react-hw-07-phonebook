export const getItems = state =>
  state.contactsApi.queries['fetchContacts(undefined)']?.data;
export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
