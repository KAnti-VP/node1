import path from 'path'
import express from 'express'
import __dirname from '../util/rootpath.js'

const router = express.Router()

const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'add-product.html'))
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

export { router as adminRoutes, products }
