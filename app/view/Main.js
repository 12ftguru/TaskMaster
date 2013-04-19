Ext.define('TaskMaster.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'TaskMaster.store.Tasks',
        'Ext.dataview.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Tasks',
                iconCls: 'list',
                scrollable: true,
                layout: 'vbox',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'TaskMaster',
                    ui: 'dark'
                },
                       {
                           flex: 1,
                           xtype: 'list',
                           fullscreen: false,
                           itemTpl: '<div class=\"task <tpl if=\"complete\">complete<tpl elseif=\"past_due\">pastdue</tpl>\"> {title}</div>',
                           store: 'Tasks',
                           itemCls: 'task-wrapper',
                           mode: 'SINGLE'
                       }
                ]

            },
            {
                title: 'Add Task',
                iconCls: 'add',
                layout: 'vbox',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'TaskMaster'
                    },
                    {
                        xtype: 'edittask',
                        flex: 1,
                        padding: 10
                    }
                ]
            }
        ]
    }
});
