import * as React from 'react';
interface ILoginState{
	username:string;
	password:string;

}

export class Login extends React.Component<{},ILoginState>{

	constructor(){
		super();
		this.state = {username:"",password:""};
		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}

	login(e:any){
		
		/*
			Use any http request library
		*/
		window.location.assign('/home');
		e.preventDefault();
	}

	handleChange(event:any){
		
		this.setState({
			[event.target.name]:event.target.value
		});
		
	}

	render(){
		return(
			<div>
				<h1>Login</h1>
				<form onSubmit={this.login} method="post">
					<input type="text" name="username"value={this.state.username} onChange={this.handleChange}placeholder="username"/><br/>
					<input type="password" name="password"value={this.state.password} onChange={this.handleChange} placeholder="password"/><br/>
					<button>Login</button>
				</form>
			</div>
		);
	}
}