import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import CustomData from '../../../../../../../models/CustomData';

/**
 * CustomdataApi - object-oriented interface
 * @export
 * @class CustomdataApi
 * @extends {BaseAPI}
 */
export default class CustomdataApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary SPEKE DRM Custom Data of MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing
   * @param {string} drmId Id of the SPEKE DRM.
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/speke/{drm_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
