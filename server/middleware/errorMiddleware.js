// Now no need to define error for each  catch block just simply call next(error) it will directly land here and as per defined will show the error message

const errorMiddleware = (err, req , res, next)=>{
    const status = err.status || 500   
    const message = err.message || "BACKEND ERROR"
    const extraDetails = err.extraDetails || "Error in Backend"
    return res.status(status).json({message, extraDetails})
}

module.exports = errorMiddleware