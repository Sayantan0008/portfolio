export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
}