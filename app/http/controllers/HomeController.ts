import { Router ,Request ,Response ,NextFunction } from 'express';
import * as Model from '../models';

export class HomeController{
	
	constructor(){
	
	}

	index(req:Request,res:Response){
		res.send('home');
	}
}

