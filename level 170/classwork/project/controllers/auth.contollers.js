import User from "../models/user.model.js";
import catchAsync from "../utils/catchAsync.js"

export const signUp = catchAsync(async (req, res, next) => {
    const {fullname, email, password} = req.body;
    const newUser = await User.create({fullname, email, password});

    res.status(200).json(newUser)
});


export const verify = catchAsync(async (req, res, next) => {
    const {code} = req.params;

    const user = await User.findOne({verificationCode: code});

    if (!user) {
        return next(new AppError("Invalid or expired verification code!", 400))
    };

    user.isVerified = true;
    user.verificationCode = undefined;
    await User.save({validateBeforeSave: false});

    res.status(200).json("Email verified successfully!");
});

