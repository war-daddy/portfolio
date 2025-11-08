export default function Footer() {
  const footerStyle = {
    backgroundColor: '#0a0a0a',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '60px 40px 0',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const topSectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '50px',
    paddingBottom: '40px',
    borderBottom: '1px solid #333',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const linkStyle = {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const descriptionStyle = {
    color: '#aaa',
    fontSize: '14px',
    lineHeight: '1.8',
  };

  const socialContainerStyle = {
    display: 'flex',
    gap: '15px',
    marginTop: '10px',
  };

  const socialIconStyle = {
    backgroundColor: '#9d4edd',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, backgroundColor 0.3s ease',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    color: '#aaa',
    fontSize: '14px',
  };

  const iconStyle = {
    color: '#9d4edd',
    fontSize: '16px',
    marginTop: '2px',
  };

  const bottomSectionStyle = {
    padding: '30px 0',
    textAlign: 'center',
    color: '#666',
    fontSize: '13px',
    borderTop: '1px solid #222',
  };

  const newsletterStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '15px',
  };

  const inputStyle = {
    flex: 1,
    padding: '12px 20px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '12px 30px',
    backgroundColor: '#9d4edd',
    border: 'none',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'backgroundColor 0.3s ease',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={topSectionStyle}>
          {/* About Column */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>About Me</h3>
            <p style={descriptionStyle}>
              I am a Results-oriented Software Developer, who focuses on Full-Stack JavaScript development and has a practical experience in the development of scaled and high-performance web application development based on React.js, Node.js, Express, and MongoDB.

            </p>
            <div style={socialContainerStyle}>
              <div style={socialIconStyle}>f</div>
              <div style={socialIconStyle}>in</div>
              <div style={socialIconStyle}>tw</div>
              <div style={socialIconStyle}>ig</div>
            </div>
          </div>

          {/* Quick Links */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>Quick Links</h3>
            <a style={linkStyle}>Home</a>
            <a style={linkStyle}>About</a>
            <a style={linkStyle}>Services</a>
            <a style={linkStyle}>Portfolio</a>
            <a style={linkStyle}>Contact</a>
          </div>

          {/* Services */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>Services</h3>
            <a style={linkStyle}>Web Design</a>
            <a style={linkStyle}>Web Development</a>
            <a style={linkStyle}>UI/UX Design</a>
            <a style={linkStyle}>Branding</a>
            <a style={linkStyle}>Consulting</a>
          </div>

          {/* Contact Info */}
          <div style={columnStyle}>
            <h3 style={headingStyle}>Contact</h3>
            <div style={contactItemStyle}>
              <span style={iconStyle}>📍</span>
              <span>Ghitorni , New Delhi</span>
            </div>
            <div style={contactItemStyle}>
              <span style={iconStyle}>📧</span>
              <span>sachin.kumar.dev866@gmail.com</span>
            </div>
            <div style={contactItemStyle}>
              <span style={iconStyle}>📞</span>
              <span>+91 913521575</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h3 style={{ ...headingStyle, textAlign: 'center' }}>Subscribe to Newsletter</h3>
          <p style={{ ...descriptionStyle, marginBottom: '20px' }}>
            Get the latest updates and insights delivered to your inbox.
          </p>
          <div style={{ ...newsletterStyle, maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={inputStyle}
            />
            <button style={buttonStyle}>Subscribe</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={bottomSectionStyle}>
          <p>&copy; 2025 Portfolio. All rights reserved. Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
}