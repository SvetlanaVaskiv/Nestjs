import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.models";
import { UsersService } from "./users.service";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
}
