import './home.css';
import main_img from '../../assets/portfolio_pic.jpg';
import github from '../../assets/github_icon.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

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
                    <h2 className='crad1_title'>About Me</h2>
                    <p className='card1_text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    </p>
                </article>
                <article className='card2'>
                    <div className='card2_link1'>
                        <img src={github} alt='GitHub Icon'></img>
                        <p>GitHub</p>
                    </div>
                    <div className='card2_link2'>
                        <img src={linkedin} alt='linkedin icon'></img>
                        <p>LinkedIn</p>
                    </div>
                    <div className='card2_link3'>
                        <img src={instagram} alt='instagram icon'></img>
                        <p>Instagram</p>
                    </div>
                </article>
                <article className='card3'>
                <h2 className='crad1_title'>Previous Work</h2>
                    <p className='card1_text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus scelerisque neque vel enim gravida venenatis.
                    </p>
                </article>
            </section>
        </div>
    )
    
}