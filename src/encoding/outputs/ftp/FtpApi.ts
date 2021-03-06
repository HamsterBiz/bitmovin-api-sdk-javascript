import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import FtpOutput from '../../../models/FtpOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {FtpOutputListQueryParams, FtpOutputListQueryParamsBuilder} from './FtpOutputListQueryParams';

/**
 * FtpApi - object-oriented interface
 * @export
 * @class FtpApi
 * @extends {BaseAPI}
 */
export default class FtpApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create FTP Output
   * @param {FtpOutput} ftpOutput The FTP output to be created
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public create(ftpOutput?: FtpOutput): Promise<FtpOutput> {
    return this.restClient.post<FtpOutput>('/encoding/outputs/ftp', {}, ftpOutput).then((response) => {
      return map(response, FtpOutput);
    });
  }

  /**
   * @summary Delete FTP Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public delete(outputId: string): Promise<FtpOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<FtpOutput>('/encoding/outputs/ftp/{output_id}', pathParamMap).then((response) => {
      return map(response, FtpOutput);
    });
  }

  /**
   * @summary FTP Output Details
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public get(outputId: string): Promise<FtpOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<FtpOutput>('/encoding/outputs/ftp/{output_id}', pathParamMap).then((response) => {
      return map(response, FtpOutput);
    });
  }

  /**
   * @summary List FTP Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public list(queryParameters?: FtpOutputListQueryParams | ((q: FtpOutputListQueryParamsBuilder) => FtpOutputListQueryParamsBuilder)): Promise<PaginationResponse<FtpOutput>> {
    let queryParams: FtpOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new FtpOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<FtpOutput>>('/encoding/outputs/ftp', {}, queryParams).then((response) => {
      return new PaginationResponse<FtpOutput>(response, FtpOutput);
    });
  }
}
