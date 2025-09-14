import React from "react";

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', background: '#f7f7f7', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Global Citizens Community Center</h1>
        <h2>Global Vegan No-Bake Bake Sale Tour</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
          Join our interactive journey to 182 countries in 1 year!<br />
          Help us end extreme poverty by 2030 through community, compassion, and delicious vegan treats.
        </p>
      </header>
      <section style={{ background: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', maxWidth: '700px', margin: '0 auto' }}>
        <h3>How You Can Participate</h3>
        <ul>
          <li>Track the tour’s progress across 182 countries</li>
          <li>Share your own vegan no-bake recipes</li>
          <li>Connect with global citizens and local communities</li>
          <li>Support fundraising efforts to end extreme poverty</li>
        </ul>
        <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', background: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}>
          Join the Tour
        </button>
      </section>
      <footer style={{ textAlign: 'center', marginTop: '3rem', color: '#888' }}>
        <small>© 2025 Global Citizens Community Center</small>
      </footer>
    </div>
  );
}

export default App;
