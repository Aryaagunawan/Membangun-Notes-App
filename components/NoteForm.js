import { notesData } from '../data/notesData.js';

class NoteForm extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <form novalidate>
        <h2>Tambah Catatan</h2>
        <input type="text" id="title" placeholder="Judul catatan" required minlength="3" />
        <small class="error-title" style="color: red; display: none;">Judul minimal 3 karakter</small>
        <textarea id="body" rows="5" placeholder="Isi catatan..." required minlength="5"></textarea>
        <small class="error-body" style="color: red; display: none;">Isi catatan minimal 5 karakter</small>
        <button type="submit">💾 Simpan Catatan</button>
      </form>
    `;

        const form = this.querySelector('form');
        const titleInput = this.querySelector('#title');
        const bodyInput = this.querySelector('#body');
        const errorTitle = this.querySelector('.error-title');
        const errorBody = this.querySelector('.error-body');

        const validate = () => {
            errorTitle.style.display = titleInput.value.trim().length < 3 ? 'block' : 'none';
            errorBody.style.display = bodyInput.value.trim().length < 5 ? 'block' : 'none';
        };

        titleInput.addEventListener('input', validate);
        bodyInput.addEventListener('input', validate);

        form.addEventListener('submit', e => {
            e.preventDefault();
            validate();

            if (titleInput.value.trim().length >= 3 && bodyInput.value.trim().length >= 5) {
                const newNote = {
                    id: `notes-${Math.random().toString(36).substr(2, 9)}`,
                    title: titleInput.value.trim(),
                    body: bodyInput.value.trim(),
                    createdAt: new Date().toISOString(),
                    archived: false,
                };
                notesData.unshift(newNote);
                document.querySelector('note-list').render();
                form.reset();
                errorTitle.style.display = 'none';
                errorBody.style.display = 'none';
            }
        });
    }
}
customElements.define('note-form', NoteForm);
