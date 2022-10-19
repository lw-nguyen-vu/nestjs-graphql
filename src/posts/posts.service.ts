import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const post = new Post();

    post.title = createPostInput.title;
    post.description = createPostInput.description;

    return await this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    return await this.postRepository.findOneOrFail({ where: { id } });
  }

  async update(
    id: number,
    updatePostInput: UpdatePostInput,
  ): Promise<UpdateResult> {
    return await this.postRepository.update(id, updatePostInput);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.postRepository.delete(id);
  }
}
