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
        </div>
    )
    
}