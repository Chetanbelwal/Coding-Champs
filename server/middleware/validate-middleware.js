// await.parseAsync(req.body) is the line where you use zod to validate the request body data against defined schema

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 400;
    const message = "Fill Input Properly";
    const extraDetails = err.errors[0].message;

    // res.status(400).json({msg:message})      //Now we will use errorMiddleware for this line
    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validate;
