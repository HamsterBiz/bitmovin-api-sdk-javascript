import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import IFramePlaylist from '../../../../../models/IFramePlaylist';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {IFramePlaylistListQueryParams, IFramePlaylistListQueryParamsBuilder} from './IFramePlaylistListQueryParams';

/**
 * IframeApi - object-oriented interface
 * @export
 * @class IframeApi
 * @extends {BaseAPI}
 */
export default class IframeApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add I-frame playlist to variant stream
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {IFramePlaylist} iFramePlaylist The I-frame playlist to be added
   * @throws {BitmovinError}
   * @memberof IframeApi
   */
  public create(manifestId: string, streamId: string, iFramePlaylist?: IFramePlaylist): Promise<IFramePlaylist> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId
    };
    return this.restClient.post<IFramePlaylist>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/iframe', pathParamMap, iFramePlaylist).then((response) => {
      return map(response, IFramePlaylist);
    });
  }

  /**
   * @summary Delete I-frame playlist
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {string} iframeId Id of the Iframe-Playlist.
   * @throws {BitmovinError}
   * @memberof IframeApi
   */
  public delete(manifestId: string, streamId: string, iframeId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId,
      iframe_id: iframeId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/iframe/{iframe_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary I-frame playlist Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {string} iframeId Id of the Iframe-Playlist.
   * @throws {BitmovinError}
   * @memberof IframeApi
   */
  public get(manifestId: string, streamId: string, iframeId: string): Promise<IFramePlaylist> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId,
      iframe_id: iframeId
    };
    return this.restClient.get<IFramePlaylist>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/iframe/{iframe_id}', pathParamMap).then((response) => {
      return map(response, IFramePlaylist);
    });
  }

  /**
   * @summary List all I-frame playlists of a variant stream
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} streamId Id of the variant stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof IframeApi
   */
  public list(manifestId: string, streamId: string, queryParameters?: IFramePlaylistListQueryParams | ((q: IFramePlaylistListQueryParamsBuilder) => IFramePlaylistListQueryParamsBuilder)): Promise<PaginationResponse<IFramePlaylist>> {
    const pathParamMap = {
      manifest_id: manifestId,
      stream_id: streamId
    };
    let queryParams: IFramePlaylistListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new IFramePlaylistListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<IFramePlaylist>>('/encoding/manifests/hls/{manifest_id}/streams/{stream_id}/iframe', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<IFramePlaylist>(response, IFramePlaylist);
    });
  }
}
