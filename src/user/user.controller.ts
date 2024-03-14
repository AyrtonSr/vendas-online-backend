import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';

@Controller('user')
export class UserController {

    @Post()
    async createuser(@Body() createUser: CreateUserDto) {
        return {
            ...createUser,
            password: undefined,
        };
    }
}
