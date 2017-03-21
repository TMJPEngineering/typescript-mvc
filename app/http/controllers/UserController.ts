import { Router ,Request ,Response ,NextFunction } from 'express';
import * as Model from '../models';

export class UserController{
	public model:Model.UserModel;
	constructor(){
		this.model = new Model.UserModel();
	}
	
	index(req:Request,res:Response){

		this.model.getUser().then(function(user){
			console.log(user);
			res.send(user);
		});
		
	}

}

