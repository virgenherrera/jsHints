/*
*   this class will recive parameters on it's construct
*   because every Human has a bornDate and Sex
*   and for this example we will define the following properties:
*   +name: this can be passed on  the constructor in the case of
*       the parents already know how will be the name of the future
*       human or undefined if they don't know in the moment of born of the human.
*
*   +bornDate: can be some Specific Date in the Case of a Cesarean Birth
*       or default in the case of natural born.
*   
*   +sex:  this will be private because in the case of this propertie it can be assigned
*       on the construct, or be undefined at the born data and also it can be modified...
*       so let´s define the sex as private but we will define a metod to hande the get set
*/

function Human(name,bornDate,sex){
    //like this we can define public properties
    this.name = name || undefined;
    this.bornDate = bornDate ? new Date(bornDate).toDateString() : new Date().toDateString();
    
    //this way for define private properties
    var sex = sex || undefined;

    /*
    *   Now let's define a public method for the private property (or anyother)
    *   declaring a public method that can access to the private propertie
    *   and with that method we will handle the get and set of the private propertie
    */
    this.Sex = function(value){
        //if value is present this function will act as a setter else will act as getter
        if(value){
            return sex = value;
        } else {
            return sex;
        }
    };
}

function Mexican(nombre,dob,sexo){
    //inherit from parent class
    this.prototype = Object.create( Human.prototype );
    //call the parent constructor
    Human.call( this, nombre,dob,sexo );

    //define own public properties
    this.nationalitie = "Mexicano";

    //let's define another public function to intruduce the boy
    this.sayHello = function(){
        console.log(
            "hola me llamo: "+this.name+
            "\nNací el dia: "+this.bornDate+
            "\nSoy un: "+this.Sex()+
            "\nSoy Orgullosamente: "+this.nationalitie );
    }
}

function Chilango(nombre,dob,sexo){
    this.prototype = Object.create( Mexican.prototype );
    Mexican.call(this,nombre,dob,sexo);

    //declare a private Method
    var actividad = function(){
        return "C# developer";
    }

    //override natiolalitie
    this.nationalitie = "Chilango";

    //override sayHello
    this.sayHello = function(){
        console.log(
            this.name+" es mi nombre asi que no lo desgastes\n"+
            "el dia "+this.bornDate+" mis oclallos vieron la luz\n"+
            "y soy todo un "+this.nationalitie+"\ny a mucha honra soy un "+this.Sex()+
            "\ny soy un "+actividad()+" bien Chingon\n"
        );
    }
}

/*
*   lets create some new object one is an instance from the GrandSon Class
*   and the other is an instance of Father Class
*/
var igriet = new Chilango('igriet','1987/05/16',"Macho alfa lomo plateado Barba de leñador");
var hugo = new Mexican("Hugo","1986-02-07","Hombre");

//call sayHello
igriet.sayHello();
/*
*   this will output:
*       igriet es mi nombre asi que no lo desgastes
*       el dia Sat May 16 1987 mis oclallos vieron la luz
*       y soy todo un Chilango
*       y a mucha honra soy un Macho alfa lomo plateado Barba de leñador
*       y soy un C# developer bien Chingon
*/

//call sayHello
hugo.sayHello();
/*
*   this will output:
*       hola me llamo: Hugo
*       Nací el dia: Fri Feb 07 1986
*       Soy un: Hombre
*       Soy Orgullosamente: Mexicano
*/