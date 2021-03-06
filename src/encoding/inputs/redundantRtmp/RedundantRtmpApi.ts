import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import BitmovinResponse from '../../../models/BitmovinResponse';
import RedundantRtmpInput from '../../../models/RedundantRtmpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {RedundantRtmpInputListQueryParams, RedundantRtmpInputListQueryParamsBuilder} from './RedundantRtmpInputListQueryParams';

/**
 * RedundantRtmpApi - object-oriented interface
 * @export
 * @class RedundantRtmpApi
 * @extends {BaseAPI}
 */
export default class RedundantRtmpApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Redundant RTMP Input
   * @param {RedundantRtmpInput} redundantRtmpInput The Redundant RTMP input to be created
   * @throws {BitmovinError}
   * @memberof RedundantRtmpApi
   */
  public create(redundantRtmpInput?: RedundantRtmpInput): Promise<RedundantRtmpInput> {
    return this.restClient.post<RedundantRtmpInput>('/encoding/inputs/redundant-rtmp', {}, redundantRtmpInput).then((response) => {
      return map(response, RedundantRtmpInput);
    });
  }

  /**
   * @summary Delete Redundant RTMP Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof RedundantRtmpApi
   */
  public delete(inputId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/inputs/redundant-rtmp/{input_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Redundant RTMP Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof RedundantRtmpApi
   */
  public get(inputId: string): Promise<RedundantRtmpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<RedundantRtmpInput>('/encoding/inputs/redundant-rtmp/{input_id}', pathParamMap).then((response) => {
      return map(response, RedundantRtmpInput);
    });
  }

  /**
   * @summary List Redundant RTMP Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RedundantRtmpApi
   */
  public list(queryParameters?: RedundantRtmpInputListQueryParams | ((q: RedundantRtmpInputListQueryParamsBuilder) => RedundantRtmpInputListQueryParamsBuilder)): Promise<PaginationResponse<RedundantRtmpInput>> {
    let queryParams: RedundantRtmpInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new RedundantRtmpInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<RedundantRtmpInput>>('/encoding/inputs/redundant-rtmp', {}, queryParams).then((response) => {
      return new PaginationResponse<RedundantRtmpInput>(response, RedundantRtmpInput);
    });
  }
}
