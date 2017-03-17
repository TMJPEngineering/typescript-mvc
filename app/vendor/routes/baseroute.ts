import { Router ,Request ,Response ,NextFunction } from 'express';

import {Controller} from '../controller';
export class BaseRoute{
		
		constructor(public app:any){
					
		};

		router(){
			return this;
		}

		get(url:string,name?:any){
			this.app.get(url,function(req:Request,res:Response){
				res.send('hello');
			});
			
		}

		controller(){
			return new Controller();
		}
		

}	


