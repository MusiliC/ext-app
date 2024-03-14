Ext.define("MyApp.util.Util", {
    statics:{
        logInfo: function(message){
            console.log(message)
        },
        formatNumber: function (value) {
            let v = new Number(value);
            if (v > 0) {
                let formatted = Ext.util.Format.number(value, '###,###.00');
                return `<h3 style="color:green">${formatted}</h3>`;

            }
            else {
                let formatted = Ext.util.Format.number(value, '###,###.00');
                return `<h3 style="color:red">${formatted}</h3>`;

            }
        }
    }
});
