import { createApp } from 'vue'
import  '@/scss/header.scss'
import './style.css'



import BookComponents from './Book.vue'
import AuthorComponents from './Author.vue'
// const book=createApp(BookComponents);
const author=createApp(AuthorComponents)

// book.component('BookComponents', BookComponents)
// book.mount('#app')
author.component('AuthorComponents', AuthorComponents)
author.mount('#app')
