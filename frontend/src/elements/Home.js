import React from 'react'
import { Link } from 'react-router-dom'
import '../elements/style.css'

const Home = () => {
  return (
    <div>
      <main>
        <section className="banner-container">
          <div className="container">
            <div className="left-section">
              <h1>Welcome to Internship Portal</h1>
              <p>
                As a college student, you might wonder what kind of computer
                science internships are available to you. Whether full time or
                part time, these work experiences provide a lot of real-world
                practice that can help you better understand your career field
                and provide qualifications for your resume.
              </p>

              <Link to='/login' style={{textDecoration:'none', color:'black'}}><button>          Login  </button></Link> 

            </div>
          </div>
        </section><br />
        <h2>Internship Courses</h2><br />
        <div className="card">
          <div className="card-item">
            <Link to='/signup'>  <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            /></Link>

            <br />
            <h4>Intenship in Artifical Inteligence and Machine Learning</h4>
          </div>
          <div className="card-item">

            <Link to='/signup'>  <img  src="https://www.netcov.com/wp-content/pubfiles/2022/07/shutterstock_1092829541.jpg"
              alt=""
            /></Link>
            <br />
            <h4>Intenship in Cyber Security</h4>
          </div>
          <div className="card-item">
            <Link to='/signup'>  <img
              src="https://wallpapers.com/images/high/data-science-business-information-m8dmd67am39ybvhs.webp"
              alt=""
            /></Link>
            <br />
            <h4>Intenship in Data science</h4>
          </div>
        </div>
        <div className="card">
          <div className="card-item">
            <Link to='/signup'>  <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*ZEPJsASfB2z7hi_0"
              alt=""
            /></Link>
            <br /> <h4>Intenship in Full Stack Development</h4>
          </div>
          <div className="card-item">
            <Link to='/signup'>  <img
              src="https://www.dotcominfoway.com/wp-content/uploads/2020/01/app-development-platforms.png"
              alt=""
            /></Link>
            <br />
            <h4>Intenship in Mobile App Development</h4>
          </div>
          <div className="card-item">
            <Link to='/signup'>  <img
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=826&t=st=1701269810~exp=1701270410~hmac=480c0d5d4bd9c160c2b1fa20a668a8fa0032bdee120e58ca1af3cd862f366e8d"
              alt=""
            /></Link>
            
            <br /> <h4>Internship in UI/UX Designing</h4>
          </div>
        </div>



        <div id="root"></div>
      </main>
    </div>
  )
}

export default Home
