import {map} from '../common/Mapper';
import CodecConfiguration from './CodecConfiguration';
import ColorConfig from './ColorConfig';
import EncodingMode from './EncodingMode';
import PixelFormat from './PixelFormat';

/**
 * @export
 * @class VideoConfiguration
 */
export class VideoConfiguration extends CodecConfiguration {
  /**
   * Width of the encoded video in pixels
   * @type {number}
   * @memberof VideoConfiguration
   */
  public width?: number;

  /**
   * Height of the encoded video in pixels
   * @type {number}
   * @memberof VideoConfiguration
   */
  public height?: number;

  /**
   * Target bitrate for the encoded video in bps. Either bitrate or crf is required.
   * @type {number}
   * @memberof VideoConfiguration
   */
  public bitrate?: number;

  /**
   * Target frame rate of the encoded video. Must be set for live encodings
   * @type {number}
   * @memberof VideoConfiguration
   */
  public rate?: number;

  /**
   * @type {PixelFormat}
   * @memberof VideoConfiguration
   */
  public pixelFormat?: PixelFormat;

  /**
   * @type {ColorConfig}
   * @memberof VideoConfiguration
   */
  public colorConfig?: ColorConfig;

  /**
   * The numerator of the sample aspect ratio (also known as pixel aspect ratio). Must be set if sampleAspectRatioDenominator is set.
   * @type {number}
   * @memberof VideoConfiguration
   */
  public sampleAspectRatioNumerator?: number;

  /**
   * The denominator of the sample aspect ratio (also known as pixel aspect ratio). Must be set if sampleAspectRatioNumerator is set.
   * @type {number}
   * @memberof VideoConfiguration
   */
  public sampleAspectRatioDenominator?: number;

  /**
   * The mode of the encoding
   * @type {EncodingMode}
   * @memberof VideoConfiguration
   */
  public encodingMode?: EncodingMode;

  constructor(obj: Partial<VideoConfiguration>) {
    super(obj);

    this.width = obj.width;
    this.height = obj.height;
    this.bitrate = obj.bitrate;
    this.rate = obj.rate;
    this.pixelFormat = obj.pixelFormat;
    this.colorConfig = map<ColorConfig>(obj.colorConfig, ColorConfig);
    this.sampleAspectRatioNumerator = obj.sampleAspectRatioNumerator;
    this.sampleAspectRatioDenominator = obj.sampleAspectRatioDenominator;
    this.encodingMode = obj.encodingMode;
  }
}

export default VideoConfiguration;

