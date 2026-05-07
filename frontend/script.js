const contentDiv = document.getElementById('content');

// ၂။ Backend ဆီကနေ Data သွားတောင်းတဲ့ Function
async function loadBlogPosts() {
    try {
        // မင်းရဲ့ Render Backend URL ကို ဒီမှာသေချာထည့်ပါ
        const response = await fetch('https://my-blog-5ygr.onrender.com/posts');
        const posts = await response.json();

        // အရင်ရှိနေတဲ့ စာဟောင်းတွေကို ရှင်းထုတ်မယ်
        contentDiv.innerHTML = '';

        // ၃။ ရလာတဲ့ data တွေကို မင်း ခုနကပြောတဲ့ code လေးနဲ့ ပတ်ပြီးပြမယ်
        posts.forEach(post => {
            contentDiv.innerHTML += `
                <div class="card">
                    <span style="color: #2563eb; font-size: 0.8rem; font-weight: bold;">NEW LESSON</span>
                    <h2 style="margin: 10px 0; color: #1e293b;">${post.title}</h2>
                    <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 15px;">${post.content}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 15px;">
                        <small>By: <b>${post.author}</b></small>
                        <a href="#" style="color: #2563eb; text-decoration: none; font-weight: 600;">Read More →</a>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        contentDiv.innerHTML = '<p>သင်ခန်းစာများ ဆွဲယူရာတွင် အမှားအယွင်းရှိနေပါသည်။</p>';
    }
}

// ၄။ Website ပွင့်တာနဲ့ အပေါ်က function ကို စခိုင်းမယ်
loadBlogPosts();