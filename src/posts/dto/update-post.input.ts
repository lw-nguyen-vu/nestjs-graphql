import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreatePostInput } from './create-post.input';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;
}
