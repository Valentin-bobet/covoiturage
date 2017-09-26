class Type{

    constructor(id, libelle){
        this._id = id;
        this._libelle = libelle;
    }

    get libelle(){
        return this._libelle;
    }
}
module.exports = Type;