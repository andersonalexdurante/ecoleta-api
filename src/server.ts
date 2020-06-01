import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.json([
        'Anderson',
        'Ademir',
        'Nair',
        'Joelma',
        'Elizabete'
    ])
})

app.listen(3333)