import React from 'react';
import './Contact.css'

const Contact = () => {

    return (
        <div>
            <div className="row" id="contact">
                <div className="container mt-5" >

                    <div className="row" style={{ height: "550px" }}>
                        <div className="col-md-6 maps" >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-uppercase mt-3 font-weight-bold text-white">CONTACT US</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control mt-2" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control mt-2" placeholder="Subject" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control mt-2" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="number" className="form-control mt-2" placeholder="Telephone" required />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="form-group">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Messages" rows="3" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                                <label className="form-check-label" for="invalidCheck2">
                                                    Accept the conditions
                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-light" type="submit">Send</button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-white">
                                <h2 className="text-uppercase mt-4 font-weight-bold">TechBlog</h2>

                                <i className="fas fa-phone mt-3"></i> <a href="tel:+">(+39) 714532</a><br />
                                <i className="fas fa-phone mt-3"></i> <a href="tel:+">(+39) 123456</a><br />
                                <i className="fa fa-envelope mt-3"></i> <a href="">techblog@test.it</a><br />
                                <i className="fas fa-globe mt-3"></i> Piazza del Colosseo, 1, 00184 Roma<br />
                                <i className="fas fa-globe mt-3"></i> Piazza del Colosseo, 1, 00184 Roma<br />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;