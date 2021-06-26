import React from 'react';
import './App.css';
import Header from './componentss/header/header';
import Footer from './componentss/footer/footer';
import Main from './componentss/main/main';
import Actors from './componentss/actors/actors';
import Video from './componentss/video/video';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			page: 1,
		}
	}

	changeToMain = () => {
		this.setState({page: 1});
	};
	changeToActors = () => {
		this.setState({page: 2});
	}
	changeToVideo = () => {
		this.setState({page: 3});
	}

	mainPage = () => {
		return(
			<div>
				<Header main={this.changeToMain} actors={this.changeToActors} video={this.changeToVideo} />
				<Main />
				<Footer />
			</div>
		)
	}
	actorsPage = () => {
		return(
			<div>
				<Header main={this.changeToMain} actors={this.changeToActors} video={this.changeToVideo} />
				<Actors />
				<Footer />
			</div>
		)
	}
	videoPage = () => {
		return(
			<div>
				<Header main={this.changeToMain} actors={this.changeToActors} video={this.changeToVideo} />
				<Video />
				<Footer />
			</div>
		)
	}

	render(){
		if(this.state.page === 1){
			return this.mainPage();
		} else if (this.state.page === 2){
			return this.actorsPage();
		} else if (this.state.page === 3){
			return this.videoPage();
		};
	};
};


export default App;