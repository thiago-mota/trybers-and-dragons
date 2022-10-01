import Race from './Race';

class Halfing extends Race {
  private _maxLifePoints: number;
  private static _createdHalfingsInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfing._createdHalfingsInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdHalfingsInstances;
  }
}

export default Halfing;
