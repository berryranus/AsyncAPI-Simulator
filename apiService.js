// apiService.js
import { posts, comments } from './data.js';

// 1. Tüm postları getiren fonksiyon (1 saniye gecikmeli)
export function fetchAllPosts() {
    return new Promise((resolve, reject) => {
        console.log("Fetching all posts...");
        setTimeout(() => {
            resolve(posts);
        }, 1000);
    });
}

// 2. ID'ye göre post bulan fonksiyon (500ms gecikmeli)
export function findPostById(id) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching post with id: ${id}...`);
        setTimeout(() => {
            const post = posts.find(p => p.id === id);
            if (post) {
                resolve(post);
            } else {
                reject("Error: Post not found");
            }
        }, 500);
    });
}

// 3. Post ID'sine göre yorumları getiren fonksiyon (500ms gecikmeli)
export function fetchCommentsByPostId(postId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching comments for post id: ${postId}...`);
        setTimeout(() => {
            const postComments = comments.filter(c => c.postId === postId);
            resolve(postComments);
        }, 500);
    });
}