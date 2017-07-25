import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// External
import Header from './components/header'
import Footer from './components/footer'
import MainContent from './components/maincontent'

//Fire base soon to be relocated


import Rebase from 're-base'

// var firebase = require('firebase/app')
// var database = require('firebase/database')
//
// var app = firebase.initializeApp({
//     apiKey: "AIzaSyAtNngt6o4lStlh88RcwLtq2b5zbUccSXc",
//     authDomain: "kondo-portfolio.firebaseapp.com",
//     databaseURL: "https://kondo-portfolio.firebaseio.com",
//     // projectId: "kondo-portfolio",
//     storageBucket: "kondo-portfolio.appspot.com",
//     messagingSenderId: "172379979203"
// })

// var db = database(app)
// console.log(db);
var base = Rebase.createClass({
    apiKey: "AIzaSyAtNngt6o4lStlh88RcwLtq2b5zbUccSXc",
    authDomain: "kondo-portfolio.firebaseapp.com",
    databaseURL: "https://kondo-portfolio.firebaseio.com",

})


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
        features:{title:'sd'},
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


  componentDidMount(){
    this.ref = base.syncState('kondo-portfolio', {
      context: this,
      state: 'app',
    })
  }
  componentWillUpdate(nextProps, nextState){

  }
  render() {
    console.log(this.state);
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
