import { createApp } from 'vue'
import  '@/scss/header.scss'
import '@/scss/item-by-book.scss'
import './style.css'


import AuthorComponents from './Author.vue'

const author=createApp(AuthorComponents)


author.component('AuthorComponents', AuthorComponents)
author.mount('#app')