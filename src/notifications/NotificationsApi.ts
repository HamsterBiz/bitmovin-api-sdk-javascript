import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import WebhooksApi from './webhooks/WebhooksApi';
import StatesApi from './states/StatesApi';
import EmailsApi from './emails/EmailsApi';
import BitmovinResponse from '../models/BitmovinResponse';
import Notification from '../models/Notification';
import NotificationStateEntry from '../models/NotificationStateEntry';
import PaginationResponse from '../models/PaginationResponse';
import {NotificationListQueryParams, NotificationListQueryParamsBuilder} from './NotificationListQueryParams';
import {NotificationStateEntryListByNotificationIdQueryParams, NotificationStateEntryListByNotificationIdQueryParamsBuilder} from './NotificationStateEntryListByNotificationIdQueryParams';

/**
 * NotificationsApi - object-oriented interface
 * @export
 * @class NotificationsApi
 * @extends {BaseAPI}
 */
export default class NotificationsApi extends BaseAPI {
  public webhooks: WebhooksApi;
  public states: StatesApi;
  public emails: EmailsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.webhooks = new WebhooksApi(configuration);
    this.states = new StatesApi(configuration);
    this.emails = new EmailsApi(configuration);
  }

  /**
   * @summary Delete Notification
   * @param {string} notificationId Id of the notification
   * @throws {BitmovinError}
   * @memberof NotificationsApi
   */
  public delete(notificationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.delete<BitmovinResponse>('/notifications/{notification_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Notification
   * @param {string} notificationId Id of the notification
   * @throws {BitmovinError}
   * @memberof NotificationsApi
   */
  public get(notificationId: string): Promise<Notification> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.get<Notification>('/notifications/{notification_id}', pathParamMap).then((response) => {
      return map(response, Notification);
    });
  }

  /**
   * @summary List Notifications
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof NotificationsApi
   */
  public list(queryParameters?: NotificationListQueryParams | ((q: NotificationListQueryParamsBuilder) => NotificationListQueryParamsBuilder)): Promise<PaginationResponse<Notification>> {
    let queryParams: NotificationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new NotificationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Notification>>('/notifications', {}, queryParams).then((response) => {
      return new PaginationResponse<Notification>(response, Notification);
    });
  }

  /**
   * @summary List Notification State History (All Resources)
   * @param {string} notificationId Id of the notification
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof NotificationsApi
   */
  public listByNotificationId(notificationId: string, queryParameters?: NotificationStateEntryListByNotificationIdQueryParams | ((q: NotificationStateEntryListByNotificationIdQueryParamsBuilder) => NotificationStateEntryListByNotificationIdQueryParamsBuilder)): Promise<PaginationResponse<NotificationStateEntry>> {
    const pathParamMap = {
      notification_id: notificationId
    };
    let queryParams: NotificationStateEntryListByNotificationIdQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new NotificationStateEntryListByNotificationIdQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<NotificationStateEntry>>('/notifications/{notification_id}/states', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<NotificationStateEntry>(response, NotificationStateEntry);
    });
  }

  /**
   * @summary Mute Notification
   * @param {string} notificationId Id of the notification
   * @throws {BitmovinError}
   * @memberof NotificationsApi
   */
  public mute(notificationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.post<BitmovinResponse>('/notifications/{notification_id}/mute', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Unmute Notification
   * @param {string} notificationId Id of the notification
   * @throws {BitmovinError}
   * @memberof NotificationsApi
   */
  public unmute(notificationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.post<BitmovinResponse>('/notifications/{notification_id}/unmute', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
