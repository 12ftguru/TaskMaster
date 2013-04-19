Ext.define('TaskMaster.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        stores: ['Tasks'],
        views: ['Main','Edit'],
        models: ['Task'],

        refs: {
            taskList: 'main list',
            editForm: 'edittask',
            saveTask: 'edittask button'
        },
        control: {
            taskList: {
                itemswipe: 'doComplete',
                itemdoubletap: 'doEdit'
            },
            saveTask: {
                tap: 'doSaveTask'
            }
        }
    },
    doComplete: function(list, idx, target, record) {
        var complete = record.get('complete');
        record.set('complete', !complete);
    },
    doEdit: function(list,idx,target,record) {
        var form = this.getEditForm();
        form.setRecord(record);
        form.up('tabpanel').setActiveItem(1);
    },
    doSaveTask: function(btn) {
        var form = this.getEditForm(), list = this.getTaskList(), record, values;
        record = form.getRecord();
        values = form.getValues();

        if (record) {
            /* Editing an existing record. */
            Ext.Object.each(values, function(key,value){
                record.set(key,value);
            });
        } else {
            /* Adding a new record. */
            list.getStore().add(values);
        }

        list.getStore().sync();
        form.reset();

        list.up('tabpanel').setActiveItem(0);

    }
});
