import './work.css';
import github from '../../assets/github_icon.png';
import site_logo2 from '../../assets/calculator_icon.png';
import mortgage1 from '../../assets/mortgage1.png';
import mortgage2 from '../../assets/mortgage2.png';
import mortgage3 from '../../assets/mortgage3.png';

export default function Work2() {
    return (
        <div>
            <h1 className='portfolio_title'>Mortgage Calculator</h1>
            <section className='portfolio_work'>
            <article className='portfolio_summary'>
                <h2 className='work_question'>What is it?</h2>
                <p className='work_description'>
                    Mortgage Calculator was a small scale project chosen to allow
                    for the demonstration of HTML, CSS, and JavaScript skills. 
                    It allows users to input a number of values which then 
                    calulate a Mortgage repayment plan.
                </p>
                <p className='work_description'>
                    The application also allows for a graphical visualization of the
                    payment plan to be created for users. Overall, this task is not content
                    heavy, but is another display of skills.
                </p>
            </article>
            <article className='portfolio_links'>
                <a href='https://main--3140-dubai-landscapes.netlify.app/'>
                <img className='link1'src={site_logo2}></img>
                <p className='link_text'>View The Site!</p>
                </a>
                <a href='https://github.com/rowdysquirrel23/3159_professional_portfolio.git'>
                <img className='link2' src={github}></img>
                <p className='link_text'>View The Repository!</p>
                </a>
            </article>
        </section>
        <h2 className='gallery_title'>Gallery!</h2>
        <section className='portfolio_gallery'>
            <img  src={mortgage1} className='gallery_img'></img>
            <img  src={mortgage2} className='gallery_img'></img>
            <img  src={mortgage3} className='gallery_img'></img>
        </section>
        </div>
    )
}