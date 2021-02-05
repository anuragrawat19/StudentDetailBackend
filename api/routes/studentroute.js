const cors = require('cors');
module.exports = function(app){
    var studentlist = require('../controllers/studentcontroller');

//  Created the students CRUD Routes here
app.use(cors())

app.route('/students')
    .get(studentlist.list_all_students)
    .post(studentlist.create_a_student);


app.route('/student/:Id')
    .get(studentlist.student_detail)
    .put(studentlist.update_a_student)
    .delete(studentlist.delete_a_student);

};


