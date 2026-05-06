async function loadBlogPosts() {
    try {
        const response = await fetch('http://localhost:8000/api/posts');
        const posts = await response.json();

        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ""; // အဟောင်းတွေကို ရှင်းထုတ်မယ်

        posts.forEach(post => {
            contentDiv.innerHTML += `
                <div style="border-bottom: 1px solid #ddd; margin-bottom: 20px; padding-bottom: 10px;">
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <small>By: ${post.author}</small>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

loadBlogPosts();