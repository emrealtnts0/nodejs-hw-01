import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    if (error.code === 'Error') {
      return [];
    }
    console.log(error);
  }
};
