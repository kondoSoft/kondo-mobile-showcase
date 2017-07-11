import React from 'react'

var Footer = (props)=>{

  return(
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 newsletter">
                    <h3>
                        Are you  <strong>Interested?</strong>
                    </h3>
                    <p className="small pt5 pb10">
                        We won't bite! Give us your mail, we shortly contact you, and happly assist you on any matter you need.
                    </p>

                    <div className="subscribe-container">
                        <form action="#">
                            <div className="subscribe-form">
                                <input type="email" name="email" placeholder="Enter your email here..."/>
                                <button type="submit"><i className="fa fa-send"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-lg-offset-1">
                    <h3>
                        Other <strong>Apps</strong>
                    </h3>
                    <ul className="Keywords">
                        <li><a href="#">Kondo Invader</a></li>
                        <li><a href="#">Easy Light</a></li>
                        <li><a href="#">Attack of Trump</a></li>
                        <li><a href="#">Of The wall ARAPAHO</a></li>
                        <li><a href="#">Nuvote</a></li>
                        <li><a href="#">Yum</a></li>

                    </ul>
                </div>
            </div>
            <div className="row footer2">
                <div className="col-sm-12">
                  <hr/>
                </div>
                <div className="col-sm-6">
                    <p className="copyright">Copyright 2017 <i className="fa fa-copyright"></i> Kondo Soft. All Rights Reserved.</p>
                </div>
                <div className="col-sm-6 text-right">

                    <ul className="list-inline small">
                        <li><a href="#">Terms of use</a></li>
                        <li className="footer-menu-divider"><i className="fa fa-circle-o"></i></li>
                        <li><a href="#">Privacy and policy</a></li>
                        <li className="footer-menu-divider"><i className="fa fa-circle-o"></i></li>
                        <li><a href="#" className="scroll-nav">Contact us</a></li>
                        <li className="footer-menu-divider"><i className="fa fa-circle-o"></i></li>
                        <li><a href="#">Credits</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer
