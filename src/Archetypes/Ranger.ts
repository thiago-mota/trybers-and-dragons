import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdRangerInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger._createdRangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdRangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  get name(): string {
    return this.name;
  }
}

export default Ranger;
