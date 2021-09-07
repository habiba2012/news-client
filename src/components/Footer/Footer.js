import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollHandler = () => {
        window.scrollTo(500, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, []);
    return (
        <div>
            <footer id="dk-footer" className="dk-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="dk-footer-box-info">
                                <a href="index.html" className="footer-logo">
                                    <h1 className="text-decoration-none"> TechBlog 💬</h1>
                                </a>
                                <p className="footer-info-text text-white">
                                    All new technology information are available in TechBlog.
                        </p>
                                <div className="footer-social-link">
                                    <h3>Follow us</h3>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook fa-2x pr-4"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter fa-2x pr-4"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-google-plus fa-2x pr-4 "></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin fa-2x pr-4"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram fa-2x pr-4"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>


                        </div>

                        <div className="col-md-12 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-us">
                                        <div className="contact-icon text-white">
                                            <i className="fab fa-map-o" aria-hidden="true"></i>
                                        </div>

                                        <div className="contact-info">
                                            <h3>Piazza del Colosseo, 1</h3>
                                            <p>00184 Roma</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="contact-us contact-us-last">
                                        <div className="contact-icon">
                                            <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                        </div>

                                        <div className="contact-info">
                                            <h3>(+39) 714532</h3>
                                            <p>Give us a call</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="footer-widget footer-left-widget">
                                        <div className="section-heading">
                                            <h3>Useful Links</h3>
                                            <span className="animate-border border-black"></span>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">About us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Projects</a>
                                            </li>
                                            <li>
                                                <a href="#">Our Team</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <a href="#">Contact us</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                                <div className="col-md-12 col-lg-6">
                                    <div className="footer-widget">
                                        <div className="section-heading">
                                            <h3>Subscribe</h3>
                                            <span className="animate-border border-black"></span>
                                        </div>
                                        <p className="text-muted">
                                            Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                                        <form action="#">
                                            <div className="form-row">
                                                <div className="col dk-footer-form">
                                                    <input type="email" className="form-control" placeholder="Email Address" />
                                                    <button type="submit">
                                                        <i className="fa fa-send"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <span>Copyright © 2021, All Right Reserved TechBlog</span>
                            </div>

                            <div className="col-md-6">
                                <div className="copyright-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div id="back-to-top" className="back-to-top">
                    <button onClick={scrollHandler} className="btn btn-dark" title="Back to Top" style={{ display: "block" }}>
                        <i className="fa fa-angle-up"></i>
                    </button>
                </div>

            </footer>

        </div>
    );
};

export default Footer;
