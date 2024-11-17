function createBloggerCard(blogger) {
    return UI.createElement('div', { class: 'blogger w-90 h-150px display-flex jc-space-between ai-center' }, [
        UI.createElement('img', { src: blogger.avatar, alt: `${blogger.firstName} ${blogger.lastName}`, class: 'blogger_avatar w-100px h-100px transition-5' }),
        UI.createElement('p', { class: 'blogger__name' }, `${blogger.firstName} ${blogger.lastName}`)
    ]);
}

function createPostCard(post) {
    return UI.createElement('div', { class: 'post__card w-100 ' }, [
                UI.createElement('div', { class: 'post__card__boxPostTitle display-flex jc-space-between ai-center' }, [
                    UI.createElement('p', { class: 'post__card__author' }, `By: ${post.authorName}`),
                    UI.createElement('h4', { class: 'post__card__title' }, post.title),
                ]),
                UI.createElement('div', { class: 'post__card__description display-flex jc-space-between ai-center ta-center' }, [
                    UI.createElement('img', { src: post.img, alt: post.title, class: 'post__image w-300px h-200px transition-5' }),
                    UI.createElement('div', { class: 'box__post_story w-400px' }, [
                        UI.createElement('p', { class: 'post_story' }, post.story)
                    ])
                ]),
                UI.createElement('button', {class: 'delete-post-btn w-100px h-30px'}, 'Delete') 
            ]);
}

function createContainer() {
    const container = UI.createElement('div', { class: 'container-home w-100 display-flex jc-space-between ai-center fd-column' }, [
        UI.createElement('header', { class: "header w-90 h-100px display-flex ai-center jc-space-between" }, [
            UI.createElement('div', { class: 'icon__titleBox display-flex jc-space-between ai-center w-150px' }, [
                UI.createElement('i', { class: 'fa-brands fa-hive icon__blog' }),
                UI.createElement('h1', { class: 'title' }, 'Blog')
            ]),
            UI.createElement('div', { class: 'linkBox' }, [
                UI.createElement('a', { class: 'header__link w-200px transition-5 td-none', href: 'registration.html' }, 'Registration'),
                UI.createElement('a', { class: 'header__link w-150px transition-5 td-none', href: 'index.html' }, 'Login'),
                UI.createElement('a', { class: 'header__link w-150px transition-5 td-none', href: 'createBlogPost.html' }, 'Create Blog')
            ])
        ]),
        UI.createElement('main', { class: 'main w-90 h-80 display-flex jc-space-between' }, [
            UI.createElement('nav', { class: 'sidebar w-350px h-100 display-flex fd-column jc-space-between ai-center ta-center' }, [
                UI.createElement('h2', { class: 'sidebar__title' }, 'Bloggers'),
                UI.createElement('div', { class: 'bloggers__list w-90 h-80 display-flex fd-column jc-space-between ai-center overflow' }, 
                    bloggers.map(createBloggerCard)
                )
            ]),
            UI.createElement('section', { class: 'section w-70 h-100 display-flex jc-space-between ai-center fd-column' }, [
                UI.createElement('div', { class: 'section__block w-100 h-90 display-flex jc-space-center ai-center' }, [
                    UI.createElement('div', { class: 'section__block__posts w-90 h-100 display-flex jc-space-around ai-center fd-column overflow' }, 
                        loadPosts().map(createPostCard)
                    )
                ]),
                UI.createElement('footer', { class: 'footer w-100 h-8 display-flex jc-space-around ai-center' }, [
                    UI.createElement('div', { class: 'footer__info h-80' }, [
                        UI.createElement('p', { class: 'footer__info__email' }, `Email : ${footerData.email}`),
                        UI.createElement('p', { class: 'footer__info__number' }, `Phone: ${footerData.number}`)
                    ]),
                    UI.createElement('div', { class: 'social-media w-100px h-40px display-flex jc-space-between' }, [
                        UI.createElement('a', { href: footerData.socialMedia.facebook, class: 'fa-brands fa-facebook td-none socialMedia__icon' }),
                        UI.createElement('a', { href: footerData.socialMedia.instagram, class: 'fa-brands fa-instagram td-none socialMedia__icon' }),
                        UI.createElement('a', { href: footerData.socialMedia.twitter, class: 'fa-brands fa-square-twitter td-none socialMedia__icon' })
                    ])
                ])
            ])
        ])
    ]);

    UI.render(container, 'body');
}

const staticPosts = posts; 
function loadPosts() {
    const dynamicPosts = JSON.parse(localStorage.getItem('posts')) || [];  
    return [...staticPosts, ...dynamicPosts];  
}

createContainer();





