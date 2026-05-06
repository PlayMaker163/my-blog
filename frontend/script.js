async function loadBlogPosts() {
    try {
        // fetch ထဲမှာ Render Backend URL ကို အမှန်အတိုင်း ထည့်ထားတယ်
        const response = await fetch('https://my-blog-5ygr.onrender.com/posts');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const posts = await response.json();
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = "";

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
        console.error("Error loading posts:", error);
        document.getElementById('content').innerHTML = "စာမူများ ဆွဲယူရာတွင် အမှားအယွင်း ရှိနေပါသည်။";
    }
}

loadBlogPosts();