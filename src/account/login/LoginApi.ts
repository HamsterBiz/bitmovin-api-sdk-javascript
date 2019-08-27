import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import AccountInformation from '../../models/AccountInformation';
import Login from '../../models/Login';

/**
 * LoginApi - object-oriented interface
 * @export
 * @class LoginApi
 * @extends {BaseAPI}
 */
export default class LoginApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Login
   * @param {Login} login Login Credentials
   * @throws {RequiredError}
   * @memberof LoginApi
   */
  public create(login?: Login): Promise<AccountInformation> {
    return this.restClient.post<AccountInformation>('/account/login', {}, login).then((response) => {
      return new AccountInformation(response);
    });
  }
}
