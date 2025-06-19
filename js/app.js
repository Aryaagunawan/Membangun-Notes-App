const notesData = [
    {
        id: 'notes-jT-jjsyz61J8XKiI',
        title: 'Welcome to Notes, Dimas!',
        body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
        createdAt: '2022-07-28T10:03:12.594Z',
        archived: false,
    },
    {
        id: 'notes-aB-cdefg12345',
        title: 'Meeting Agenda',
        body: 'Discuss project updates and assign tasks for the upcoming week.',
        createdAt: '2022-08-05T15:30:00.000Z',
        archived: false,
    },
    {
        id: 'notes-XyZ-789012345',
        title: 'Shopping List',
        body: 'Milk, eggs, bread, fruits, and vegetables.',
        createdAt: '2022-08-10T08:45:23.120Z',
        archived: false,
    },
    {
        id: 'notes-1a-2b3c4d5e6f',
        title: 'Personal Goals',
        body: 'Read two books per month, exercise three times a week, learn a new language.',
        createdAt: '2022-08-15T18:12:55.789Z',
        archived: false,
    },
    {
        id: 'notes-LMN-456789',
        title: 'Recipe: Spaghetti Bolognese',
        body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
        createdAt: '2022-08-20T12:30:40.200Z',
        archived: false,
    },
    {
        id: 'notes-QwErTyUiOp',
        title: 'Workout Routine',
        body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
        createdAt: '2022-08-25T09:15:17.890Z',
        archived: false,
    },
    {
        id: 'notes-abcdef-987654',
        title: 'Book Recommendations',
        body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
        createdAt: '2022-09-01T14:20:05.321Z',
        archived: false,
    },
    {
        id: 'notes-zyxwv-54321',
        title: 'Daily Reflections',
        body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
        createdAt: '2022-09-07T20:40:30.150Z',
        archived: false,
    },
    {
        id: 'notes-poiuyt-987654',
        title: 'Travel Bucket List',
        body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
        createdAt: '2022-09-15T11:55:44.678Z',
        archived: false,
    },
    {
        id: 'notes-asdfgh-123456',
        title: 'Coding Projects',
        body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
        createdAt: '2022-09-20T17:10:12.987Z',
        archived: false,
    },
    {
        id: 'notes-5678-abcd-efgh',
        title: 'Project Deadline',
        body: 'Complete project tasks by the deadline on October 1st.',
        createdAt: '2022-09-28T14:00:00.000Z',
        archived: false,
    },
    {
        id: 'notes-9876-wxyz-1234',
        title: 'Health Checkup',
        body: 'Schedule a routine health checkup with the doctor.',
        createdAt: '2022-10-05T09:30:45.600Z',
        archived: false,
    },
    {
        id: 'notes-qwerty-8765-4321',
        title: 'Financial Goals',
        body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
        createdAt: '2022-10-12T12:15:30.890Z',
        archived: false,
    },
    {
        id: 'notes-98765-54321-12345',
        title: 'Holiday Plans',
        body: 'Research and plan for the upcoming holiday destination.',
        createdAt: '2022-10-20T16:45:00.000Z',
        archived: false,
    },
    {
        id: 'notes-1234-abcd-5678',
        title: 'Language Learning',
        body: 'Practice Spanish vocabulary for 30 minutes every day.',
        createdAt: '2022-10-28T08:00:20.120Z',
        archived: false,
    },
];

console.log(notesData);

class HeaderBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header style="
        background: var(--primary);
        padding: 1.2rem;
        color: white;
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        box-shadow: 0 2px 10px var(--shadow);
        position: relative;">
        📝 Notes App
        <button class="theme-toggle">🌗</button>
      </header>`;

        const toggle = this.querySelector('.theme-toggle');
        toggle.addEventListener('click', () => {
            const html = document.documentElement;
            const isDark = html.getAttribute('data-theme') === 'dark';
            if (isDark) {
                html.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

class NoteItem extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'body', 'created'];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <article style="
        background: var(--card-bg);
        padding: 1.2rem;
        border-radius: 10px;
        box-shadow: 0 4px 10px var(--shadow);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;">
        <h3 style="margin: 0; color: var(--accent);">${this.getAttribute('title')}</h3>
        <p style="margin: 0.5rem 0;">${this.getAttribute('body')}</p>
        <small style="color: gray;">${new Date(this.getAttribute('created')).toLocaleDateString()}</small>
      </article>`;
    }
}

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


class FooterBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer style="
        background: var(--primary);
        color: white;
        text-align: center;
        padding: 1rem;
        margin-top: 2rem;
        font-size: 0.9rem;
        box-shadow: 0 -2px 10px var(--shadow);">
        © 2025 Notes App. Dibuat dengan Arya Gunawan.
      </footer>`;
    }
}

customElements.define('header-bar', HeaderBar);
customElements.define('note-item', NoteItem);
customElements.define('note-list', NoteList);
customElements.define('note-form', NoteForm);
customElements.define('footer-bar', FooterBar);

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}
