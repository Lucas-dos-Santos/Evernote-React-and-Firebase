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

  async getAll() {
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

  async getOne(id) {
    const documentRef = await firestore.collection('notes').doc(id).get();
    const note = documentRef.data();
    note.id = documentRef.id;
    return note;
  },

  async update(note, body) {
    const title = body.replace(/(<([^>]+)>)/gi, '').slice(0, 30);
    await firestore
      .collection('notes')
      .doc(note.id)
      .set({ title, body }, { merge: true });
    const newNote = this.getOne(note.id);
    return newNote;
  },
};

export default NotesUtils;
