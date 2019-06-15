Ext.define('MyApp.view.home.TestViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.testviewcontroller',
    onTestClick: function (button) {
        button.setBadgeText(1 + (parseInt(button.getBadgeText()) || 0));
        this.fireEventedAction('testClick', ['ethen'], param => console.log('test click fired', param));
        Ext.defer(() => console.log('ext deferred'), 0);
        setTimeout(() => console.log('set timeout'), 0);
        Ext.Deferred.delay(0).then(() => console.log('ext promise then delay'));
        Ext.Deferred.resolved().then(() => console.log('ext promise then deferred'));
        Promise.resolve().then(() => console.log('promise then'));
        Ext.Promise.resolve().then(() => console.log('ext promise then'));
        console.log('click test button');
    }
});
