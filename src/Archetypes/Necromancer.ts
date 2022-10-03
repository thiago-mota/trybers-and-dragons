import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdNecromancerInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer._createdNecromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdNecromancerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
