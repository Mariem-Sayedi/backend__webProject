const { getAllTasks } = require('../models/Task');

exports.taskController = (req, res, next) => {
    return getAllTasks()
        .then(tasks => {
            res.render('index', { tasks: tasks });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
            next(error);
        });
};
