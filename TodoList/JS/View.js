'use strict';
const View = {
    todoContainer: null,

    renderItem(data) {
        const template = this.createTemplate(data)
        this.todoContainer.prepend(template)
        return template
    },

    createTemplate({title, description, id}) {
        const template = document.createElement('div')
        template.className = 'col-4'
        template.setAttribute('data-id', id)
        template.innerHTML = `<div class="taskWrapper d-flex flex-column mb-3 ">
                                <div class="taskHeading">${title}<sup>${id}</sup></div>
                                <div class="taskDescription">${description}</div>
                                <button class="btn btn-danger align-self-end" data-delete-btn >Delete</button>
                            </div>`

        return template
    },

    setContainer(domEl) {
        if (!(domEl instanceof HTMLElement)) throw new Error('Container type is not valid')
        this.todoContainer = domEl
    },

    templateById(id) {
        return this.todoContainer.querySelector(`[data-id="${id}"]`);
    },

    deleteToDo({id}) {
        const templateToDelete = this.templateById(id);
        if (templateToDelete instanceof HTMLElement) {
            templateToDelete.remove();
        } else {
            console.log("Unable to delete element. Invalid templateToDelete:", templateToDelete);
        }
    }

}
