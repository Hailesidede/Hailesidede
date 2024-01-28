export class Tag{
    
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly JAVA = new Tag('Java','pink');
    static readonly BOOTSTRAP = new Tag('Bootstrap','purple');
    static readonly TYPESCRIPT = new Tag('TypeScript','orange');
    static readonly SPRINGBOOT = new Tag('SpringBoot','brown');
    static readonly SQL = new Tag('MySql','green');
    


    private constructor(private readonly Key: string, public readonly color: string){

    }

    toString(){
        return this.Key;
    }
}