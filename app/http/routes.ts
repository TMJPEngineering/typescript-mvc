import {BaseRoute} from "../vendor/routes";
import * as CTRL from './controllers';
export class Routes extends BaseRoute{
	
	constructor(public app:any){
		super(app);
		this.init();
	}

	/*
		Initialize routes
	*/
	init(){
				
		let app = this.app;

		app.get('/',new CTRL.UserController().index);
		app.get('/home',new CTRL.HomeController().index);				
	}

}