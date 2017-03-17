import { Router ,Request ,Response ,NextFunction } from 'express';


export class HomeController{
	
	constructor(){

	}

	index(req:Request,res:Response){
		res.send('home');
	}
}

