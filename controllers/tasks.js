const Task = require('../models/Task');
const asyncWrapper = require('../middlewear/async')

const getAllTask = asyncWrapper(async(req,res)=> {

    const task = await Task.find({})
    res.status(201).json({task});
})
    //we return this try catch block in middelware - async.js file
    //try{
      
        //const task = await Task.find({})
        //res.status(201).json({task});
  //  }catch (err) {
    //    res.status(500).json({msg: err});
    //}


const creatTask = asyncWrapper (async (req,res) => {

    const task = await Task.create(req.body);
    res.status(201).json({task});
    
})

    //we return this try catch block in middelware - async.js file
    // try{
    // const task = await Task.create(req.body);
    // res.status(201).json({task});
    // }catch(err){
    //     res.status(500).json({msg: err});}

const getTask = asyncWrapper(async (req,res) => {

    const {id: taskID} = req.params
    const task = await Task.findOne({_id: taskID});

      if(!task){
        const  error = new Error('Not found');
        error.status = 404;
        return res.status(404).json({msg: `no task with id:  ${taskID}`})
      }
      res.status(200).json({task});
      })




    //we return this try catch block in middelware - async.js file
//     try{
//     const {id: taskID} = req.params
//     const task = await Task.findOne({_id: taskID});

//       if(!task){
//         return res.status(404).json({msg: `no task with id:  ${taskID}`})
// }
// res.status(200).json({task});

// }catch(err){
//     res.status(500).json({msg: err});

// }}

const updateTask = asyncWrapper (async (req,res) => {

    const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true,runValidators: true});

        if(!task){
            return res.status(404).json({msg: `no task with id:  ${taskID}`})
        }
        res.status(200).json({task});
    })


    // try{
    //     const {id: taskID} = req.params;
    //     const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true,runValidators: true});

    //     if(!task){
    //         return res.status(404).json({msg: `no task with id:  ${taskID}`})
    //     }
    //     res.status(200).json({task});

    // }catch(err){
    //     res.status(500).json({msg: err});}
    


const deleteTask = asyncWrapper(async (req,res) => {

    const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})

        if(!task){
            return res.status(404).json({msg: `no task with id:  ${taskID}`})
        }
        res.status(200).json({task});
})



    // try{
    //     const {id: taskID} = req.params
    //     const task = await Task.findOneAndDelete({_id: taskID})

    //     if(!task){
    //         return res.status(404).json({msg: `no task with id:  ${taskID}`})
    //     }
    //     res.status(200).json({task});

    // }catch(err){

    //     res.status(500).json({msg: err});}


module.exports= {
    getAllTask,
    creatTask,
    getTask,
    updateTask,
    deleteTask,
}