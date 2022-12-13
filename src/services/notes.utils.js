import { firestore } from 'services/firebase.utils';

const NotesUtils = {
  async delete(id) {
    await firestore.collection('notes').doc(id).delete();
  },

  async create() {
    await firestore.collection('notes').add({
      title: 'New note',
      body: 'Content',
      createdAt: new Date(),
    });
  },

  async index() {
    const data = [];
    const collection = await firestore
      .collection('notes')
      .orderBy('createdAt', 'desc')
      .get();
    collection.forEach((doc) => {
      const obj = doc.data();
      obj.id = doc.id;
      data.push(obj);
    });
    return data;
  },
};

export default NotesUtils;
