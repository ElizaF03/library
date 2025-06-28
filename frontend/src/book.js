import { createApp } from 'vue'
import  '@/scss/header.scss'
import '@/scss/item-by-book.scss'
import './style.css'



import BookComponents from './Book.vue'
const book=createApp(BookComponents);

book.component('BookComponents', BookComponents)
book.mount('#app')