import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    async getAllUsers() {
        return {
            message: "test"
        };
    }
}
