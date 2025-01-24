import './App.css';
import { ReactTyped } from 'react-typed';
import React, { useState } from 'react';
import profilePic from './IMG_3021.JPEG';
// Import company logos
import jpLogo from './assets/jpmorgan-logo.png';
import twitterLogo from './assets/twitter-logo.png';
import rocheLogo from './assets/roche-logo.png';
import spirentLogo from './assets/spirent-logo.png';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="App">
      {/* Navigation bar */}
      <nav className="nav-bar">
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="App-header">
        <div className="profile-pic-container">
          <img 
            src={profilePic}
            alt="Kyle Lee"
            className="profile-pic"
          />
        </div>
        <h1>Hi, I'm Kyle Lee</h1>
        <p>
          I'm{' '}
          <ReactTyped
            strings={[
              'a software engineer',
              'a healthcare enthusiast',
              'an avid sports fan'
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="typed-text"
          />
        </p>
        <a href="#contact" className="hero-contact-button">
          Get In Touch
        </a>
      </header>

      {/* Work Experience Section */}
      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <div className="experience-container">
          {/* JPMorgan */}
          <div className="experience-item">
            <div className="experience-header">
              <img src={jpLogo} alt="JPMorgan Chase & Co Logo" className="company-logo" />
              <div className="experience-title">
                <div className="company-info">
                  <div className="company-location">
                    <p className="company">JPMorgan Chase & Co</p>
                    <span className="work-location">📍 New York, NY</span>
                  </div>
                  <h3>Associate Software Engineer III</h3>
                  <p className="date">February 2023 - Present</p>
                </div>
              </div>
            </div>
            <ul>
              <li>Build new digital retail bank for Germany market under the International Consumer Banking (ICB) organization at the firm</li>
              <li>Created customer open and close account journeys within ICB Germany leveraging Temporal workflow engine</li>
              <li>Designed and built team internal CI/CD build+deploy pipeline using shared workflows within GitHub Actions</li>
              <li>Leveraged Spring framework to design and implement microservice architecture, enhancing scalability and maintainability of platform</li>
              <li>Built efficient GraphQL APIs to streamline data retrieval and manipulation, improving user experience & reducing network overhead</li>
              <li>Utilize Google Pub/Sub for async communication between microservices, optimizing data flow & ensuring real-time processing</li>
            </ul>
          </div>

          {/* Twitter */}
          <div className="experience-item">
            <div className="experience-header">
              <img 
                src={twitterLogo} 
                alt="Twitter Logo" 
                className="company-logo twitter-logo"
              />
              <div className="experience-title">
                <div className="company-info">
                  <div className="company-location">
                    <p className="company">Twitter, Inc.</p>
                    <span className="work-location">📍 New York, NY</span>
                  </div>
                  <h3>Software Engineer II</h3>
                  <p className="date">July 2021 - February 2023</p>
                </div>
              </div>
            </div>
            <ul>
              <li>Constructed CI Jenkins pipeline infra to upload sandbox player to AWS S3 for Spaces audio testing on iOS and Android platforms</li>
              <li>Covered 80% of critical test cases of media backend service endpoints as part of building confidence in data center migration</li>
              <li>Managed Scala integration test infrastructure and increased coverage for media upload service endpoints by over 50%</li>
              <li>Designed strategy for increasing scalability of broad scale event verification services end-to-end testing</li>
              <li>Implemented microservice end-to-end testing framework for behavioral client events using Scala, Kafka, Docker, and Aurora</li>
            </ul>
          </div>

          {/* Roche */}
          <div className="experience-item">
            <div className="experience-header">
              <img src={rocheLogo} alt="Roche Diagnostics Logo" className="company-logo" />
              <div className="experience-title">
                <div className="company-info">
                  <div className="company-location">
                    <p className="company">Roche Diagnostics</p>
                    <span className="work-location">📍 Indianapolis, IN</span>
                  </div>
                  <h3>Data Analytics Intern</h3>
                  <p className="date">May 2020 - July 2020</p>
                </div>
              </div>
            </div>
            <ul>
              <li>Automated data processing of open/closed purchase order reports from SAP data using Excel VBA</li>
              <li>Built Tableau Dashboards using retail sales data to compare diabetes care products sold across retailers and manufacturers</li>
            </ul>
          </div>

          {/* Spirent */}
          <div className="experience-item">
            <div className="experience-header">
              <img src={spirentLogo} alt="Spirent Communications Logo" className="company-logo" />
              <div className="experience-title">
                <div className="company-info">
                  <div className="company-location">
                    <p className="company">Spirent Communications</p>
                    <span className="work-location">📍 Eatontown, NJ</span>
                  </div>
                  <h3>Software Engineering Intern</h3>
                  <p className="date">June 2019 - August 2019</p>
                </div>
              </div>
            </div>
            <ul>
              <li>Developed automation test framework and utilities to be used during module debug or system integration using Python scripts</li>
              <li>Designed methods, tools, and test automation scripts to improve development test efficiency</li>
              <li>Assisted with design verification testing of highly complex systems used for wireless physical layer testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-container">
          <div className="education-item">
            <div className="education-header">
              <div className="school-location">
                <h3>Columbia University</h3>
                <span className="location">📍 New York, NY</span>
              </div>
              <p className="degree">M.S. in Computer Science (ML Concentration)</p>
              <p className="education-date">2022 - Present</p>
              <p className="education-courses">
                Natural Language Processing • Artificial Intelligence • Databases • Cloud Computing • Computer Vision II* • Networks, Crowds and the Web
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-header">
              <div className="school-location">
                <h3>Rutgers University</h3>
                <span className="location">📍 New Brunswick, NJ</span>
              </div>
              <div className="dual-degree">
                <p className="degree">B.S. in Biomedical Engineering</p>
                <p className="degree">B.A. in Computer Science</p>
              </div>
              <p className="education-date">2017 - 2021</p>
              <p className="education-honors">
                Summa Cum Laude • Presidential Scholarship • Tau Beta Pi • Honors College
              </p>
              <p className="education-courses">
                Data Structures • Algorithms • Artificial Intelligence • Machine Learning • Software Methodology • Databases • Computer Architecture • Discrete Structures • MATLAB • Numerical Modeling • Computational Systems Bio • Linear Optimization • Calculus (I-IV)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>PLGA Diffusion Model</h3>
            <ul className="project-description">
              <li>Developed a mathematical MATLAB model simulating drug release profiles of lidocaine from PLGA nanoparticles</li>
              <li>Collaborated with Dr. Anil Shrirao to design and implement the model</li>
              <li>Incorporated drug diffusion and degradation mechanics to predict release patterns</li>
              <li>Created predictive models for drug release behavior from nanoparticle constructs</li>
            </ul>
            <div className="project-news">
              <a 
                href="https://www.annexpublishers.com/articles/JMSN/9202-A-Controlled-Release-PLGA-Bupivacaine-Construct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                📚 A Controlled Release PLGA Bupivacaine Construct and its Effect on Chondrocytes
              </a>
            </div>
            <div className="project-tech">
              <span className="tech-tag">MATLAB</span>
              <span className="tech-tag">Mathematical Modeling</span>
              <span className="tech-tag">Drug Delivery</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/kyle-t-lee/PLGA_Model" 
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Patho-ML</h3>
            <ul className="project-description">
              <li>Automated classification of breast cancer tissue slides as benign/malignant with respective subtype</li>
              <li>Utilized PyTorch and NumPy to train pre-existing VGG16 neural network on BreakHis dataset</li>
              <li>Placed 1st in Rice360° Global Health Design Competition</li>
              <li>Enhanced diagnostic efficiency through machine learning-based tissue analysis</li>
            </ul>
            <div className="project-news">
              <a 
                href="https://news.rice.edu/news/2021/rutgers-team-patho-ml-wins-rice-360deg-design-competition"
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                📰 Rutgers Team PathoML Wins Rice360 Design Competition
              </a>
            </div>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">PyTorch</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Healthcare</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/kyle-t-lee/ML-Breat_Cancer_Classfier" 
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/logos/java-logo.png" alt="Java" className="skill-logo" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <img src="/logos/python-logo.png" alt="Python" className="skill-logo" />
                <span>Python</span>
              </div>
              <div className="skill-item">
                <img src="/logos/matlab-logo.png" alt="MATLAB" className="skill-logo" />
                <span>MATLAB</span>
              </div>
              <div className="skill-item">
                <img src="/logos/scala-logo.png" alt="Scala" className="skill-logo" />
                <span>Scala</span>
              </div>
              <div className="skill-item">
                <img src="/logos/golang-logo.png" alt="GoLang" className="skill-logo" />
                <span>GoLang</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/logos/numpy-logo.png" alt="NumPy" className="skill-logo" />
                <span>NumPy</span>
              </div>
              <div className="skill-item">
                <img src="/logos/tensorflow-logo.png" alt="TensorFlow" className="skill-logo" />
                <span>TensorFlow</span>
              </div>
              <div className="skill-item">
                <img src="/logos/pandas-logo.png" alt="Pandas" className="skill-logo" />
                <span>Pandas</span>
              </div>
              <div className="skill-item">
                <img src="/logos/springboot-logo.png" alt="SpringBoot" className="skill-logo" />
                <span>SpringBoot</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>CI/CD</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/logos/jenkins-logo.png" alt="Jenkins" className="skill-logo" />
                <span>Jenkins</span>
              </div>
              <div className="skill-item">
                <img src="/logos/harness-logo.png" alt="Harness" className="skill-logo" />
                <span>Harness</span>
              </div>
              <div className="skill-item">
                <img src="/logos/github-actions-logo.png" alt="GitHub Actions" className="skill-logo" />
                <span>GitHub Actions</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Cloud Platforms</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/logos/gcp-logo.png" alt="Google Cloud" className="skill-logo" />
                <span>Google Cloud</span>
              </div>
              <div className="skill-item">
                <img src="/logos/aws-logo.png" alt="AWS" className="skill-logo" />
                <span>AWS</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Version Control</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/logos/github-logo.png" alt="GitHub" className="skill-logo" />
                <span>GitHub</span>
              </div>
              <div className="skill-item">
                <img src="/logos/bitbucket-logo.png" alt="BitBucket" className="skill-logo" />
                <span>BitBucket</span>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skills-list">
              <div className="skill-item">
                <img src="/logos/neo4j-logo.png" alt="Neo4j" className="skill-logo" />
                <span>Neo4j</span>
              </div>
              <div className="skill-item">
                <img src="/logos/cockroachdb-logo.png" alt="CockroachDB" className="skill-logo" />
                <span>CockroachDB</span>
              </div>
              <div className="skill-item">
                <img src="/logos/mysql-logo.png" alt="MySQL" className="skill-logo" />
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Get In Touch</h2>
        <p className="contact-description">
          I'm a software engineer currently based in New York open to new opportunities in tech and healthcare. Feel free to reach out!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>✉️ Email</h3>
            <a href="mailto:kl3374@columbia.edu" className="contact-link">
              kl3374@columbia.edu
            </a>
          </div>
          <div className="contact-item">
            <h3>💻 GitHub</h3>
            <a 
              href="https://github.com/kyle-t-lee" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/kyle-t-lee
            </a>
          </div>
          <div className="contact-item">
            <h3>🔗 LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/klee72/" 
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/klee72
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
