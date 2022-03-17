import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from 'src/shared/service/crypto.service';
// библиотека которая снабжает sign() функция для создания JWT
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private cryptoService: CryptoService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const hexPass = this.cryptoService.generate(password);
    return this.userService.findByEmailAndPass(email, hexPass);
  }

  async login(user: any) {
    const payload = { user: user, sub: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
