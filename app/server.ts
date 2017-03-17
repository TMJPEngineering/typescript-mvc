import * as express  from 'express';
import {Config} from './config';
import {Routes} from './http';

class Server{

	private app:express.Application = express();
	constructor(public port:any){

		this.config()
		.routes();

	}

	private config(){
		new Config(this.app)
		return this;
	}

	private routes(){
		new Routes(this.app);
		return this;
	}

	run(){
		this.app.listen(this.port,()=>{
			console.log('Listening to port:' + this.port);
		});
	}	
}


const server = new Server(9000);
server.run();