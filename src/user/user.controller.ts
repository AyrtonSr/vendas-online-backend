import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    async getAlusers() {
        return JSON.stringify({ test: 'abc' })
    }
}
