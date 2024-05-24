const db = require('../models');
const Department = db.Department

exports.create = (req, res) => {
    const department = {
        designation : req.body.designation,
        description : req.body.description,
        building_name : req.body.building_name,
        floor_number: req.body.floor_number,
    }


    Department.create(department)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the department."
      });
    });
}


exports.findAll = async (req, res) => {
    try{
        const all = await Department.findAll();
        res.send(all);
    }catch (error){
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving departments."
        });
    }

}

exports.findOne = async (req, res) => {
    try{
        const department = await Department.findByPk(req.params.id);
        if(!department){
            return res.status(404).send({ message: "Department not found" });
        }
        res.send(department);
    }catch(error){
        res.status(500).send({
            message: "Error retrieving department with id=" + req.params.id
        })
    }
}

exports.update = (req, res) => {
    const id = req.params.id;
    const department = {
        designation : req.body.designation,
        description : req.body.description,
        building_name : req.body.building_name,
        floor_number: req.body.floor_number,
    }

    Department.update(department, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message : "Department updated successfully"
            });
        }else{
            res.send({
            message : `Cannot update department with id=${id}. Maybe department was not found or departments is empty`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating department with id=" + id
        });
    })
}


exports.delete = (req, res) => {
    const id = req.params.id
    Department.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Department was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete department with id=${id}. Maybe department was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete department with id=" + id,
          });
        })
}