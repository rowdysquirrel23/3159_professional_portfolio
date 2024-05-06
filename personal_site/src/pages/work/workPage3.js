// Import images and stylesheet for page
import './work.css';
import github from '../../assets/github_icon.png';
import game_logo from '../../assets/game_logo.png';
import game1 from '../../assets/game1.png';
import game2 from '../../assets/game2.png';
import game3 from '../../assets/game3.png';
//Export function for routes
export default function Work3() {
    return (
        <div>
            {/* Overview of prvious work */}
            <h1 className='portfolio_title'>Planet Protectors</h1>
            {/* Section to contain The description and links for the work */}
            <section className='portfolio_work'>
                {/* Description of task */}
            <article className='portfolio_summary'>
                <h2 className='work_question'>What is it?</h2>
                <p className='work_description'>
                    Planet Protectors was a web based game developed as
                    to be accessible accross multiple devices and screen sizes.
                    Primarily, it was designed for mobile users but it is still
                    accessible for those on desktop.
                </p>
                {/* Split text */}
                <p className='work_description'>
                    The JavaScript framework Phaser 3 was used to create this. 
                    It allows for physics, collisions and interactions to be 
                    implemented to web based applications.
                </p>
            </article>
            {/* Links to the site and Github repository */}
            <article className='portfolio_links'>
                <a href='https://elegant-vacherin-e34ddb.netlify.app/'>
                <img className='link1'src={game_logo} alt='logo of planet protectors'></img>
                <p className='link_text'>View The Site!</p>
                </a>
                {/* Contain Images and text in link */}
                <a href='https://github.com/rowdysquirrel23/CIS3158_CW2.git'>
                <img className='link2' src={github} alt='GitHub Icon'></img>
                <p className='link_text'>View The Repository!</p>
                </a>
            </article>
        </section>
        {/* Images of the application */}
        <h2 className='gallery_title'>Gallery!</h2>
        <section className='portfolio_gallery'>
            <img  src={game1} className='gallery_img' alt='Page of the game'></img>
            <img  src={game2} className='gallery_img' alt='Page of the game'></img>
            <img  src={game3} className='gallery_img' alt='Page of the game'></img>
        </section>
        </div>
    )
}