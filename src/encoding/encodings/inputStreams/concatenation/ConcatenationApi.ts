import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ConcatenationInputStream from '../../../../models/ConcatenationInputStream';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ConcatenationInputStreamListQueryParams, ConcatenationInputStreamListQueryParamsBuilder} from './ConcatenationInputStreamListQueryParams';

/**
 * ConcatenationApi - object-oriented interface
 * @export
 * @class ConcatenationApi
 * @extends {BaseAPI}
 */
export default class ConcatenationApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Concatenation Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {ConcatenationInputStream} concatenationInputStream The Concatenation Input Stream to be created
   * @throws {BitmovinError}
   * @memberof ConcatenationApi
   */
  public create(encodingId: string, concatenationInputStream?: ConcatenationInputStream): Promise<ConcatenationInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ConcatenationInputStream>('/encoding/encodings/{encoding_id}/input-streams/concatenation', pathParamMap, concatenationInputStream).then((response) => {
      return map(response, ConcatenationInputStream);
    });
  }

  /**
   * @summary Delete Concatenation Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Concatenation input stream.
   * @throws {BitmovinError}
   * @memberof ConcatenationApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/concatenation/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Concatenation Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the concatenation input stream.
   * @throws {BitmovinError}
   * @memberof ConcatenationApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<ConcatenationInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<ConcatenationInputStream>('/encoding/encodings/{encoding_id}/input-streams/concatenation/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, ConcatenationInputStream);
    });
  }

  /**
   * @summary List Concatenation Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ConcatenationApi
   */
  public list(encodingId: string, queryParameters?: ConcatenationInputStreamListQueryParams | ((q: ConcatenationInputStreamListQueryParamsBuilder) => ConcatenationInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<ConcatenationInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ConcatenationInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ConcatenationInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ConcatenationInputStream>>('/encoding/encodings/{encoding_id}/input-streams/concatenation', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ConcatenationInputStream>(response, ConcatenationInputStream);
    });
  }
}
