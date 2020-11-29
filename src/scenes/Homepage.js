import React from 'react'
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header'
import Section from 'elements/Section'
import Clients from 'parts/Clients'

import HeroImage from 'assets/images/hero-image.png'

export default function Homepage() {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Section className="hero illustration-section-01" isCenter>
                <div class="container-sm">
						<div class="hero-inner section-inner">
							<div class="hero-content">
                                <Fade bottom delay={500}>
								<h1
									class="mt-0 mb-16 reveal-from-bottom"
									data-reveal-delay="200"
								>
									Landing template for startups
								</h1>
                                </Fade>
								<div class="container-xs">
                                <Fade bottom delay={1000}><p
										class="mt-0 mb-32 reveal-from-bottom"
										data-reveal-delay="400"
									>
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p></Fade>
									
								</div>
							</div>
							<div
								class="hero-figure reveal-from-bottom illustration-element-01"
								data-reveal-value="20px"
								data-reveal-delay="800"
							>
                                <Fade bottom delay={1500}><img
									class="has-shadow"
									src={HeroImage}
									alt="Hero image"
									width="896"
									height="504"
								/></Fade>
								
							</div>
						</div>
					</div>
                </Section>
                <Clients/>
            </main>
        </div>
    )
}
