import {Router} from "express";

export class MessageRoute{
    public router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
    //    TODO Add routes here
    }
}
