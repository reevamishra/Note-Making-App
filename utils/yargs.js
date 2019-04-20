var yargs = require('yargs')
var notesUtil = require('./notesUtil')
yargs.command({
    command: 'add',
    describe: 'To Add',

    handler : function(argv){
        // console.log(argv)
        notesUtil.addNotes(argv.title,argv.body)
        

    },

    builder : {
        title : {
            describe : "Title for Note",
            demandOption : true,
            type : 'string'

        },
        body : {
            describe : "Body for the note",
            demandOption : true,
            type : 'string'
        }
    }
})

yargs.command({
    command: 'del',
    describe: "delete notes",
    handler: function(argv){
        notesUtil.deleteNotes(argv.title)

    },
    builder : {
        title : {
            describe : "Title for Note",
            demandOption : true,
            type : 'string'

        },
        
    }
})
module.exports = yargs