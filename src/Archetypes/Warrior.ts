import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdWarriorsInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior._createdWarriorsInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdWarriorsInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  get name(): string {
    return this.name;
  }
}

export default Warrior;
