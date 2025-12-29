// app.js
import { fetchAllPosts, findPostById, fetchCommentsByPostId } from './apiService.js';

// --- MILESTONE 3: Ana Uygulama Mantığı ---
async function displayPostData() {
    try {
        console.log("--- Main Task Output ---");
        
        // A. Tüm postları çek
        const allPosts = await fetchAllPosts();
        // Sadece başlıkları (title) bir dizi olarak yazdır
        console.log("All Post Titles:", allPosts.map(post => post.title));

        // B. ID'si 1 olan postu çek
        const post = await findPostById(1);
        console.log("Single Post Found:", post);

        // C. Bu postun yorumlarını çek
        const postComments = await fetchCommentsByPostId(post.id);
        console.log("Comments:", postComments);

        // D. Optional Chaining (?.) Testi
        // 'details' diye bir alan yok, hata vermeden undefined dönmeli
        console.log("Optional Chaining Check:", post.details?.publishedDate);

        // E. Object Destructuring
        // Post içinden title ve author bilgilerini çıkarıp alıyoruz
        const { title, author } = post;
        console.log(`Destructured Info -> Title: ${title}, Author: ${author}`);

    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// --- CHALLENGE 1: Promise.all ---
async function getPostWithComments(postId) {
    try {
        console.log("\n--- Challenge 1 Output ---");
        // İki işlemi aynı anda (paralel) başlatır
        const [post, comments] = await Promise.all([
            findPostById(postId),
            fetchCommentsByPostId(postId)
        ]);
        
        // Sonuçları birleştir
        const combined = { post, comments };
        console.log("Combined Data:", combined);
        return combined;
    } catch (error) {
        console.error("Challenge 1 Error:", error);
    }
}

// --- CHALLENGE 2: Map & Object.entries ---
async function getFormattedPostData() {
    try {
        console.log("\n--- Challenge 2 Output ---");
        const posts = await fetchAllPosts();

        // Her postun detaylarını "Key: Value" şeklinde yazdır (Sub-Challenge)
        posts.forEach(p => {
            console.log("Post details:");
            Object.entries(p).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
        });

        // Postları "Title: ... Author: ..." formatına çevir
        const formatted = posts.map(p => `Title: ${p.title}, Author: ${p.author}`);
        console.log("Formatted Strings:", formatted);

    } catch (error) {
        console.error("Challenge 2 Error:", error);
    }
}

// --- Fonksiyonları Çalıştırma Sırası ---
// Asenkron oldukları için sırayla çalışmaları adına bu şekilde çağırıyoruz
async function runAll() {
    await displayPostData();
    await getPostWithComments(1);
    await getFormattedPostData();
}

runAll();