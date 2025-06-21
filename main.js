import './components/HeaderBar.js';
import './components/FooterBar.js';
import './components/NoteItem.js';
import './components/NoteList.js';
import './components/NoteForm.js';

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}
