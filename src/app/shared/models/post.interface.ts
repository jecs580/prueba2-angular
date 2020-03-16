//  Modelo para Post.
export interface Post {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost?: string;
    tagsPost: string;
    fileRef?: string;
}
