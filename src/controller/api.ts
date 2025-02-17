import { Inject, Controller, Post, Query, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/web';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query('uid') uid: string): Promise<IGetUserResponse> {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
}
