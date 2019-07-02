export default interface CencDrmListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {string}
     * @memberof CencDrmListQueryParams
     */
    offset?: string;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {string}
     * @memberof CencDrmListQueryParams
     */
    limit?: string;
}