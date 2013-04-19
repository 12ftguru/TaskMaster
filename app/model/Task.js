Ext.define('TaskMaster.model.Task', {
    extend: 'Ext.data.Model',
    requires: 'Ext.DateExtras',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'title', type: 'string'},
            { name: 'date_due', type: 'date', dateFormat: 'm-d-Y'},
            { name: 'complete', type: 'boolean', defaultValue: false },
            { name: 'past_due', type: 'boolean', defaultValue: false,
              convert: function(value, record) {
                  if (typeof record.data.date_due !== 'undefined') {
                      var today = new Date();
                      if (Ext.Date.format(today, 'm-d-Y') > Ext.Date.format(record.data.date_due, 'm-d-Y')) {
                          return true;
                      } else {
                          return false;
                      }
                  } else {
                      return false;
                  }
              }

            }
        ]
    }
});
