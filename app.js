const yargs = require("yargs");
const notes = require("./notes");

//Adding "add" command
yargs.command({
  command: "add",
  describe: "adding a new note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "description of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

//Creating "remove" command
yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

//Creating "list" command
yargs.command({
  command: "list",
  describe: "listing notes",
  handler: () => {
    notes.listNotes();
  },
});

//Creating "read" command
yargs.command({
  command: "read",
  describe: "reading notes",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
