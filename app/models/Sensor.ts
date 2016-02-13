/**
 * Created by andreaterzani on 13/02/16.
 */

export class Sensor {
    public sens_id:number;
    public name:string;
    public description:string;
    public type:string;




    constructor( _sens_id?:number,
                 _name?:string,
                 _description?:string,
                 _type?:string){


    console.log("Parametric constructor");
        this.sens_id=_sens_id;
        this.name=_name;
        this.description=_description;
        this.type=_type;

    }
}