import React from 'react'
import Footer from './footer'
import Animation from '../animation/animi'
import Pics from '../pics/about.jpg'

const About = () => {
    return(
        <div className = "hide-toggle-menu">
            <Animation />
            <div className = "single-post">
                <article className="post-section">
                    <div className="single-index-thumbnails">
                        <img src={Pics} alt="featured pic" />
                        <h2 class="single-post-tittle">About Us</h2>
                    </div>
                    <div class="entry-content">
                        <p>

                        </p>
                        <p class="MsoNormal">
                            <span>
                                Onibata mall is a platform that aims at connecting footwear makers and 
                                their brands to potential customer through Digital marketing and offline
                                marketing. Onibata mall aims at solving the problem of brand 
                                visibility and market barriers that most foot wear makers are facing 
                                by harnessing the power of technological innovation and media to help  
                                footwear makers shift from being overlooked to overbooked.
                                <br/>
                                We also aim to contribute to the achievement of the number 8 of the 
                                sustainable development goals by increasing decent work and economic 
                                growth in Nigeria. We are certain that connecting foot wear makers to 
                                customers and giving customers access to wide range of Nigerian made 
                                products will make us achieve these milestones.
                                <br/>
                            </span>
                        </p>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    ) 
}

export default About