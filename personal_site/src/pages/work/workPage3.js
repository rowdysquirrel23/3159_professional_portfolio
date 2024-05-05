import './work.css';
import github from '../../assets/github_icon.png';
import game_logo from '../../assets/game_logo.png';
import game1 from '../../assets/game1.png';
import game2 from '../../assets/game2.png';
import game3 from '../../assets/game3.png';

export default function Work3() {
    return (
        <div>
            <h1 className='portfolio_title'>Planet Protectors</h1>
            <section className='portfolio_work'>
            <article className='portfolio_summary'>
                <h2 className='work_question'>What is it?</h2>
                <p className='work_description'>
                    Planet Protectors was a web based game developed as
                    to be accessible accross multiple devices and screen sizes.
                    Primarily, it was designed for mobile users but it is still
                    accessible for those on desktop.
                </p>
                <p className='work_description'>
                    The JavaScript framework Phaser 3 was used to create this. 
                    It allows for physics, collisions and interactions to be 
                    implemented to web based applications.
                </p>
            </article>
            <article className='portfolio_links'>
                <a href='https://elegant-vacherin-e34ddb.netlify.app/'>
                <img className='link1'src={game_logo}></img>
                <p className='link_text'>View The Site!</p>
                </a>
                <a href='https://github.com/rowdysquirrel23/CIS3158_CW2.git'>
                <img className='link2' src={github}></img>
                <p className='link_text'>View The Repository!</p>
                </a>
            </article>
        </section>
        <h2 className='gallery_title'>Gallery!</h2>
        <section className='portfolio_gallery'>
            <img  src={game1} className='gallery_img'></img>
            <img  src={game2} className='gallery_img'></img>
            <img  src={game3} className='gallery_img'></img>
        </section>
        </div>
    )
}