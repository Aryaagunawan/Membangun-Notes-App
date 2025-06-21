import { notesData } from '/data/notesData.js';


class NoteList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = '';
        notesData.forEach(note => {
            const item = document.createElement('note-item');
            item.setAttribute('title', note.title);
            item.setAttribute('body', note.body);
            item.setAttribute('created', note.createdAt);
            item.setAttribute('note-id', note.id);
            this.appendChild(item);
        });
    }
}
customElements.define('note-list', NoteList);
