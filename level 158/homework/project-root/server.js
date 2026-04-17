const express = require('express')
// ვქმნით express აპლიკაციას
const app = express()
const productsRoutes = require('./routes/productsRoutes')

const PORT = process.env.PORT || 3000

// req.body წასაკითხად JSON middleware
app.use(express.json())
app.use('/products', productsRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Server error' })
})

// სერვერის გაშვება
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})