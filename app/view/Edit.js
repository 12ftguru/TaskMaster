Ext.define('TaskMaster.view.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'edit',
    alias: 'widget.edittask',
    config: {
        title: 'Edit',

        items: [
            {
                name: 'title',
                xtype: 'textfield',
                label: 'Title'
            },
            {
                name: 'date_due',
                xtype: 'datepickerfield',
                label: 'Date Due',
                value: new Date() // set the value to today.
            },
            {
                xtype: 'button',
                text: 'Save',
                ui: 'confirm'
            }
        ]
    }
});
