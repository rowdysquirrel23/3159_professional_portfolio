// Import stylesheet and images 
import './home.css';
import {Link} from 'react-router-dom';
import main_img from '../../assets/portfolio_pic.jpg';
import github from '../../assets/github_icon.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import html from '../../assets/html_icon.png';
import css from '../../assets/css_icon.png';
import js from '../../assets/js_icon.png';
import figma from '../../assets/figma_icon.png';
import react from '../../assets/react_icon.png';
import web_game from '../../assets/game1.png';
import dubai_logo from '../../assets/dubai_site.png';
import mortgage_img from '../../assets/mortgage1.png';
//Export function for routes
export default function Home() {

    return (
        <div className='home_body'>
            {/* Main section to provide overview of site */}
            <section className='banner_content'>
                {/* Give information on who the site is about */}
                <article className='personal_info'>
                    <h1 className='portfolio_name'>Ben Scholefield - Web Developer</h1>
                    <p className='portfolio_description'>
                    I am at the end of a BSc (Hons) in Web Design & Development. I am looking
                    to start a career in the front-end development industry with a graduate/junior 
                    role. 
                    </p>
                </article>
                {/* Portfolio image for site with alt tags for accessibility */}
                <img src={main_img} className='personal_img' alt='Man in a suit and sunglasses'></img>
            </section>
            <section className='home_content'>
                {/* Split the section into 3 cards */}
                <article className='card1'>
                    {/* Each article is a seperate card */}
                    <h2 className='card1_title'>About Me</h2>
                    <p className='card1_text'>
                    I have come to the end of a degree in Web Design & Development. Throughout my time at University,
                     I was able to discover my passion for front-end web development. I am located in Rossendale, Lancashire which is close to Manchester.
                    </p>
                    {/* Split text */}
                    <p className='card1_text'>
                    Outside of work, my hobbies and interests include football, bouldering going to the gym. 
                    I am an outgoing and active person who can work effectively within a team.
                    </p>
                </article>
                <article className='card2'>
                    {/* Second card */}
                    {/* Links to Github, linkedin and instagram */}
                    <a href='https://github.com/rowdysquirrel23' className='card2_link'>
                        <img src={github} alt='GitHub Icon'></img>
                        <p className='icon_label'>GitHub</p>
                    </a>
                    <a href='https://www.linkedin.com/in/ben-scholefield-web/' className='card2_link'>
                        <img src={linkedin} alt='linkedin icon'></img>
                        <p className='icon_label'>LinkedIn</p>
                    </a>
                    <a href='https://www.instagram.com/benscholefield01/' className='card2_link'>
                        <img src={instagram} alt='instagram icon'></img>
                        <p className='icon_label'>Instagram</p>
                    </a>
                </article>
                <article className='card3'>
                    {/* Third card */}
                <h2 className='card3_title'>Previous Work</h2>
                    <p className='card3_text'>
                     During university, I have had to undertake a variety of different projects that required different skill sets.
                     Some of these tasks are documented on this site and will demonstrate some of the skills I possess. 
                    </p>
                    {/* Split text */}
                    <p className='card3_text'>
                    HTML, CSS, JavaScript, React and Laravel are the main technologies that were used throughout my time there. 
                    The combination of these technologies and the ability to implement User Experience design practices have allowed me to develop high-quality applications.
                    </p>
                </article>
            </section>
            <h2 className='view_work'>View Previous Work!</h2>
            {/* Links to previous works page */}
            <section className='previous_work'>
                {/* Link to dubai landscapes */}
                <Link to={'/work1'} className='work_card'>
                    <img src={dubai_logo}  className='work_img' alt='Dubai Landscape site'></img>
                    <h3 className='work_title'> Dubai Landscapes</h3>
                    <p className='work_description'>
                    Click here to see Dubai Landscapes!
                    </p>
                </Link>
                {/* Link to mortgage calculator */}
                <Link to={'/work2'} className='work_card'>
                    <img src={mortgage_img} className='work_img' alt='Mortgage calculator in browser'></img>
                    <h3 className='work_title'>Mortgage Calculator</h3>
                    <p className='work_description'>
                    Click here to see the Mortgage Calculator!
                    </p>
                </Link>
                {/* Link to Planet protectors */}
                <Link to={'/work3'} className='work_card'>
                    <img src={web_game}  className='work_img' alt='Web based game open in browser'></img>
                    <h3 className='work_title'>Planet Protectors</h3>
                    <p className='work_description'>
                    Click here to see Planet Protectors!
                    </p>
                </Link>
            </section>
            <h2 className='skills_title'>Skills</h2>
            {/* Container of what skills are possessed */}
            <section className='home_skills'>
                <img src={html} className='skill' alt='html icon'></img>
                <img src={css} className='skill' alt='css icon'></img>
                <img src={js} className='skill' alt='javascript icon'></img>
                <img src={react} className='skill' alt='react icon'></img>
                <img src={figma} className='skill' alt='figma icon'></img>
            </section>
        </div>
    )
    
}