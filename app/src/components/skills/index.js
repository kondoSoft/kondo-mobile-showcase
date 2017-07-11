import React from 'react'

var Skills = (props)=>{
  const { menu } = props
  return(
    <section className="content-section-d vertical-center parallax" data-stellar-background-ratio="0.5" id="skills">
        <div className="container">
            <div className="row p0">
                <div className="col-md-12 text-center">
                    <h2 className="section-heading wow fadeInUp">The App <strong>Skills</strong></h2>
                    <span className="separator2"></span>
                    <p className="section-subheading2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div className="col-sm-3 text-center">
                    <div className="progress-circle">
                        <div className="chart" data-percent="95" data-scale-color="#ddd">
                            <span>95%</span>
                            <canvas height="120" width="120"></canvas>
                        </div>
                        <p className="progress-text">HTML5 / CSS3</p>
                    </div>
                </div>
                <div className="col-sm-3 text-center">
                    <div className="progress-circle">
                        <div className="chart" data-percent="85" data-scale-color="#ddd">
                            <span>85%</span>
                            <canvas height="120" width="120"></canvas>
                        </div>
                        <p className="progress-text">WORDPRESS</p>
                    </div>
                </div>
                <div className="col-sm-3 text-center">
                    <div className="progress-circle">
                        <div className="chart" data-percent="75" data-scale-color="#ddd">
                            <span>75%</span>
                            <canvas height="120" width="120"></canvas>
                        </div>
                        <p className="progress-text">Jquery</p>
                    </div>
                </div>
                <div className="col-sm-3 text-center">
                    <div className="progress-circle">
                        <div className="chart" data-percent="89" data-scale-color="#ddd">
                            <span>89%</span>
                            <canvas height="120" width="120"></canvas>
                        </div>
                        <p className="progress-text">Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>
                            You can win if you want &nbsp;
                            <a href="#pricing" className="btn btn-theme scroll-nav"><i className="fa fa-cart-arrow-down"></i> See our plans</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
export default Skills
