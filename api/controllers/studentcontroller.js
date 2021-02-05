var mongoose  = require('mongoose'),
Student = mongoose.model("StudentDetail")

// contorller for listing all the Students
exports.list_all_students = function(req,res){
    Student.find({},function(err,task){
        if(err)
            res.send(err);
        res.json(task)
    })
}

//Controller for creating a Students Detail
exports.create_a_student  = function(req,res){
    data  = req.body
    console.log(data)
    var new_student = new Student(data);
    Student.find({"rol_number":Number(data["rol_number"])},function(err,docs){

        if(docs.length){
            res.send({"status":0,"message":"Roll Number Already Exist"});
        }
        else{
            new_student.save(function(err,student){
                if (err){
                    
                    if(data["age"] == ""){
                        res.json({"status":0,"message":"Age is Mandatory"});
                        
                    }
                    else{
                        res.json({"status":0,"message":err})
                    }
                }
                else{
                res.json({"status":2,"message":"Sucessfully Created"})}
            })
        }
    })
       
    
    

    

}

// exports.create_a_student  = function(req,res){
//     data  = req.body
//     console.log(data)
//     var new_student = new Student(data);
//     if(Student.find({"rol_number":Number(data["rol_number"])})){
//         res.send({"status":0,"message":"Roll Number Already Exist"});
//     }
    
//         new_student.save(function(err,student){
//             if (err){
                
//                 if(data["age"] == ""){
//                     res.json({"status":0,"message":"Age is Mandatory"});
                    
//                 }
//                 else{
//                     res.json({"status":0,"message":err})
//                 }
//             }
//             else{
//             res.json({"status":2,"message":"Sucessfully Created"})}
//         })
    

// }

//Controller for a student details
exports.student_detail = function(req,res){
    Student.findById(req.params.Id,function(err,student){
        if (err)
            res.send(err);
        res.json(student);
    })
}

//Contoller for updating the Student
exports.update_a_student = function(req,res){
        Student.findOneAndUpdate({_id:req.params.Id}, req.body , {new:true}, function(err,student){
            if (err)
                res.send({"status":0,"message":err});
            res.json({"status":2,"message":"Successfully Updated"});
        })
    }
// exports.update_a_student = function(req,res){
//     Student.findOneAndUpdate({_id:req.params.Id}, req.body , {new:true}, function(err,student){
//         if (err)
//             res.send({"status":0,"message":err});
//         res.json({"status":2,"message":"Successfully Updated"});
//     })
// }

//Contoller for deleting the students record

exports.delete_a_student = function(req,res){
    Student.remove({_id:req.params.Id}, function(err,student){
        if (err)
            res.send(err)
        res.json({"status":2,"message":"Student deleted Successfully"})
    })
}