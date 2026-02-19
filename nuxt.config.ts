import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    devtools: { enabled: true },

    css: [
        '~/assets/styles/base.scss',
        '@fortawesome/fontawesome-free/css/all.min.css'
    ],

    typescript: {
        strict: true
    },

    app: {
        head: {
            title: 'Manga Store',
            meta: [
                { name: 'description', content: 'Manga online store pet project' }
            ]
        }
    }
})
