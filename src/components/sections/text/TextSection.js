import React from 'react';
import './style.css'
function TextSection(props) {
    return (
        <section className='text'>
            <div className="text__container">
                <div className='section-title'>Text Section</div>
                <div className="text-section-text card">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                   <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                       magni dolores.</p>
                </div>
            </div>
        </section>
    );
}

export default TextSection;