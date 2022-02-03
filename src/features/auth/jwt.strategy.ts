import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // метод при котором JWT будет извлечен в request
      ignoreExpiration: false,
      //если наш маршрут снабжен JWT с истекшим сроком действия, запрос будет отклонен. и 401 ошибка
      secretOrKey: jwtConstants.secret,
      usernameField: 'email',
      // секрета для подписи токена
    });
  }

  async validate(payload: any) {
    /*Passport сначала проверяет подпись JWT и декодирует JSON. 
    Затем он вызывает наш validate()метод, передающий декодированный JSON 
    в качестве единственного параметра */
    return { userId: payload.sub, username: payload.username };

    //возвращаем объект, содержащий userId и username характеристики
  }
}
