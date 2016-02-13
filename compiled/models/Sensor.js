/**
 * Created by andreaterzani on 13/02/16.
 */
System.register([], function(exports_1) {
    var Sensor;
    return {
        setters:[],
        execute: function() {
            Sensor = (function () {
                function Sensor(_sens_id, _name, _description, _type) {
                    console.log("Parametric constructor");
                    this.sens_id = _sens_id;
                    this.name = _name;
                    this.description = _description;
                    this.type = _type;
                }
                return Sensor;
            })();
            exports_1("Sensor", Sensor);
        }
    }
});
//# sourceMappingURL=Sensor.js.map