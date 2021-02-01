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
    var new_student = new Student(req.body);
    new_student.save(function(err,student){
        if (err){
            data  = req.body
            if("age" in data){
                res.send(err);
                
            }
            else{
                res.send({"status":0,"message":"Age is Mandatory"})
            }
        }
        else{
        res.json(student)}
    })
}

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
            res.send(error);
        res.json(student);
    })
}

//Contoller for deleting the students record

exports.delete_a_student = function(req,res){
    Student.remove({_id:req.params.Id}, function(err,student){
        if (err)
            res.send(err)
        res.json({"status":2,"message":"Student deleted Successfully"})
    })
}