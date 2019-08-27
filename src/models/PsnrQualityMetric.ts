import {map} from '../common/Mapper';
import TimeSpan from './TimeSpan';

/**
 * @export
 * @class PsnrQualityMetric
 */
export class PsnrQualityMetric {
  /**
   * @type {TimeSpan}
   * @memberof PsnrQualityMetric
   */
  public timeSpan?: TimeSpan;

  /**
   * Peak signal-to-noise ratio (required)
   * @type {number}
   * @memberof PsnrQualityMetric
   */
  public psnr?: number;

  constructor(obj: Partial<PsnrQualityMetric>) {

    this.timeSpan = map<TimeSpan>(obj.timeSpan, TimeSpan);
    this.psnr = obj.psnr;
  }
}

export default PsnrQualityMetric;

