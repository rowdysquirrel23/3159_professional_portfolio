// Import images and stylesheet for page
import './work.css';
import github from '../../assets/github_icon.png';
import site_logo from '../../assets/dubai_logo.png';
import dubai_logo from '../../assets/dubai_site.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
//Export function for routes
export default function Work() {
    return (
        <div>
            {/* Overview of prvious work */}
        <h1 className='portfolio_title'>Dubai Landscapes</h1>
        {/* Section to contain The description and links for the work */}
        <section className='portfolio_work'>
            {/* Description of task */}
            <article className='portfolio_summary'>
                <h2 className='work_question'>What is it?</h2>
                <p className='work_description'>
                Dubai Landscapes is a website developed using the JavaScript framework 'React'.
                It is designed to be used by a landscaping company based in Dubai. The site is 
                designed to look professional, and fit in with customer expectations for that industry.
                </p>
                {/* Split text */}
                <p className='work_description'>
                The colour scheme identified was green, white, and black. This is to keep with 
                traditional design trends for websites within this industry. The site is hosted on 
                Netlify to allow for a working product to be displayed.
                </p>
            </article>
             {/* Links to the site and Github repository */}
            <article className='portfolio_links'>
                <a href='https://main--3140-dubai-landscapes.netlify.app/'>
                <img className='link1' src={site_logo} alt='Logo for Dubai Landscapes'></img>
                <p className='link_text'>View The Site!</p>
                </a>
                {/* Contain Images and text in link */}
                <a href='https://github.com/rowdysquirrel23/3159_professional_portfolio.git'>
                <img className='link2' src={github} alt='GitHUb icon'></img>
                <p className='link_text'>View The Repository!</p>
                </a>
            </article>
        </section>
        {/* Images of the application */}
        <h2 className='gallery_title'>Gallery!</h2>
        <section className='portfolio_gallery'>
            <img  src={dubai_logo} className='gallery_img' alt='Page of the site'></img>
            <img  src={gallery2} className='gallery_img' alt='Page of the site'></img>
            <img  src={gallery3} className='gallery_img' alt='Page of the site'></img>
        </section>
        </div>
    )
}