export class Task {
    constructor(id, title, description, dueDate) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.isCompleted = false;
    }
  
    markAsCompleted() {
      this.isCompleted = true;
    }
  
    updateTask({ title, description, dueDate }) {
      if (title) this.title = title;
      if (description) this.description = description;
      if (dueDate) this.dueDate = dueDate;
    }
  }

  