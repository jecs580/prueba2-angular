//  Modelo para Post.
export interface Post {
    id: string;
    tittlePost: string;
    contentPost: string;
    imagePost?: string;
    tagsPost: string;
    fileRef?: string;
}
