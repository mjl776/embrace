import React from 'react';
import "./Jury.css"
import { Row, Col } from "react-bootstrap"
import image from "../../Images/Jury/EM.png";
import image2 from "../../Images/Jury/LD.png";
import image3 from "../../Images/Jury/SS.png";
import image4 from "../../Images/Jury/KA.png";
import image5 from "../../Images/Jury/LS.png";
import image6 from "../../Images/Jury/MG.png";
import image7 from "../../Images/Jury/SM.png";
import image8 from "../../Images/Jury/AW.png";


const Jury = () => {
    return (
        <div className = "jury-container">
            <header>
                The Jury
            </header>
                <Row className = "jury-row">
                    <div className = "jury-wrapper jury-flex">
                        <Col className = "jury-child">
                            <img src = { image } alt = "Emma Aruda"/>
                            <div className = "jury-header">
                                Emm Arruda
                            </div>
                            <p className = "jury-description">
                                Emma Arruda is one of the world’s
                                top models walking alongside
                                Gigi Hadid and Kaia Gerber
                                on major runways.
                                She has modeled for Chanel, Louis Vuitton, Valentino, and Ralph Lauren.
                                The first model ambassador for nonprofit Setting Scoliosis Straight, she's
                                determined to teach others about the condition.
                            </p>
                        </Col>
                        <Col className = "jury-child">
                            <img src = { image2 } alt = "Emma Aruda"/>
                            <div className = "jury-header">
                                Dr. Lori Dolan
                            </div>
                            <p className = "jury-description">
                            Dr. Lori Dolan is the PhD powerhouse behind the
                            Bracing in Adolescent Idiopathic Scoliosis Trial
                            (BRAIST) and subsequent publications
                            in New England Journal of Medicine and other respected journals.
                            She is also apart of the SOSORT leadership.
                            </p>
                        </Col>
                        <Col className = "jury-child">
                            <img src = { image3 } alt = "Emma Aruda"/>
                            <div className = "jury-header">
                                Shae Smith
                            </div>
                            <p className = "jury-description">
                            Shae was Miss Springfield’s Outstanding Teen 2018 and she is a major advocate for early stage detection, intervention and awareness of Scoliosis.
                            She has also lobbied to
                            MO government officials to mandate school screenings across the state
                            and filed Senate Resolution No. 51 declaring September
                            1st Scoliosis Awareness Day in MO
                            </p>
                        </Col>
                        <Col className = "jury-child">
                            <img src = { image4 } alt = "Emma Aruda"/>
                            <div className = "jury-header">
                                Kiki Anderson
                            </div>
                            <p className = "jury-description">
                            Before being a comedian,
                            Kiki Anderson was an Emmy
                            award-winning news reporter.
                            She has performed at world
                            class venues including the Comedy
                            Store and the Hollywood improv alongside
                            Bill Burr, Whitney Cummings, Jim Jeffries, and Nick Kroll.
                            </p>
                        </Col>
                        <Col className = "jury-child">
                            <img src = { image5 } alt = "Leah Stoltz"/>
                            <div className = "jury-header">
                                Leah Stoltz
                            </div>
                            <p className = "jury-description">
                            Leah Stoltz is the founder of Curvy Girls, an international
                            scoliosis peer support group for girls.
                            She has won a TeenNick halo award and
                            has empowered women with Scoliosis worldwide.
                            </p>
                        </Col>
                        <Col className = "jury-child">
                            <img src = { image6 } alt = "Leah Stoltz"/>
                            <div className = "jury-header">
                                Megan Glahn
                            </div>
                            <p className = "jury-description">
                                Megan Glahn is the founder of Scolios-us, a web-based platform intended to empower
                                scoliosis patients with the proper tools and resources they need
                                to be proper brace wearers. She has presented research at national and international conferences
                                and she is a certified orthotist with a Master's degree from Baylor College of Medicine.
                            </p>
                        </Col>
                        <Col className = "jury-child">
                            <img src = { image7 } alt = "Leah Stoltz"/>
                            <div className = "jury-header">
                                Stacey Mears
                            </div>
                            <p className = "jury-description">
                            Stacey Mears is the founder of Brace Buddies,
                            a clothing line dedicated to supported increased
                            brace compliance by meeting the immediate needs of bracers.
                            Needs like comfort, protection to skin, and more clothing
                            options while helping to disguise the brace.
                            Brace Buddies has helped to increase self
                            confidence and improve brace compliance among children, teens, and adults.
                            </p>
                        </Col>
                        <Col className = "jury-child">
                            <img src = { image8 } alt = "Leah Stoltz"/>
                            <div className = "jury-header">
                                Stacey Mears
                            </div>
                            <p className = "jury-description">
                            April Wagner,
                            the blogger behind the popular
                            Champagne Colored Glasses, writes
                            about her favorite fashion, travel, recipes
                            and beauty tips. She's had scoliosis since
                            she was 8 years old and is looking into
                            beginning a foundation to help parents
                            with the cost of medical back braces.
                            Her goal is to empower and give confidence to the everyday woman.
                            </p>
                        </Col>
                    </div>
                </Row>
                <br/>
            </div>
    );
}

export default Jury;