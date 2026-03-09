import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology in Computer Science</h4>
                <h5>Birla Institute Of Applied Sciences (BIAS)</h5>
              </div>
              <h3>Expected 2027</h3>
            </div>
            <p>
              CGPA: 7.3. Completed key projects using Java and C++. Active participant in technical clubs and coding contests. Built complete web projects using the MERN stack.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Library Management System</h4>
                <h5>Full-Stack Application</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a full-stack web application using Java, MySQL, Tailwind CSS, and Bootstrap. Enabled efficient management of books, users, and book issuing/returning workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI-Resume-Analyzer</h4>
                <h5>AI-Powered Tool</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an AI-powered tool to extract key details from resumes and match them with job descriptions. Designed to assist job seekers and recruiters in improving and evaluating resumes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
