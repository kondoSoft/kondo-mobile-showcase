import React from 'react'

var Footer = (props)=>{
  
  return(
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 newsletter">
                    <h3>
                        Subscribe to <strong>Newsletter</strong>
                    </h3>
                    <p className="small pt5 pb10">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit in pulvinar amet lacus sit amet consectetur adipiscing elit in pulvina.
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
                        Some <strong>Keywords</strong>
                    </h3>
                    <ul className="Keywords">
                        <li><a href="#">Bootstrap template</a></li>
                        <li><a href="#">Template bootstrap</a></li>
                        <li><a href="#">HTML5 template</a></li>
                        <li><a href="#">Modern theme</a></li>
                        <li><a href="#">Twitter Bootstrap</a></li>
                        <li><a href="#">Premium theme</a></li>
                        <li><a href="#">Template premium</a></li>
                        <li><a href="#">Buy business theme</a></li>
                        <li><a href="#">Beautiful theme</a></li>
                        <li><a href="#">Responsive theme</a></li>
                        <li><a href="#">HTML5 and CSS3</a></li>
                        <li><a href="#">Landing page</a></li>
                    </ul>
                </div>
            </div>
            <div className="row footer2">
                <div className="col-sm-12">
                  <hr/>
                </div>
                <div className="col-sm-6">
                    <p className="copyright">Copyright 2016 <i className="fa fa-copyright"></i> Your Company. All Rights Reserved.</p>
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
