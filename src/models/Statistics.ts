import {map} from '../common/Mapper';

/**
 * @export
 * @class Statistics
 */
export class Statistics {
  constructor(obj: any) {
    this.bytesEncodedTotal = map(obj.bytesEncodedTotal);
    this.timeEncodedTotal = map(obj.timeEncodedTotal);
  }

  /**
   * Bytes encoded total. (required)
   * @type {number}
   * @memberof Statistics
   */
  public bytesEncodedTotal: number;
  /**
   * Time in seconds encoded for all contained daily statistics. (required)
   * @type {number}
   * @memberof Statistics
   */
  public timeEncodedTotal: number;
}

export default Statistics;
