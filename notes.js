const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    const note = {
      title: title,
      body: body,
    };

    notes.push(note);

    saveNotes(notes);
    console.log(chalk.green.inverse("Note added successfully."));
  } else {
    console.log(chalk.red.inverse("Title already taken!"));
  }
};

const removeNote = (title) => {
  let notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.yellow.inverse("Your list is empty!"));
    return 0;
  }

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed successfully."));
  } else {
    console.log(chalk.red.inverse("The target note not found!"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.yellow.inverse("Your list is empty!"));
    return 0;
  }

  const targetNote = notes.find((note) => note.title === title);

  if (targetNote) {
      console.log(chalk.blue(`title: ${targetNote.title} || body: ${targetNote.body}`));
  } else {
      console.log(chalk.red.inverse("Note not found!"))
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.yellow.inverse("Your list is empty!"));
    return 0;
  }
  notes.forEach((note) =>
    console.log(
      chalk.blue(
        `${
          notes.indexOf((notesNode) => notes.title === note.title) + 2
        }- title: ${note.title} || body: ${note.body}`
      )
    )
  );
};

const loadNotes = () => {
  try {
    const rawData = fs.readFileSync("notes.json");
    const dataJSON = rawData.toString();
    const notes = JSON.parse(dataJSON);
    return notes;
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
