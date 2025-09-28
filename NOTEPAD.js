document.getElementById('save').addEventListener('click', saveNote);

function saveNote() {
    const noteText = document.getElementById('note').value;
    if (noteText) {
        const noteDiv = document.createElement('div');
        noteDiv.textContent = noteText;
        document.getElementById('notes').appendChild(noteDiv);
        document.getElementById('note').value = '';
    }
}
