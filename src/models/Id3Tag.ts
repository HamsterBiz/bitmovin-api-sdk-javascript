import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import FrameIdId3Tag from './FrameIdId3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';
import PlaintextId3Tag from './PlaintextId3Tag';
import RawId3Tag from './RawId3Tag';

export type Id3TagUnion =
  RawId3Tag |
  FrameIdId3Tag |
  PlaintextId3Tag;

/**
 * @export
 * @class Id3Tag
 */
export class Id3Tag extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    'RAW': 'RawId3Tag',
    'FRAME_ID': 'FrameIdId3Tag',
    'PLAIN_TEXT': 'PlaintextId3Tag'
  };

  /**
   * @type {Id3TagPositionMode}
   * @memberof Id3Tag
   */
  public positionMode?: Id3TagPositionMode;

  /**
   * Frame number at which the Tag should be inserted
   * @type {number}
   * @memberof Id3Tag
   */
  public frame?: number;

  /**
   * Time in seconds where the Tag should be inserted
   * @type {number}
   * @memberof Id3Tag
   */
  public time?: number;

  constructor(obj: Partial<Id3Tag>) {
    super(obj);

    this.positionMode = obj.positionMode;
    this.frame = obj.frame;
    this.time = obj.time;
  }
}

export default Id3Tag;

