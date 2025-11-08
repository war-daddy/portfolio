export default function Expbox() {
  const containerStyle = {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '60px 40px',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.05" /%3E%3C/svg%3E")',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    letterSpacing: '2px',
  };

  const descriptionStyle = {
    textAlign: 'center',
    color: '#aaa',
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '50px',
    maxWidth: '600px',
    margin: '0 auto 50px',
  };

  const skillsContainerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
  };

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '40px',
  };

  const tagStyle = {
    backgroundColor: '#9d4edd',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '25px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const progressBarContainerStyle = {
    marginBottom: '25px',
  };

  const progressLabelStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const progressBarBgStyle = {
    backgroundColor: '#333',
    height: '8px',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',
  };

  const progressBarFillStyle = (width) => ({
    backgroundColor: '#9d4edd',
    height: '100%',
    width: `${width}%`,
    transition: 'width 0.3s ease',
  });

  const percentageBadgeStyle = {
    backgroundColor: '#9d4edd',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'NODE',
    'EXPRESS',
    'BOOTSTRAP',
    'JQUERY',
    'SQL',
    'MONGODB',
    'DATA STRUCTURE',
    'SYSTEM DESIGN',
  ];

  const progressSkills = [
    { name: 'WEB DEVELOPMENT', percentage: 95 },
    { name: 'SYSTEM DESIGN', percentage: 70 },
    { name: 'PROBLEM SOLVING', percentage: 90 },
    // { name: '', percentage: 85 },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>SKILL AREA</h2>
      {/* <p style={descriptionStyle}> */}
        {/* Lorem amet consectetur adipiscing elit. Et, euismod architecto iusto
        userat at architecto iusto nostrum dignissimos consectetur sit corrupti
        quos sed.
      </p> */}

      <div style={skillsContainerStyle}>
        <div style={tagsContainerStyle}>
          {skills.map((skill, index) => (
            <span key={index} style={tagStyle}>
              {skill}
            </span>
          ))}
        </div>

        <div style={{ marginTop: '50px' }}>
          {progressSkills.map((skill, index) => (
            <div key={index} style={progressBarContainerStyle}>
              <div style={progressLabelStyle}>
                <span>{skill.name}</span>
                <span style={percentageBadgeStyle}>{skill.percentage}%</span>
              </div>
              <div style={progressBarBgStyle}>
                <div style={progressBarFillStyle(skill.percentage)}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}