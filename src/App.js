import Container from './components/Container/Container.jsx';
import Section from './components/Section/Section.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ListContact from './components/ListContact/ListContact.jsx';
import Filter from './components/Filter/Filter.jsx';

const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ListContact />
      </Section>
    </Container>
  );
};

export default App;
