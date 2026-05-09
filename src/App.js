import React from 'react';

function App() {
  // ستایلێ گشتی یێ لاپه‌ڕی
  const mainContainer = {
    backgroundColor: '#050505', // ره‌شێ تاری
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#D4AF37', // ره‌نگێ زێڕی
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
    overflow: 'hidden',
    border: '8px solid #D4AF37', // چارچۆڤه‌كێ زێڕی بۆ هه‌می شاشێ
    boxSizing: 'border-box'
  };

  const crownStyle = {
    fontSize: '50px',
    marginBottom: '10px',
    filter: 'drop-shadow(0 0 10px #D4AF37)'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: '900',
    margin: '0',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)', // ره‌نگێ زێڕێ گه‌ش
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    dropShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  };

  const subtitleStyle = {
    color: '#ffffff',
    fontSize: '1.1rem',
    marginTop: '10px',
    letterSpacing: '5px',
    opacity: '0.7'
  };

  const startButtonStyle = {
    marginTop: '40px',
    padding: '15px 40px',
    backgroundColor: 'transparent',
    color: '#D4AF37',
    border: '2px solid #D4AF37',
    borderRadius: '0px', // ستایلێ كلاسیك یێ سه‌رخۆ
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)',
    textTransform: 'uppercase'
  };

  return (
    <div style={mainContainer}>
      <div style={crownStyle}>👑</div>
      <h1 style={titleStyle}>KING KURDISH</h1>
      <div style={{ width: '100px', height: '2px', backgroundColor: '#D4AF37', margin: '20px auto' }}></div>
      <p style={subtitleStyle}>POWER & HONOR</p>
      
      <button 
        style={startButtonStyle}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#D4AF37';
          e.target.style.color = '#000';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#D4AF37';
        }}
        onClick={() => alert('Welcome, Your Majesty!')}
      >
        Enter Kingdom
      </button>

      <div style={{ position: 'absolute', bottom: '20px', color: '#444' }}>
        Designed for Kings
      </div>
    </div>
  );
}

export default App;
