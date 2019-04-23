import {map} from '../common/Mapper';
import DashCmafRepresentation from './DashCmafRepresentation';
import DashMuxingType from './DashMuxingType';

/**
 * @export
 * @class DashCmafDrmRepresentation
 */
export default class DashCmafDrmRepresentation extends DashCmafRepresentation {
  constructor(obj: any) {
    super(obj);
    this.drmId = map(obj.drmId);
  }

  /**
   * DRM Id
   * @type {string}
   * @memberof DashCmafDrmRepresentation
   */
  public drmId: string;
}