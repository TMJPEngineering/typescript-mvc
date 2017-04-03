import * as express  from 'express';
import * as path from 'path';
export class Config{
	
	constructor(private app:any){
		
		
		this.static();

	}

	static(){		
		console.log(path.join(__dirname, '../resources/assets'));
		this.app.use("/node_modules", express.static(path.join(__dirname, '../../../node_modules')));
		this.app.use("/assets", express.static(path.join(__dirname, '../resources/assets')));
		this.app.use("/dist", express.static(path.join(__dirname, '../resources/assets/dist')));
	}

	

}
