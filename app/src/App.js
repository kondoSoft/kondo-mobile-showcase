import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// External
import Header from './components/header'
import Footer from './components/footer'
import MainContent from './components/maincontent'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      app:{
        name:'Que Hacer Merida',
        type:'mobile',
        iosStore:'https://itunes.apple.com/us/app/que-hacer-merida/id1236386431?mt=8',
        googleStore:'https://play.google.com/store/apps/details?id=com.que_hacer_merida&hl=es',
        image:'../img/iPhone-6-Mockup.png',
        video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/pIAV9gdpsgI" frameborder="0" allowfullscreen></iframe>',
        slogan:'A YELP like app made with react native.',
        sloganTitle:'Que Hacer Merida',
        description:'Que Hacer Merida is an mobile app that was made in a month time span, using react native, REDUX, SAGAS and rehydrate. The app uses an Django back end with Django Rest Framework, and it is deployed on a virtual server ready for production.',
        jsTitle:'Javascript all the way',
        jsDescription:'Write it once use it twice, just using JS as code base for IOS & Android.',
        features:{
          title:'Find everything you want...',
          features:{
            Geolocation:{
                text:'Every establishment is geolocated, using phone gps.',
                icon: 'fa-map-marker'
            },
            Bookmark:{
              text:'You can bookmark your favorite restaurant or store.',
              icon:'fa-heart'
            },
            Dynamic_Search:{
              text:'Due our dinamic search you could find a establishment by name or category.',
              icon:'fa-search'
            },
            Rehydrate:{
              text: 'Local first tech, you don\'t need to be online to access local data',
              icon: 'fa-hdd-o'
            },
            Responsive:{
              text:'The code is prepared for any size device.',
              icon:'fa-tablet'
            },
            Ract_Native:{
              text:'Write it once use it everywhere',
              icon:'fa-code'
            }
          }
        }
      },
      menu:[
        {
          name:'Kondo Soft',
          href:'#kondo',
        },
        {
          name:'QHM',
          href:'#qhm'
        },
        {
          name:'Caracteristicas',
          href:'#caracteristicas'
        }
      ]
    }
  }

  render() {
    const {menu, app} = this.state
    return (
      <div className="App">
        <Header menu={menu}/>

            <MainContent app={app}/>

        <Footer/>
      </div>
    );
  }
}

export default App;
