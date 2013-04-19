Ext.define('TaskMaster.store.Tasks', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {
        autoLoad: true,
        model: 'TaskMaster.model.Task',
        proxy: {
            type: 'localstorage',
            id: 'tasklist'
        }
    }
});
