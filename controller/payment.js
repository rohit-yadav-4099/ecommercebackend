const {STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY} = process.env;

const stripe = require('stripe')( STRIPE_SECRET_KEY)

const renderBuypage = async(req, res)=>{
    try{
        res.render
    }
}