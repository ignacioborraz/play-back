const Ingrediente = require('../models/Ingrediente')

const controller = {

    create: async(req,res,next) => {
        try {
            let nuevo = await Ingrediente.create(req.body)
            res.status(201).json({
                id: nuevo._id,
                success: true,
                message: "el ingrediente se creó satisfactoriamente"
            })
        } catch(error) {
            next(error)
        }
    },
    
    read: async(req,res,next) => {
        try {
            let todos = await Ingrediente.find()
            if (todos) {
                res.status(200).json({
                    response: todos,
                    success: true,
                    message: "se obtuvieron ingredientes"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay ingredientes"
                })
            }            
        } catch(error) {
            next(error)
        }        
    },

    one: async(req,res,next) => {
        let { id } = req.params
        try {
            let todos = await Ingrediente.findOne({ _id: id })
            if (todos) {
                res.status(200).json({
                    response: todos,
                    success: true,
                    message: "se obtuvo una ingrediente"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay ingredientes"
                })
            }            
        } catch(error) {
            next(error)
        }        
    },
    
    update: async(req,res,next) => {
        let { id } = req.params
        try {
            let uno = await Ingrediente.findOneAndUpdate({ _id: id }, req.body,{ new: true })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se modificó la ingrediente"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay ingredientes que coincidan"
                })
            }
        } catch(error) {
            next(error)
        }
    },
    
    destroy: async(req,res,next) => {
        let { id } = req.params
        try {
            let uno = await Ingrediente.findOneAndDelete({ _id: id })
            if (uno) {
                res.status(200).json({
                    success: true,
                    message: "se eliminó el ingrediente"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay ingredientes que coincidan"
                })
            }
        } catch(error) {
            next(error)
        }
    }

}

module.exports = controller