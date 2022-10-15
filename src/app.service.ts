import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { Model } from 'mongoose';
import { Search } from '../models/user.model';

@Injectable()
export class AppService {
  constructor(
    private readonly searchModel: Model<Search>,
    private readonly httpService: HttpService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async searchData(body: any, req: any, res: any) {
    const { q } = body;
    try {
      const response = await this.getEndpoint('http://localhost:3000/LtsItem');
      console.log(response);
      const result = await this.searchModel.aggregate([
        { $match: { $text: { $search: q } } },
      ]);
      return result;
    } catch (error) {
      console.log('Error: ' + error);
    }
    console.log(body);
    return 'searchData';
  }

  private getEndpoint(url): Promise<any> {
    return lastValueFrom(
      this.httpService.get<any>(url).pipe(
        map((res) => {
          return res.data;
        }),
      ),
    );
  }
}
