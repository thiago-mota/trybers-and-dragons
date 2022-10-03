import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdMagesInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage._createdMagesInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdMagesInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  get name(): string {
    return this.name;
  }
}

export default Mage;
