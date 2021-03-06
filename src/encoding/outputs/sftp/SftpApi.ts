import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import SftpOutput from '../../../models/SftpOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {SftpOutputListQueryParams, SftpOutputListQueryParamsBuilder} from './SftpOutputListQueryParams';

/**
 * SftpApi - object-oriented interface
 * @export
 * @class SftpApi
 * @extends {BaseAPI}
 */
export default class SftpApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create SFTP Output
   * @param {SftpOutput} sftpOutput The SFTP output to be created.
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public create(sftpOutput?: SftpOutput): Promise<SftpOutput> {
    return this.restClient.post<SftpOutput>('/encoding/outputs/sftp', {}, sftpOutput).then((response) => {
      return map(response, SftpOutput);
    });
  }

  /**
   * @summary Delete SFTP Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public delete(outputId: string): Promise<SftpOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<SftpOutput>('/encoding/outputs/sftp/{output_id}', pathParamMap).then((response) => {
      return map(response, SftpOutput);
    });
  }

  /**
   * @summary SFTP Output Details
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public get(outputId: string): Promise<SftpOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<SftpOutput>('/encoding/outputs/sftp/{output_id}', pathParamMap).then((response) => {
      return map(response, SftpOutput);
    });
  }

  /**
   * @summary List SFTP Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public list(queryParameters?: SftpOutputListQueryParams | ((q: SftpOutputListQueryParamsBuilder) => SftpOutputListQueryParamsBuilder)): Promise<PaginationResponse<SftpOutput>> {
    let queryParams: SftpOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SftpOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SftpOutput>>('/encoding/outputs/sftp', {}, queryParams).then((response) => {
      return new PaginationResponse<SftpOutput>(response, SftpOutput);
    });
  }
}
