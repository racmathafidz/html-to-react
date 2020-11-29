import React from 'react'
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header'
import Section from 'elements/Section'
import Clients from 'parts/Clients'
import Feature from 'parts/Feature'
import Card from 'elements/Card'
import Lists from 'elements/Lists'
import Button from 'elements/Button'
import Footer from 'parts/Footer'

import HeroImage from 'assets/images/hero-image.png'
import Feature01 from 'assets/images/feature-tile-icon-01.svg'
import Feature02 from 'assets/images/feature-tile-icon-02.svg'
import Feature03 from 'assets/images/feature-tile-icon-03.svg'

export default function Homepage() {

    const feature = [
        {
            img: Feature01,
            imgAlt: "Feature 01",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web design in place of things to emphasise design."
        },
        {
            img: Feature02,
            imgAlt: "Feature 02",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web layout in place of things to emphasise design."
        },
        {
            img: Feature03,
            imgAlt: "Feature 03",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web printing in place of things to emphasise design."
        }
    ];

    const listPricing = [
        {
            price: 27,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"}
            ]
        },
        {
            price: 47,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: false, content: "Excepteur sint occaecat velit"}
            ]
        },
        {
            price: 67,
            currencySymbol: "$",
            description: "Lorem ipsum is a common text",
            features: [
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"},
                {isChecked: true, content: "Excepteur sint occaecat velit"}
            ]
        }
    ]

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
                <Section className="features-tiles">
                    <div class="container">
						<div class="features-tiles-inner section-inner">
                            <div class="tiles-wrap">
                                {feature.map((element,index) => 
                                    <Feature key={index} 
                                    delayInMS={index * 1000} 
                                    data={element}/>)
                                }
                                
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="pricing section">
                    <div class="container">
                            <div
                                class="pricing-inner section-inner has-top-divider"
                            >
                                <div class="section-header center-content">
                                    <div class="container-xs">
                                        <h2 class="mt-0 mb-16">
                                            Simple, transarent pricing
                                        </h2>
                                        <p class="m-0">
                                            Lorem ipsum is common placeholder text
                                            used to demonstrate the graphic elements
                                            of a document or visual presentation.
                                        </p>
                                    </div>
                                </div>
                                <div class="tiles-wrap">
                                    {listPricing.map((list, index) => <Card hasShadow>
                                        <div class="pricing-item-content">
											<div
												class="pricing-item-header pb-24 mb-24"
											>
												<div
													class="pricing-item-price mb-4"
												>
													<span
														class="pricing-item-price-currency h2"
														>{list.currencySymbol}</span
													><span
														class="pricing-item-price-amount h1 pricing-switchable"
														data-pricing-monthly="54"
														data-pricing-yearly="47"
														>{list.price}</span
													>
												</div>
												<div
													class="text-xs text-color-low"
												>
													{list.description}
												</div>
											</div>
											<div
												class="pricing-item-features mb-40"
											>
												<div
													class="pricing-item-features-title h6 text-xs text-color-high mb-24"
												>
													What’s included
												</div>
                                                <Lists data={list.features} isSmall className="pricing-item-features-list mb-32"></Lists>
												
											</div>
										</div>
										<div class="pricing-item-cta mb-8">
											
                                                    <Button isSmall isBlock isPrimary>Start Free Trial</Button>
                                                    
										</div>
                                    </Card>)}                                    
                                </div>
                            </div>
                    </div>
                </Section>
            </main>
            <Footer/>
        </div>
    )
}
