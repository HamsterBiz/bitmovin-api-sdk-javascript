import AudioMixInputStream from './AudioMixInputStream';
import BitmovinResource from './BitmovinResource';
import ConcatenationInputStream from './ConcatenationInputStream';
import FileInputStream from './FileInputStream';
import H264PictureTimingTrimmingInputStream from './H264PictureTimingTrimmingInputStream';
import IngestInputStream from './IngestInputStream';
import TimeBasedTrimmingInputStream from './TimeBasedTrimmingInputStream';
import TimecodeTrackTrimmingInputStream from './TimecodeTrackTrimmingInputStream';

export type InputStreamUnion =
  IngestInputStream |
  ConcatenationInputStream |
  TimeBasedTrimmingInputStream |
  TimecodeTrackTrimmingInputStream |
  H264PictureTimingTrimmingInputStream |
  AudioMixInputStream |
  FileInputStream;

/**
 * @export
 * @class InputStream
 */
export class InputStream extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    'INGEST': 'IngestInputStream',
    'CONCATENATION': 'ConcatenationInputStream',
    'TRIMMING_TIME_BASED': 'TimeBasedTrimmingInputStream',
    'TRIMMING_TIME_CODE_TRACK': 'TimecodeTrackTrimmingInputStream',
    'TRIMMING_H264_PICTURE_TIMING': 'H264PictureTimingTrimmingInputStream',
    'AUDIO_MIX': 'AudioMixInputStream',
    'FILE': 'FileInputStream'
  };

  constructor(obj: Partial<InputStream>) {
    super(obj);

  }
}

export default InputStream;

