import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import AkamaiMslOutput from './AkamaiMslOutput';
import AkamaiNetStorageOutput from './AkamaiNetStorageOutput';
import AzureOutput from './AzureOutput';
import BitmovinResource from './BitmovinResource';
import FtpOutput from './FtpOutput';
import GcsOutput from './GcsOutput';
import GenericS3Output from './GenericS3Output';
import LiveMediaIngestOutput from './LiveMediaIngestOutput';
import LocalOutput from './LocalOutput';
import S3Output from './S3Output';
import S3RoleBasedOutput from './S3RoleBasedOutput';
import SftpOutput from './SftpOutput';

export type OutputUnion =
  AkamaiNetStorageOutput |
  AzureOutput |
  GenericS3Output |
  GcsOutput |
  FtpOutput |
  LocalOutput |
  S3Output |
  S3RoleBasedOutput |
  SftpOutput |
  AkamaiMslOutput |
  LiveMediaIngestOutput;

/**
 * @export
 * @class Output
 */
export class Output extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    'AKAMAI_NETSTORAGE': 'AkamaiNetStorageOutput',
    'AZURE': 'AzureOutput',
    'GENERIC_S3': 'GenericS3Output',
    'GCS': 'GcsOutput',
    'FTP': 'FtpOutput',
    'LOCAL': 'LocalOutput',
    'S3': 'S3Output',
    'S3_ROLE_BASED': 'S3RoleBasedOutput',
    'SFTP': 'SftpOutput',
    'AKAMAI_MSL': 'AkamaiMslOutput',
    'LIVE_MEDIA_INGEST': 'LiveMediaIngestOutput'
  };

  /**
   * @type {AclEntry[]}
   * @memberof Output
   */
  public acl?: AclEntry[];

  constructor(obj: Partial<Output>) {
    super(obj);

    this.acl = map<AclEntry>(obj.acl, AclEntry) || [];
  }
}

export default Output;

