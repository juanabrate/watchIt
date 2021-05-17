class hero {
    
    constructor(name, level) {
        let verga = 123;
        this.name = name;
        this.level = level;
    }

    fuck () {
        return `${this.name} fucked you`
    }
    secret() {
        return verga;
    }
}
  
function hero() {
    let pitito = "cortito";
    return {
        "secretito": () => {return pitito},
        "nose":123,
        "keseyo":() => {return "tu vieja"}
    }
}
