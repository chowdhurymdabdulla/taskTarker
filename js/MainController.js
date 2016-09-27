var MainController = function MainController() {
    var self = this;

    self.newName = '';
    self.newDate = '';
    self.newAssigned = '';

    self.addTask = function addTask() {
        self.taskName.unshift({
        name: self.newName,
        date: self.newDate,   
        assigned: self.newAssigned
        });
        self.newName = "";
        self.newDate = "";
        self.newAssigned = "";
    };
    
    self.taskName = [{
        name:    'Test   Task    #1',
        date: '12/01/2012',   
        assigned: 'John   Doe' 
    }, {
        name:    'Test   Task    #1',
        date: '12/01/2012',   
        assigned: 'John   Doe'
    }, {
        name:    'Test   Task    #1',
        date: '12/01/2012',   
        assigned: 'John   Doe'
    }, {
        name:    'Test   Task    #1',
        date: '12/01/2012',   
        assigned: 'John   Doe'
    }, {
        name:    'Test   Task    #1',
        date: '12/01/2012',   
        assigned: 'John   Doe'
    }];
};

angular
    .module('app')
    .controller('MainController', MainController);
