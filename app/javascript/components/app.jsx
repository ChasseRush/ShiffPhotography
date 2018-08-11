import React from 'react'


class Landing extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const welcome  = "Welcome to Shiff Photography";

		return (
			<div>
				<div className="website-name text-center">
					<h1 className="display-3 typewriter">{welcome}</h1>
					<p className="lead"></p>
					<p className="lead"></p>
				</div>
			</div>
		);
	}
}

class AboutMe extends React.Component {
	constructor(props) {
		super(props);
	};


	render() {
		const padTop = {
			'paddingTop': 50,
		};

		const padBot = {
			'paddingBottom': 50,
		};

		const padBoth = {
			'paddingTop': 50,
			'paddingBottom': 50,
		};

		const padBot70 = {
			'paddingBottom': 70,
		};

		const padRight = {
			'paddingRight': 30,
		};

		const padTop30 = {
			'paddingTop': 30,
		};

		const img = {
			'height': '60%',
			'width': '60%',
		};
		return (
			<div className = "container" id = "aboutMe" style = {padBot}>
				<div className = "container text-center" style = {padBoth}>
					<h3>ABOUT ME</h3>
				</div>
				<div className = "container text-center"  style = {padBot70}>
					<em >I love photography, computers, and travelling</em>
				</div>
				<p className = "abMe">My name is Ian and I love photography. I've been doing photography for years now and have honed in my skills as a photograhper and a photo editor. I love to travel too. I've been to Switzerland, The Grand Canyon, the Outer Banks in North Carolina, many conventions, and most recently, Iceland.  </p>
				<div className = "row" style={padTop30}>
					<div className = "col-sm-6 text-center" style = {padRight}>
						<p><b><i className = "container" id = "personalPhoto"></i>Ian Shiff</b></p><br />
						<img className = "img-rounded" src = "/assets/personalImgMain.jpg" style = {img}></img>
					</div>
					<div className = "col-sm-6">
						<p className = "abMe">So this is my website that my boy Chasse Rush set up for me.  I know it looks pretty good but it's not great, he's new at this.  So ya, any complaints go to him, not to me. I'm just the photographer here.  Speaking of photography, I think it would be a great idea if you went and looked at some of my other photos too.  I think they're pretty great and I think you will too.  This website is just to show them off to everyone.  But hey, if you wanna hire me, I'll take the cash.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

class FullPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Landing />
				<AboutMe />
			</div>
		);
	}
}

export {
	Landing,
	AboutMe,
}