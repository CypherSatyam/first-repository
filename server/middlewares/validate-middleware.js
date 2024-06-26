const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        // console.log(parseBody)
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const extradetails = err.errors[0].message;
        const message = "Fill the details properly"

        const error = {
            status,
            message,
            extradetails,
        }
        console.log(error)
        // res.status(400).json({msg:message});
        next(error)
    }
}

module.exports = validate;