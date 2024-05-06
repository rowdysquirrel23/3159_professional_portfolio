// Import images and stylesheet for page
import './work.css';
import github from '../../assets/github_icon.webp';
import site_logo2 from '../../assets/calculator_icon.webp';
import mortgage1 from '../../assets/mortgage1.webp';
import mortgage2 from '../../assets/mortgage2.webp';
import mortgage3 from '../../assets/mortgage3.webp';
//Export function for routes
export default function Work2() {
    return (
        <div>
            {/* Overview of prvious work */}
            <h1 className='portfolio_title'>Mortgage Calculator</h1>
             {/* Section to contain The description and links for the work */}
            <section className='portfolio_work'>
                {/* Description of task */}
            <article className='portfolio_summary'>
                <h2 className='work_question'>What is it?</h2>
                <p className='work_description'>
                    Mortgage Calculator was a small scale project chosen to allow
                    for the demonstration of HTML, CSS, and JavaScript skills. 
                    It allows users to input a number of values which then 
                    calulate a Mortgage repayment plan.
                </p>
                {/* Split text */}
                <p className='work_description'>
                    The application also allows for a graphical visualization of the
                    payment plan to be created for users. Overall, this task is not content
                    heavy, but is another display of skills.
                </p>
            </article>
             {/* Links to the site and Github repository */}
            <article className='portfolio_links'>
                <a href='https://663949922e909540729f9564--luminous-starlight-a12657.netlify.app/'>
                <img className='link1'src={site_logo2} alt='Logo of mortgage calculator'></img>
                <p className='link_text'>View The Site!</p>
                </a>
                {/* Contain Images and text in link */}
                <a href='https://github.com/rowdysquirrel23/small_portfolio_3159.git'>
                <img className='link2' src={github} alt='GitHub Icon'></img>
                <p className='link_text'>View The Repository!</p>
                </a>
            </article>
        </section>
         {/* Images of the application */}
        <h2 className='gallery_title'>Gallery!</h2>
        <section className='portfolio_gallery'>
            <img  src={mortgage1} className='gallery_img' alt='calculator without input'></img>
            <img  src={mortgage2} className='gallery_img' alt='check button in action for site'></img>
            <img  src={mortgage3} className='gallery_img' alt='calculator output'></img>
        </section>
        </div>
    )
}