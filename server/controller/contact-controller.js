const Contact = require("../models/contact-model.js")

const contactForm = async(req, res)=>{
    try {
        const response = req.body
        await Contact.create(response)
        return res.status(200).json({message:"Contact form Message deleivered successfully"})
    } catch (error) {
        return res.status(400).json({message:"Contact form message deleivered failed"})
        
    }
}

module.exports = contactForm