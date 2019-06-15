Ext.define('MyApp.view.home.TestView',{
    extend: 'Ext.Container',
	xtype: 'testview',
	cls: 'testview',
    controller: {type: 'testviewcontroller'},
    items: [{
        xtype: 'button',
        text: 'Check Exec Sequence',
        ui: 'action round',
        handler: 'onTestClick'
    }]
});