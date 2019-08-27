import {map} from '../common/Mapper';
import Filter from './Filter';
import PositionUnit from './PositionUnit';

/**
 * @export
 * @class WatermarkFilter
 */
export class WatermarkFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof WatermarkFilter
   */
  public type: 'WATERMARK' = 'WATERMARK';

  /**
   * URL of the file to be used as watermark image. Supported image formats: PNG, JPEG, BMP, GIF (required)
   * @type {string}
   * @memberof WatermarkFilter
   */
  public image?: string;

  /**
   * Distance from the left edge of the input video to the left edge of the watermark image. May not be set if 'right' is set.
   * @type {number}
   * @memberof WatermarkFilter
   */
  public left?: number;

  /**
   * Distance from the right edge of the input video to the right edge of the watermark image . May not be set if 'left' is set.
   * @type {number}
   * @memberof WatermarkFilter
   */
  public right?: number;

  /**
   * Distance from the top edge of the input video to the top edge of the watermark image. May not be set if 'bottom' is set.
   * @type {number}
   * @memberof WatermarkFilter
   */
  public top?: number;

  /**
   * Distance from the bottom edge of the input video to the bottom edge of the watermark image. May not be set if 'top' is set.
   * @type {number}
   * @memberof WatermarkFilter
   */
  public bottom?: number;

  /**
   * @type {PositionUnit}
   * @memberof WatermarkFilter
   */
  public unit?: PositionUnit;

  constructor(obj: Partial<WatermarkFilter>) {
    super(obj);

    this.image = obj.image;
    this.left = obj.left;
    this.right = obj.right;
    this.top = obj.top;
    this.bottom = obj.bottom;
    this.unit = obj.unit;
  }
}

export default WatermarkFilter;

