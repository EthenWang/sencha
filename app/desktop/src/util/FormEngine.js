Ext.define('MyApp.util.FormEngine', {
    singleton: true,
    
    screenName: '',
    containerTypes: ['screen', 'tabcontrol', 'tabpage', 'section', 'group'],

    processJsonData: function(data) {
        const me = this,
              dict = {};

        if (Ext.isArray(data) && data.length > 0) {
            Ext.each(data, item => {
                const fldname = item.fldname.toLowerCase(),
                      fldparent = item.fldparent.toLowerCase() || me.screenName,
                      fldobj = { data: item, items: [] };
                if (me.isContainer(item)) {
                    dict[fldname] = fldobj; 
                } 
                if (!me.isRoot(item)) {
                    dict[fldparent] && dict[fldparent].items.push(fldobj);
                } else {
                    me.screenName = fldname;
                }
            });
            return this.buildComponentTree(dict[me.screenName]);
        } 

        if (Ext.isObject(data)) {
            return this.buildComponentTree(data);
        }

        return null;
    },

    buildComponentTree: function(root) {

    },

    isContainer: function(obj) {
        if (!obj) {
            return false;
        }

        if (Ext.isString(obj)) {
            return obj in this._containerTypes;
        }

        return obj.fldtype in this._containerTypes;
    },

    isRoot: obj => obj.fldtype.toLowerCase() === 'screen'
});