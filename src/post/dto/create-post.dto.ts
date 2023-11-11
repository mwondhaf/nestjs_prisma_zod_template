import { createZodDto } from 'nestjs-zod';
import { ZodString, ZodError, ZodIssue, z } from 'nestjs-zod/z';

const CreatePostSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export class CreatePostDto extends createZodDto(CreatePostSchema) {}
