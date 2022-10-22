const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Message = require('../models/messageModel');

exports.createMessage = catchAsync(async (req, res, next) => {
    const message = await Message.create(req.body);
 
    res.status(200).json({
        status: 'success',
        message : message
    });
});

exports.getAllMessages = catchAsync(async (req, res, next) => {
    const message = await Message.find();

    res.status(200).json({
        status: "success",
        message,
    });
});

exports.getMessageById = catchAsync(async (req, res, next) => {
    const message = await Message.findById(req.params.id);

    res.status(200).json({
        status: "success",
        message,
    });
});

exports.updateMessage = catchAsync(async (req, res, next) => {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });

    res.status(200).json({
        status: 'success',
        message,
    });
});

exports.deleteMessage = catchAsync(async (req, res, next) => {
    await Message.findByIdAndDelete(req.params.id);
    
    res.status(204).json({
        status: 'success',
        message:null
    });
});