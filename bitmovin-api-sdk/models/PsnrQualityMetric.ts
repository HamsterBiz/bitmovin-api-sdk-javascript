import {map} from '../common/Mapper';
import TimeSpan from './TimeSpan';

/**
 * @export
 * @class PsnrQualityMetric
 */
export default class PsnrQualityMetric {
  constructor(obj: any) {
    this.timeSpan = map<TimeSpan>(obj.timeSpan, TimeSpan);
    this.psnr = map(obj.psnr);
  }

  /**
   * @type {TimeSpan}
   * @memberof PsnrQualityMetric
   */
  public timeSpan: TimeSpan;
  /**
   * Peak signal-to-noise ratio
   * @type {number}
   * @memberof PsnrQualityMetric
   */
  public psnr: number;
}