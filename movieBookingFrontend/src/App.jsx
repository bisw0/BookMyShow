import React from 'react';
import './index.css';

const MOCK_MOVIES = [
  { id: 1, title: 'Inception', duration: '2h 28m', format: 'IMAX 3D', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400&h=600' },
  { id: 2, title: 'The Dark Knight', duration: '2h 32m', format: '4DX', image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=400&h=600' },
  { id: 3, title: 'Interstellar', duration: '2h 49m', format: 'DOLBY VISION', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400&h=600' },
  { id: 4, title: 'Blade Runner 2049', duration: '2h 44m', format: 'IMAX 2D', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=400&h=600' },
];

function App() {
  return (
    <>
      <div className="bg-gradient"></div>
      
      <header className="container" style={{ padding: '24px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'linear-gradient(to bottom, rgba(2,6,23,0.9), transparent)' }}>
        <nav className="flex justify-between items-center">
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            BookMy<span className="highlight">Show</span>
          </h1>
          <div className="flex gap-6 items-center" style={{ color: 'var(--text-muted)' }}>
            <span style={{ cursor: 'pointer' }}>Movies</span>
            <span style={{ cursor: 'pointer' }}>Cinemas</span>
            <span style={{ cursor: 'pointer' }}>Events</span>
            <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Sign In</button>
          </div>
        </nav>
      </header>

      <main style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <section className="container flex flex-col items-center justify-center text-center" style={{ minHeight: '50vh' }}>
          <h1 className="text-gradient" style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px', maxWidth: '800px' }}>
            Experience Cinema Like Never Before
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '40px', maxWidth: '600px' }}>
            Book tickets for the latest movies, immersive IMAX experiences, and premium seating—all in just a few taps.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>Now Showing</button>
            <button className="glass-card" style={{ padding: '16px 32px', color: 'white', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, transition: 'all 0.3s ease' }}>
              View Venues
            </button>
          </div>
        </section>

        <section className="container" style={{ marginTop: '80px' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Trending Now</h2>
            <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 500 }}>View All</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
            {MOCK_MOVIES.map(movie => (
              <div key={movie.id} className="glass-card" style={{ padding: '16px', display: 'flex', flexDirection: 'col' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '16px', position: 'relative', height: '350px' }}>
                  <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.6)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
                    {movie.format}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{movie.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>{movie.duration} • Action/Sci-Fi</p>
                <button className="btn-primary" style={{ width: '100%' }}>Book Tickets</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
