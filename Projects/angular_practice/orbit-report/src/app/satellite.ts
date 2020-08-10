export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;


    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.orbitType = orbitType;
        this.operational = operational;
        this.launchDate = launchDate;
    }
    public shouldShowWarning() {
        if(this.type.toLowerCase() === 'space debris') {
            return true;
        } else {
            return false;
        }
    }
}

/* public shouldShowWarning() {
    let tempType: string = this.type.toLocaleLowerCase();

    if(tempType.includes('Space Debris'.toLocaleLowerCase())) {
        return true;
    } else {
        return false;
    }*/