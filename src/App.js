import Container from './components/Container/Container.jsx';
import Section from './components/Section/Section.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ListContact from './components/ListContact/ListContact.jsx';
import Filter from './components/Filter/Filter.jsx';
import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <Container>
        <ToastContainer autoClose={2000} />
        <Section title="Phonebook">
          <ContactForm />
          <Filter />
        </Section>
        <Section>
          <ListContact />
        </Section>
      </Container>
    );
  }
}

export default App;
