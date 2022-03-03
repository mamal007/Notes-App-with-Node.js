const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
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
};
