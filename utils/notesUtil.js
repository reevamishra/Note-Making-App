var fs = require('fs')
var addNotes = function (title, body) {
    // console.log("i am add notes fn")
    // console.log(title, body)

    // fs.writeFileSync('./data/data.json',JSON.stringify(a))
    var notes = loadNotes()
    var duplicates = notes.filter(function(note){
        return note.title === title
    })
    if(duplicates.length ===0)
    {
        notes.push({
            title: title,
            body: body,
        })
        fs.writeFileSync('./data/data.json', JSON.stringify(notes))
        console.log("Added succesfully")
    }else{
        console.log('duplicate found..!')
    }
    // console.log(notes)
    }
var loadNotes = function () {
    try {
        var dataBuff = fs.readFileSync('./data/data.json')
        dataBuff = dataBuff.toString()
        dataBuff = JSON.parse(dataBuff)
        return dataBuff
    } catch (error) {
        return []
    }

}

var deleteNotes = function (title) {
    var dataBuff = loadNotes()
    // JSON.stringify(dataBuff)
    dataBuff.pop({
        title: title,
        
    })
    fs.writeFileSync('./data/data.json', JSON.stringify(dataBuff))
}
module.exports = {
    addNotes: addNotes,
    deleteNotes: deleteNotes,
}