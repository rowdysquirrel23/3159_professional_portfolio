import './home.css';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import main_img from '../../assets/portfolio_pic.jpg';
import github from '../../assets/github_icon.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import html from '../../assets/html_icon.png';
import css from '../../assets/css_icon.png';
import js from '../../assets/js_icon.png';
import figma from '../../assets/figma_icon.png';
import react from '../../assets/react_icon.png';
import web_game from '../../assets/web_game.png';
import dubai_logo from '../../assets/dubai_site.png';



export default function Home() {

    return (
        <div className='home_body'>
            
            <section className='banner_content'>
                <article className='personal_info'>
                    <h1 className='portfolio_name'>Ben Scholefield - Web Developer</h1>
                    <p className='portfolio_description'>
                    I am at the end of a BSc (Hons) in Web Design & Development. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. 
                    Suspendisse nec vehicula ipsum. Suspendisse molestie bibendum gravida. Duis mollis dolor id enim iaculis efficitur.
                </p>
                </article>
                <img src={main_img} className='personal_img' alt='Man in a suit and sunglasses'></img>
            </section>
            <section className='home_content'>
                <article className='card1'>
                    <h2 className='card1_title'>About Me</h2>
                    <p className='card1_text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    </p>
                </article>
                <article className='card2'>
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
                <h2 className='card3_title'>Previous Work</h2>
                    <p className='card3_text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    </p>
                </article>
            </section>
            <h2 className='view_work'>View Previous Work!</h2>
            <section className='previous_work'>
                <Link to={'/work1'} className='work_card'>
                    <img src={dubai_logo}  className='work_img' alt='Web based game open in browser'></img>
                    <h3 className='work_title'>Planet Protectors</h3>
                    <p className='work_description'>
                    Planet Protectors was a web application developed using the JavaScript
                    framework Phaser 3. It was a game designed to be played in the browser
                    and be played accross any device.
                    </p>
                </Link>
                <Link to={'/work2'} className='work_card'>
                    <img src={dubai_logo} className='work_img' alt='Web based game open in browser'></img>
                    <h3 className='work_title'>Planet Protectors</h3>
                    <p className='work_description'>
                    Planet Protectors was a web application developed using the JavaScript
                    framework Phaser 3. It was a game designed to be played in the browser
                    and be played accross any device.
                    </p>
                </Link>
                <Link to={'/work3'} className='work_card'>
                    <img src={dubai_logo}  className='work_img' alt='Web based game open in browser'></img>
                    <h3 className='work_title'>Planet Protectors</h3>
                    <p className='work_description'>
                    Planet Protectors was a web application developed using the JavaScript
                    framework Phaser 3. It was a game designed to be played in the browser
                    and be played accross any device.
                    </p>
                </Link>
            </section>
            <h2 className='skills_title'>Skills</h2>
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