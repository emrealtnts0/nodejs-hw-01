import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';


const generateContacts = async (count) => {
  const contacts = await readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
  console.log(`Successfully added ${count} contacts`);
};

generateContacts(5); // 5 - number of contacts to generate
