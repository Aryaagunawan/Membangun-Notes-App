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
      <article style="background: var(--card-bg); padding: 1.2rem; border-radius: 10px; box-shadow: 0 4px 10px var(--shadow); display: flex; flex-direction: column; gap: 0.5rem;">
        <h3 style="margin: 0; color: var(--accent);">${this.getAttribute('title')}</h3>
        <p style="margin: 0.5rem 0;">${this.getAttribute('body')}</p>
        <small style="color: gray;">${new Date(this.getAttribute('created')).toLocaleDateString()}</small>
      </article>`;
    }
}
customElements.define('note-item', NoteItem);
