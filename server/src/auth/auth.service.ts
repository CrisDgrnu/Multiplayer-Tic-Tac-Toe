import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {}

    async signup(dto: SignUpDto) {
        const hash = await argon.hash(dto.password);

        try {
            const user = await this.prismaService.user.create({
                data: {
                    ...dto,
                    password: hash,
                },
            });

            delete user.password;

            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002')
                    throw new ForbiddenException('Credentials taken');
            }

            throw error;
        }
    }

    signin() {}
}
