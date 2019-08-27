import {map} from '../common/Mapper';
import AutoRestartConfiguration from './AutoRestartConfiguration';
import EncodingMode from './EncodingMode';
import LiveDashManifest from './LiveDashManifest';
import LiveHlsManifest from './LiveHlsManifest';
import ReuploadSettings from './ReuploadSettings';

/**
 * @export
 * @class StartLiveEncodingRequest
 */
export class StartLiveEncodingRequest {
  /**
   * Key for the stream. (a-zA-Z, 3-20 characters) (required)
   * @type {string}
   * @memberof StartLiveEncodingRequest
   */
  public streamKey?: string;

  /**
   * List of Hls manifests to use for this live encoding
   * @type {LiveHlsManifest[]}
   * @memberof StartLiveEncodingRequest
   */
  public hlsManifests?: LiveHlsManifest[];

  /**
   * List of Dash manifests to use for this live encoding
   * @type {LiveDashManifest[]}
   * @memberof StartLiveEncodingRequest
   */
  public dashManifests?: LiveDashManifest[];

  /**
   * The pass mode of the encoding
   * @type {EncodingMode}
   * @memberof StartLiveEncodingRequest
   */
  public liveEncodingMode?: EncodingMode;

  /**
   * Reupload specific files during a live encoding. This can be helpful if an automatic life cycle policy is enabled on the output storage
   * @type {ReuploadSettings}
   * @memberof StartLiveEncodingRequest
   */
  public reuploadSettings?: ReuploadSettings;

  /**
   * Configuration for auto restarting the live encoding
   * @type {AutoRestartConfiguration}
   * @memberof StartLiveEncodingRequest
   */
  public autoRestartConfiguration?: AutoRestartConfiguration;

  constructor(obj: Partial<StartLiveEncodingRequest>) {

    this.streamKey = obj.streamKey;
    this.hlsManifests = map<LiveHlsManifest>(obj.hlsManifests, LiveHlsManifest) || [];
    this.dashManifests = map<LiveDashManifest>(obj.dashManifests, LiveDashManifest) || [];
    this.liveEncodingMode = obj.liveEncodingMode;
    this.reuploadSettings = map<ReuploadSettings>(obj.reuploadSettings, ReuploadSettings);
    this.autoRestartConfiguration = map<AutoRestartConfiguration>(obj.autoRestartConfiguration, AutoRestartConfiguration);
  }
}

export default StartLiveEncodingRequest;

