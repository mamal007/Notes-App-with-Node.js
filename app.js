const yargs = require('yargs');

//Adding "add" command
yargs.command({
    command: 'add',
    describe: 'adding a new note',
    handler: function () {
        console.log('added a note')
    }
})

//Adding "remove" command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler: function () {
        console.log('removed a note')
    }
})

//Adding "list" command
yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function () {
        console.log('listed notes')
    }
})

//Adding "read" command
yargs.command({
    command: 'read',
    describe: 'reading notes',
    handler: function () {
        console.log('read notes')
    }
})

console.log(yargs.argv)