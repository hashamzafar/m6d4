import Categories from './categories.js'
import Products from './products.js'
import reviews from "./review.js"
import users from './users.js'



Categories.hasMany(Products, {
    onDelete: "cascade",
    foreignKey: { allowNull: false }
})
Products.belongsTo(Categories, {
    onDelete: "cascade",
    foreignKey: { allowNull: false }
})

Products.hasMany(reviews,)
reviews.belongsTo(Products)

users.hasMany(reviews)
reviews.belongsTo(users)


export default { Categories, Products, reviews, users }