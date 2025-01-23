import { Media } from '@prisma/client';
export declare class MediaEntity implements Media {
    id: string;
    filename: string;
    authorId: string;
    uploadedAt: Date;
}
