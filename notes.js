const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
    console.log(chalk.inverse('Your Notes'))
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title)
    });
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.find((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push({
            title : title,
            body: body
        });

        saveNotes(notes);
    } else{
        console.log(chalk.red.bold.inverse('Error!') + 'File name taken.');
    }
    
}    

const removeNote = function(title){
    const notes = loadNotes();
    const newnotes = notes.filter((note) => note.title != title);

    if(newnotes.length === notes.length){
        console.log(chalk.red.inverse('Note not found'));
    }else{
        console.log(chalk.green.inverse('Note removed'));
    }

    saveNotes(newnotes);
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse('Title: ' + note.title))
        console.log(note.body);
    } else{
        console.log(chalk.red.bold.inverse('Error!') + 'No such note exist');
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e){
        return [];
    }   
}

const getNotes = () =>{
    return 'Notes...'
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}