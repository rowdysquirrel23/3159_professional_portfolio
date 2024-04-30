import './home.css';
import main_img from '../../assets/portfolio_pic.jpg';

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
        </div>
    )
    
}