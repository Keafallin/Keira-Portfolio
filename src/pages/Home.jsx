
import ProjectCard from '../components/ProjectCard'
import '../css/Home.css'
import ProjectOne from '../assets/Projects.png'
import DashOne from '../assets/sales_dash.png'
import BlankOne from '../assets/Intheworks.png'
import Profile from '../assets/profilephoto.png'





const skills = [
  'Python',
  'SQL',
  'Excel',
  'Pandas',
  'NumPy',
  'Power BI',
  'Tableau',
  'BigQuery',
  'Git',
  'Github',
  'Chatgpt',
  'Claude',
  'Google Gemini',

];



function Main() {
  return (

  <main className="main-container">

  

      <section className="hero" id="top">

        <div className="intro">
          <div className="portrait-wrap">
            <img
              src={Profile}
              alt="Keira"
              className="portrait"
            />
          </div>

          <div className="intro-copy">
            <h1>Keira</h1>
            <h2>
              Data Analyst &amp;
              Software Developer
            </h2>
            <p>
              Welcome to my portfolio. I am a Computer Science and Neuroscience graduate, with over four years of industry experience, specialising in Data Science, Data Analytics, AI, and Machine Learning.


            </p>
          </div>
        </div>

        <div className="skills-panel">
          <h2>Software &amp; Tools</h2>

          <div className="skills-box">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <p> This website is updated regularly. The featured projects are examples recreated from real projects using simulated data, or projects that have been approved in accordance to required data governance, privacy, and compliance for demonstration purposes. </p>
        </div>
            <h2 className='project_title'>Featured Projects</h2>
      </section>

      <section className="projects" id="projects">
        
        <ProjectCard project={{title: "Marketing & Lead Generation Analysis", url: DashOne, description: "I analysed an e-commerce sales funnel to identify how different traffic sources contributed to leads, conversions, and purchases, using Excel, Google BigQuery, and Tableau. Based on the findings, I recommended targeted marketing strategies that contributed to a 25% increase in email conversion rates, a 15% increase in lead volume, and improved sales of key products." }} />
        <ProjectCard project={{title: "Time Series Analysis", url: BlankOne, description: "Currently in review for approval in accordance to required data governance, privacy, and compliance for demonstration purposes to feature Time Series Analysis project completed for a client in collaboration with Transport for NSW." }} />
        <ProjectCard project={{title: "Website Performance & Optimisation Analysis", url: BlankOne, description: "Currently in review for approval in accordance to required data governance, privacy, and compliance for demonstration purposes for Web Performance & Optimisation Project." }} />
        
       
     
    

   
      </section>

    </main>
 

  )
}

export default Main
