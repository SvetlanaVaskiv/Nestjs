import { AppService } from "./app.service";
export declare class AppController {
    private appSevice;
    constructor(appSevice: AppService);
    getUsers(): {
        id: number;
        name: string;
    }[];
}
