// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 标签过滤功能
    initTagFilter();
    
    // 平滑滚动
    initSmoothScroll();
    
    // 移动端导航
    initMobileNav();
});

function initTagFilter() {
    const tagLinks = document.querySelectorAll('.tag-link');
    const postCards = document.querySelectorAll('.post-card');
    
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedTag = this.getAttribute('data-tag');
            
            // 更新活动标签样式
            tagLinks.forEach(tag => tag.classList.remove('active'));
            this.classList.add('active');
            
            // 过滤文章
            postCards.forEach(card => {
                const postTags = card.getAttribute('data-tags');
                if (!selectedTag || postTags.includes(selectedTag)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initMobileNav() {
    // 可以在这里添加移动端导航的切换功能
    const nav = document.querySelector('.site-nav');
    const header = document.querySelector('.site-header');
    
    // 滚动时隐藏/显示导航
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 添加搜索功能
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const posts = document.querySelectorAll('.post-card');
            
            posts.forEach(post => {
                const title = post.querySelector('.post-title').textContent.toLowerCase();
                const content = post.querySelector('.post-excerpt').textContent.toLowerCase();
                
                if (title.includes(query) || content.includes(query)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
}