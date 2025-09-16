
import React from "react";

function App() {
  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', background: '#f0f4f8', minHeight: '100vh' }}>
      <header style={{ background: '#222', color: '#fff', padding: '2rem 0', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Global Citizens Community Center</h1>
        <h2 style={{ fontWeight: 400, fontSize: '1.5rem', marginBottom: '1rem' }}>Global Vegan No-Bake Bake Sale Tour</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Touring <b>182 countries</b> in 1 year to turn the Doomsday Clock back and end extreme poverty by 2030.<br />
          Join us for a global movement of compassion, action, and delicious vegan treats!
        </p>
      </header>
      <main style={{ maxWidth: '900px', margin: '2rem auto', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', padding: '2rem' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#4caf50' }}>Tour Progress</h3>
          <p>Follow our journey as we visit 182 countries, host vegan bake sales, and raise funds to end extreme poverty.</p>
          <div style={{ background: '#e8f5e9', borderRadius: '8px', padding: '1rem', margin: '1rem 0' }}>
            <b>Countries visited:</b> <span style={{ fontSize: '1.3rem', color: '#388e3c' }}>0 / 182</span>
            <div style={{ height: '10px', background: '#c8e6c9', borderRadius: '5px', marginTop: '0.5rem' }}>
              <div style={{ width: '0%', height: '100%', background: '#4caf50', borderRadius: '5px' }}></div>
            </div>
          </div>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#ff9800' }}>Share Your Recipe</h3>
          <p>Submit your favorite vegan no-bake recipe and be part of the global bake sale!</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '400px' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            <input type="text" placeholder="Recipe Name" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            <textarea placeholder="Recipe Details" rows={3} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            <button type="submit" style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Submit Recipe</button>
          </form>
        </section>
        <section>
          <h3 style={{ color: '#1976d2' }}>Get Involved</h3>
          <ul style={{ lineHeight: '2', fontSize: '1.1rem' }}>
            <li>Connect with global citizens and local communities</li>
            <li>Support fundraising efforts to end extreme poverty</li>
            <li>Track the Doomsday Clock and our impact</li>
            <li>Share your story and inspire others</li>
          </ul>
          <button style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.75rem 1.5rem', fontSize: '1rem', marginTop: '1rem', cursor: 'pointer' }}>
            Join the Movement
          </button>
        </section>
      </main>
      <footer style={{ textAlign: 'center', marginTop: '3rem', color: '#888', padding: '1rem 0' }}>
        <small>© 2025 Global Citizens Community Center | Vegan No-Bake Bake Sale Tour</small>
      </footer>
    </div>
  );
}

export default App;
