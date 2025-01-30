import { Controller, Get } from '@nestjs/common';

@Controller('public-api')
export class PublicController {
  @Get()
  getPublicApi() {
    const response = {
      email: 'odedeleg@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/olugbenga1/public-api',
    };
    return response;
  }
}
