function createBlogPostContainer() {
    const blogPostContainer = UI.createElement('div', {class: 'container__newBlogPost h-600px display-flex jc-space-between fd-column ai-center'},[
        UI.createElement('header', {class: 'header w-90 h-100px display-flex ai-center js-flex-end' },[
            UI.createElement('a', {class: 'header__link td-none transition-5', href: 'home.html'}, 'Home')
        ]),
        UI.createElement('form', {class: 'form__box w-400px h-500px display-flex fd-column jc-space-between ai-center', id: 'createPostForm'},[ 
            UI.createElement('h2', {class: 'title__newBlogPost'}, 'New Blog Post'),
            UI.createElement('input', {class: 'input__title__newBlogPost w-150px h-40px', placeholder: 'Title', type: 'text' }),
            UI.createElement('textarea', {class: 'textarea__newBlogPost w-200px h-200px ta-center', placeholder: 'Post Story'}),
            UI.createElement('input', {type: 'url',  placeholder:"https://wellsvillesun.com/wp-content/uploads/2024/01/pride-and-prejudice-book-summary.jpg.webp" , class: 'input-url'}),
            UI.createElement('input', {class: 'input input-authorName', placeholder: 'Author Name'}),
            UI.createElement('button', {type: 'submit', class: 'submit-btn submit-createNewPost w-100px h-30px' },'Create Blog')
        ])
    ]);

    UI.render(blogPostContainer, 'body');

    
    const form = document.getElementById('createPostForm');
    form.addEventListener('submit', createNewPost);
}

createBlogPostContainer();

function createNewPost(event) {
    event.preventDefault(); 

    const title = document.querySelector('.input__title__newBlogPost').value;
    const postStory = document.querySelector('.textarea__newBlogPost').value;
    const postImage = document.querySelector('.input-url').value;
    const authorName = document.querySelector('.input-authorName').value;

    if (!title || !postStory || !postImage || !authorName) {
        alert('Please fill out all fields.');
        return;
    }


    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    const newPost = {
        id: posts.length+ 1,
        title: title,
        story: postStory,
        authorName: authorName,  
        img: postImage
    };

   
    posts.push(newPost);

    
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'home.html'; 
}











