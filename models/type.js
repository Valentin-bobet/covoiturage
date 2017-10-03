class Type{

    constructor(id, libelle){
        this._id = id;
        this._libelle = libelle;
    }

    get libelle(){
        return this._libelle;
    }

    toString(){
        return 'Type : '+this._libelle;
    }

    static addType(unType){
        Type.LES_TYPES.push(unType);
    }

    static removeType(unType){
        let i = Type.LES_TYPES.indexOf(unType);
        if(i != -1) {
            Type.LES_TYPES.splice(i, 1);
        }
    }

    static nbTypes(){
        return Type.LES_TYPES.length;
    }

    static getLesTypes(){
        return Type.LES_TYPES;
    }

    static getLesTypesJSON(){
        let l = [];
        Types.LES_TYPES.forEach(
            function (unType) {
                l.push(JSON.parse())
            }
        )
    }
}
module.exports = Type;