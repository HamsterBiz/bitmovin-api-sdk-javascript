import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import FairplayApi from './fairplay/FairplayApi';
import AesApi from './aes/AesApi';
import SpekeApi from './speke/SpekeApi';
import Drm from '../../../../../models/Drm';
import PaginationResponse from '../../../../../models/PaginationResponse';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public fairplay: FairplayApi;
  public aes: AesApi;
  public speke: SpekeApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.fairplay = new FairplayApi(configuration);
    this.aes = new AesApi(configuration);
    this.speke = new SpekeApi(configuration);
  }

  /**
   * @summary List all DRM configurations of a TS muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the TS muxing
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public list(encodingId: string, muxingId: string): Promise<PaginationResponse<Drm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<Drm>>('/encoding/encodings/{encoding_id}/muxings/ts/{muxing_id}/drm', pathParamMap).then((response) => {
      return new PaginationResponse<Drm>(response, Drm);
    });
  }
}
