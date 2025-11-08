export default function work() {
  const containerStyle = {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "60px 40px",
    fontFamily: "Arial, sans-serif",
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.05" /%3E%3C/svg%3E")',
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    letterSpacing: "2px",
  };

  const descriptionStyle = {
    textAlign: "center",
    color: "#aaa",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "50px",
    maxWidth: "600px",
    margin: "0 auto 50px",
  };

  const workContainerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };

  const workItemStyle = {
    backgroundColor: "#2a2a2a",
    borderRadius: "12px",
    padding: "30px",
    display: "flex",
    gap: "30px",
    alignItems: "flex-start",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  };

  const logoContainerStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    minWidth: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1a1a1a",
  };

  const contentStyle = {
    flex: 1,
  };

  const companyNameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#fff",
  };

  const jobTitleStyle = {
    fontSize: "16px",
    color: "#9d4edd",
    marginBottom: "15px",
    fontWeight: "600",
  };

  const descStyle = {
    color: "#bbb",
    fontSize: "14px",
    lineHeight: "1.8",
    marginBottom: "20px",
  };

  const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const skillTagStyle = {
    backgroundColor: "#9d4edd",
    color: "#fff",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const workExperiences = [
    {
      company: "eLoop Dev Solutions LLP",
      logo: "eLoop",
      jobTitle: "Software Developer",
      period: "2024 - Present",
      description: `• Developed high-performance web applications and backend systems as a Full-Stack Developer at eLoop Dev Solutions LLP. 
      • Collaborated with cross-functional teams to enhance 10+ client applications, boosting performance across all devices.  
      • Integrated 25+ RESTful APIs, achieving a 25% reduction in server response time and improving scalability.  
      • Enhanced UI/UX standards, resulting in a increase in client satisfaction and repeat business.`,
      skills: [
        "Node",
        "Express",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "MongoDB",
        "Git",
        "React",
      ],
    },
    {
      company: "10Times",
      logo: "10",
      jobTitle: "Software Developer",
      period: "2023 - 2024",
      description:
        `• Developed and launched the Community/Hubs module, doubling platform engagement.  
         • Built backend controllers in PHP and integrated with React frontends for seamless data flow.  
         • Collaborated with cross-functional teams to create user-centric interfaces aligned with business goals.  
         • Diagnosed and resolved over 100 software issues, significantly enhancing application stability.`,
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Html",
        "CSS",
        "Bootstrap",
        "Git",
        "Php",
        "Sql",
      ],
    },
    // {
    //   company: 'Creative Agency',
    //   logo: 'CA',
    //   jobTitle: 'Junior Web Developer',
    //   period: '2018 - 2019',
    //   description: 'Developed and maintained client websites using various CMS platforms. Assisted in creating custom WordPress themes and plugins. Collaborated with designers to implement pixel-perfect designs.',
    //   skills: ['WordPress', 'PHP', 'jQuery', 'Bootstrap', 'MySQL'],
    // },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>WORK EXPERIENCE</h2>
      {/* <p style={descriptionStyle}>
        Lorem amet consectetur adipiscing elit. Et, euismod architecto iusto
        userat at architecto iusto nostrum dignissimos consectetur sit corrupti
        quos sed.
      </p> */}

      <div style={workContainerStyle}>
        {workExperiences.map((work, index) => (
          <div key={index} style={workItemStyle}>
            <div style={logoContainerStyle}>{work.logo}</div>

            <div style={contentStyle}>
              <h3 style={companyNameStyle}>{work.company}</h3>
              <div style={jobTitleStyle}>
                {work.jobTitle} • {work.period}
              </div>
              <p style={descStyle}>{work.description}</p>

              <div style={skillsContainerStyle}>
                {work.skills.map((skill, idx) => (
                  <span key={idx} style={skillTagStyle}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
