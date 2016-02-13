System.register([], function(exports_1) {
    var SensorData;
    return {
        setters:[],
        execute: function() {
            SensorData = (function () {
                function SensorData(sens_id, val, sens_type, received) {
                    this.sens_id = sens_id;
                    this.val = val;
                    this.sens_type = sens_type;
                    this.received = received;
                }
                return SensorData;
            })();
            exports_1("SensorData", SensorData);
        }
    }
});
//# sourceMappingURL=sensorData.js.map