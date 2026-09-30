import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>FlyRank AI (Remote)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Working through FlyRank's self-paced ML internship track, exploring clustering, embedding-based retrieval, and classification on search-related datasets while building reproducible prototypes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Kuri &amp; Company (Pvt.) Ltd.</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Assisted in maintaining and updating pages on kuricompany.com. Resolved UI and layout issues and improved content structure for consistency and responsive readability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc in Computer Science</h4>
                <h5>Brac University</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              CGPA: 3.00. Completed undergraduate thesis: <em>"A Multi-Stage Deep Learning Framework for Automated Detection and Localization of Shrimp Disease"</em> (96.8% accuracy with U-Net++, ConvNeXt, ResNet-34, and Adversarial Training).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications &amp; Training</h4>
                <h5>BCG (Forage) &amp; Google</h5>
              </div>
              <h3>2023-2026</h3>
            </div>
            <p>
              <a
                href="https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_BtGf55iWgdxaLqXQY_1776268097829_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                BCG Data Science Job Simulation (Forage, 2026)
              </a>{" "}
              and{" "}
              <a
                href="https://www.coursera.org/account/accomplishments/verify/ZMQXUMY6FJ6S"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                Foundations of Data Science by Google (Coursera, 2023)
              </a>
              . Solidified data analysis, statistical modeling, and ML fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Leadership &amp; Extracurriculars</h4>
                <h5>BRAC University Societies</h5>
              </div>
              <h3>2023-2024</h3>
            </div>
            <p>
              Senior Executive (prev. Junior Executive) at BRACU Art &amp; Photography Society, Social Media Coordinator at BRACU Express, and Marketing Executive at BRACU Leadership Development Forum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
