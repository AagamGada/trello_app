import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Notes App</h1>
          <div className="auth-buttons">
            <button id="login-button">Login</button>
            <button id="signup-button">Signup</button>
          </div>
        </div>
      </header>
      <main>
        <section id="notes-section">
          <h2>Your Notes</h2>
          <div id="notes-list">
            {/* Notes will be displayed here */}
          </div>
        </section>
        <section id="add-note-section">
          <h2>Add a New Note</h2>
          <form id="add-note-form">
            <input type="text" id="note-title" placeholder="Note Title" required />
            <textarea id="note-content" placeholder="Note Content" required></textarea>
            <button type="submit">Add Note</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
