export default function EducationSection() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#fff',
    width:'50%'
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#000',
    fontFamily:'Dm Sans'
  };

  const cardContainerStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  };

  const itemStyle = {
    borderLeft: '4px solid #d4e157',
    paddingLeft: '20px'
  };

  const yearBadgeStyle = {
    display: 'inline-block',
    backgroundColor: '#d4e157',
    color: '#000',
    padding: '8px 24px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '15px'
  };

  const degreeStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#000'
  };

  const institutionStyle = {
    fontSize: '16px',
    color: '#666',
    margin: '0'
  };

  return (
    <div style={{ display: 'flex', width:"100%", gap: '50px',justifyContent:"center", flexWrap:"wrap" }}>
      {/* edu */}
      <div style={containerStyle}>
      <h1 style={headingStyle}>Education</h1>
      
      <div style={cardContainerStyle}>
        <div style={itemStyle}>
          <span style={yearBadgeStyle}>2019 - 2023</span>
          <h2 style={degreeStyle}>Bachelor of Technology</h2>
          <p style={institutionStyle}>Truba College of Science and Technology</p>
        </div>

        <div style={itemStyle}>
          <span style={yearBadgeStyle}>2019</span>
          <h2 style={degreeStyle}>Intermediate</h2>
          <p style={institutionStyle}>A.K. Gopalan College</p>
        </div>

        <div style={itemStyle}>
          <span style={yearBadgeStyle}>2016</span>
          <h2 style={degreeStyle}>Matriculation</h2>
          <p style={institutionStyle}>L/S High School Ramankabad</p>
        </div>

      </div>
       </div>
      {/* edu */}
      {/* certi */}
      <div style={containerStyle}>
      <h1 style={headingStyle}>Certifications</h1>
      
      <div style={cardContainerStyle}>
        <div style={itemStyle}>
          <span style={yearBadgeStyle}>2022 - Present</span>
          <h2 style={degreeStyle}>Design and Analysis of Algorithms</h2>
          <p style={institutionStyle}>NPTEL : IIT Madras</p>
        </div>

        <div style={itemStyle}>
          <span style={yearBadgeStyle}>2021 - Present</span>
          <h2 style={degreeStyle}>Mastering Data Structures & Algorithms using C and C++</h2>
          <p style={institutionStyle}>Udemy</p>
        </div>

        {/* <div style={itemStyle}>
          <span style={yearBadgeStyle}>2016</span>
          <h2 style={degreeStyle}>Matriculation</h2>
          <p style={institutionStyle}>L/S High School Ramankabad</p>
        </div> */}

      </div>
       </div>
      {/* certi */}
    </div>
    
  );
}
