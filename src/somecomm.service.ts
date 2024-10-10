import { Injectable } from'@nestjs/common';
 
@Injectable()
export class SomeService {
getHello(): string {
return'Hello from the common library!';
  }
}