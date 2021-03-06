import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class TsProgramMapTableConfiguration
 */
export class TsProgramMapTableConfiguration {
  /**
   * An integer value. Packet Identifier (PID) for the MPEG Transport Stream PMT.
   * @type {number}
   * @memberof TsProgramMapTableConfiguration
   */
  public pid?: number;

  constructor(obj?: Partial<TsProgramMapTableConfiguration>) {
    if(!obj) {
      return;
    }
    this.pid = map(obj.pid);
  }
}

export default TsProgramMapTableConfiguration;

