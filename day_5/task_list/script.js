
class Task {
    constructor(title) {
        this.title = title;
    }

    static fromJSONObject(object) {
        return new Task(
            json.title,
        );
    }
}

class UserInterface {
  
    constructor(){
        this.form = document.getElementById('form');

        this.title = document.getElementById('title-input');

        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (e) =>
            this.onFormSubmitted(e));

        this.tasks = [];

        this.loadTasksFromLocalStorage();
        this.renderTableBody();
    }

    onFormSubmitted(e) {
        e.preventDefault();

        const task = new Task(
            this.title.value,
        );

        this.tasks.push(task);
        this.saveTasksToLocalStorage();
        this.renderTableBody();

        this.title.value = '';
    }

    renderTableBody() {
        this.tableBody.innerHTML = '';

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            
            const tableRow = this.generateTaskRow(task);
            this.tableBody.appendChild(tableRow);
        }
    }

    generateTaskRow(task) {
        const tr = document.createElement('tr');

        const cellTitle = document.createElement('td');
        const cellCompleted = document.createElement('td');
        const cellActions = document.createElement('td');
        const cellActions2 = document.createElement('td');

        cellTitle.innerHTML = task.title;
        cellCompleted.innerHTML = 'No';

        const removeButton = this.generateRemoveButton(task);
        cellActions.appendChild(removeButton);

        const deleteRow = this.generateDeleteButton(task);
        cellActions2.appendChild(deleteRow);

        removeButton.addEventListener('click', (event) => {
            cellCompleted.innerHTML = 'Yes';
            removeButton.innerHTML = 'Good Job!';
            removeButton.setAttribute('class', 'btn btn-sm btn-success');
        });

        tr.appendChild(cellTitle);
        tr.appendChild(cellCompleted);
        tr.appendChild(cellActions);
        tr.appendChild(cellActions2);

        return tr;
    }

    generateRemoveButton(task) {
        const button = document.createElement('button');

        button.setAttribute('class', 'btn btn-sm btn-warning');
        button.innerHTML = 'Complete';

        return button;
    }

    generateDeleteButton(task) {
        const button = document.createElement('button');

        button.setAttribute('class', 'btn btn-sm btn-danger');
        button.innerHTML = 'X';
        button.addEventListener('click', () => 
            this.onRemoveTaskClicked(task)
        );

        return button;
    }

    onRemoveTaskClicked(task) {

        this.tasks = this.tasks.filter((x) => {
            return task.title !== x.title;
        });

        this.saveTasksToLocalStorage();
        this.renderTableBody();
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }

    loadTasksFromLocalStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
            const taskArr = JSON.parse(json);
            this.tasks = taskArr.map((ob) => Task.fromJSONObject(ob));
          }
    }
}

new UserInterface();