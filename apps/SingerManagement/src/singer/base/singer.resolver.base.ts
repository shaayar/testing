/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Singer } from "./Singer";
import { SingerCountArgs } from "./SingerCountArgs";
import { SingerFindManyArgs } from "./SingerFindManyArgs";
import { SingerFindUniqueArgs } from "./SingerFindUniqueArgs";
import { CreateSingerArgs } from "./CreateSingerArgs";
import { UpdateSingerArgs } from "./UpdateSingerArgs";
import { DeleteSingerArgs } from "./DeleteSingerArgs";
import { SingerService } from "../singer.service";
@graphql.Resolver(() => Singer)
export class SingerResolverBase {
  constructor(protected readonly service: SingerService) {}

  async _singersMeta(
    @graphql.Args() args: SingerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Singer])
  async singers(@graphql.Args() args: SingerFindManyArgs): Promise<Singer[]> {
    return this.service.singers(args);
  }

  @graphql.Query(() => Singer, { nullable: true })
  async singer(
    @graphql.Args() args: SingerFindUniqueArgs
  ): Promise<Singer | null> {
    const result = await this.service.singer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Singer)
  async createSinger(@graphql.Args() args: CreateSingerArgs): Promise<Singer> {
    return await this.service.createSinger({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Singer)
  async updateSinger(
    @graphql.Args() args: UpdateSingerArgs
  ): Promise<Singer | null> {
    try {
      return await this.service.updateSinger({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Singer)
  async deleteSinger(
    @graphql.Args() args: DeleteSingerArgs
  ): Promise<Singer | null> {
    try {
      return await this.service.deleteSinger(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
