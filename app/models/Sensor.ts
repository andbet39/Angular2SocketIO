/**
 * Created by andreaterzani on 13/02/16.
 */

export class Sensor {
    public sens_id:number;
    public name:string;
    public description:string;
    public type:string;
    public min_value:number;
    public max_value:number;
    public id:number;



    constructor(
                _sens_id?:number,
                 _name?:string,
                 _description?:string,
                 _type?:string,
                _min_value?:number,
                _max_value?:number,
                _id?:number){


    console.log("Parametric constructor");
        this.sens_id=_sens_id;
        this.name=_name;
        this.description=_description;
        this.type=_type;
        this.min_value=_min_value;
        this.max_value=_max_value;
        this.id=_id;

    }
}