'use strict';
const Controller = {
    form: null,

    findForm(Selector) {
        if (typeof Selector !== "string") throw new Error('formSelector should be a STRING')
        const form = document.querySelector(Selector)
        if (!(form instanceof HTMLElement)) throw new Error('Form not valid')
        return form;
    },

    initListeners() {
        this.form.addEventListener('submit', this.formHandler.bind(this))
        this.todoContainer.addEventListener('click', this.formDelete.bind(this))
        window.addEventListener('DOMContentLoaded', this.preRenderToDoes.bind(this));
    },

    formDelete(event) {
        if (!event.target.hasAttribute('data-delete-btn')) return
        const idDelete = +event.target.closest('[data-id]').getAttribute('data-id');
        const deletedToDo = Model.deleteItem(idDelete)
        View.deleteToDo(deletedToDo);
    },

    formHandler(event) {
        event.preventDefault();
        event.stopPropagation();

        const data = {}
        this.form.querySelectorAll('textarea,input,select').forEach(({name, value}) => {
            data[name] = value;
        });
        const savedToDoItem = Model.postData(data);
        View.renderItem(savedToDoItem);
    },

    preRenderToDoes() {
        const savedData = Model.getData()
        savedData.forEach(item => View.renderItem(item))
    },

    init(formSelector, blockSelector) {
        const form = this.findForm(formSelector)
        const block = this.findForm(blockSelector)
        this.form = form;
        this.todoContainer = block;
        this.initListeners();
        View.setContainer(block)
    }
}