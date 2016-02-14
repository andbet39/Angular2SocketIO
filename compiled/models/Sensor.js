/**
 * Created by andreaterzani on 13/02/16.
 */
System.register([], function(exports_1) {
    var Sensor;
    return {
        setters:[],
        execute: function() {
            Sensor = (function () {
                function Sensor(_sens_id, _name, _description, _type, _min_value, _max_value, _id) {
                    console.log("Parametric constructor");
                    this.sens_id = _sens_id;
                    this.name = _name;
                    this.description = _description;
                    this.type = _type;
                    this.min_value = _min_value;
                    this.max_value = _max_value;
                    this.id = _id;
                }
                return Sensor;
            })();
            exports_1("Sensor", Sensor);
        }
    }
});
//# sourceMappingURL=sensor.js.map