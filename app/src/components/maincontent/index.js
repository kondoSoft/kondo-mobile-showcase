import React from 'react'


var MainContent = (props)=>{
  const { app } = props
  const iosLink = (
    <div>
      <h5><i className="fa fa-apple"></i> iOS <small></small></h5>
      <div className="progress">
        <div className="progress-bar wow slideInLeft" role="progressbar" data-value="70" ></div>
      </div>
    </div>
  )
  const googleLink = (
    <div>
      <h5><i className="fa fa-android"></i> Android <small></small></h5>
      <div className="progress">
        <div className="progress-bar wow slideInLeft" role="progressbar" data-value="90" ></div>
      </div>
    </div>
  )
  return(
    <div className="page-content">
    <header className="intro-header parallax" data-stellar-background-ratio="0.2" id="intro">
        <div className="container">
            <div className="row">
                <div className="hidden-xs col-sm-6 col-md-5 hidden-xs">
                    <div className="smartphone parallax" data-stellar-background-ratio="0.4" style={{backgroundImage: `url(${app.image})`}}></div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-7">
                    <div className="intro-message">
                        <div className="visible-xs-block pt20">
                            <img src={app.image} alt="iPhone" className="img-responsive"/>
                        </div>
                        <h2>Kondo soft <strong>{app.name}</strong> {app.type} <strong>App</strong></h2>
                        <div className="header-buttons">
                          <a href={app.iosStore} className="btn btn-theme text-left"><i className="fa fa-apple pull-left fa-2x"></i> <small>Available on</small><br/>App Store&nbsp;</a>
                          <a href={app.googleStore} className="btn btn-theme-alt text-left"><i className="fa fa-android pull-left fa-2x"></i> <small>Available on</small><br/>Google Play&nbsp;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <section className="content-section-a vertical-center" id="about">
        <div className="container">
            <div className="row mb20">
                <div className="col-md-12 text-center">
                    <h2 className="section-heading wow fadeInUp">About <strong className="text-brand">{app.name}</strong></h2>
                    <span className="separator"></span>
                    <p className="section-subheading">{app.slogan}</p>
                </div>
                <div className="col-md-6">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pIAV9gdpsgI" frameBorder="0" allowFullScreen></iframe>

                </div>
                <div className="visible-xs-block visible-sm-block pt20"></div>
                <div className="col-md-6 about-info">
                    <h3 className="wow fadeInRight">{app.sloganTitle}</h3>

                    <p>{app.description}</p>

                    <div className="skills row">
                      <div className="col-xs-12 col-sm-8 col-md-7">
                          { app.googleStore ? googleLink : undefined }
                          { app.iosStore ? iosLink : undefined }
                      </div>
                        <div className="col-sm-4 col-md-5">
                            <h4 className="bold">{app.jsTitle}</h4>
                            <p>{app.jsDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="content-section-a vertical-center" id="features">
            <div className="container">
                <div className="row mb20">
                    <div className="col-md-12 text-center">
                        <h2 className="section-heading wow fadeInUp">The App <strong className="text-brand">Features</strong></h2>
                        <span className="separator"></span>
                        <p className="section-subheading">sdd</p>
                    </div>
                    <div className="col-sm-3 col-md-4">
                        <div className="row features-left">
                          {Object.keys(app.features.features).map((key, i)=>{
                            if( i == 2 ){
                              return(
                                <div key = {key}>
                                  <div className="visible-xs-block visible-sm-block pt20"></div>
                                  <div className="col-sm-6 col-md-4">
                                    <div className="slick-carousel" id="screens-slider">
                                      <div><img src="img/screen-login.jpg" alt="Screen"/></div>
                                      <div><img src="img/screen-walkthrough.jpg" alt="Screen"/></div>
                                      <div><img src="img/screen-profile.jpg" alt="Screen"/></div>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                            return (
                            <div key={i} className="col-md-12 feature">
                              <h3 className="title-features wow fadeInLeft"><i className={`fa fa-lg pull-right ${app.features.features[key].icon}`}></i> {key}</h3>
                              <p>{app.features.features[key].text}</p>
                            </div>
                          )})}


                        </div>
                    </div>
                    <div className="visible-xs-block visible-sm-block pt20"></div>

                </div>
            </div>
        </section>




    </div>
  )
}
export default MainContent
