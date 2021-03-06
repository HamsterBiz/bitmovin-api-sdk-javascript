import {FetchAPI} from './RestClient';
import Logger from './Logger';

export interface Configuration {
  apiKey: string;
  tenantOrgId?: string;
  baseUrl?: string;
  fetch?: FetchAPI;
  logger?: Logger;
  headers?: Record<string, string>;
}

export default Configuration;
