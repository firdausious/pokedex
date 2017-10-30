import axios from 'axios';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/'
    ? '/' + path
    : path;
  return config.hostname + adjustedPath;
}

function fetcher(method, inputEndpoint, inputParams, inputBody) {
  return axios({
    method,
    url: formatUrl(inputEndpoint),
    data: inputBody
  });
}

export default class apiClient {
  constructor() {
    config.endpoints.forEach((endpoint, endpointKey) => {
      const objApi = {};
      methods.forEach(method => {
        objApi[method] = (params, payload, headerOptions) =>
          fetcher(method, endpoint, params, payload, headerOptions);
      });

      this[endpointKey] = objApi;
    });
  }

  /*
     * There's a V8 bug where, when using Babel, exporting classes with only
     * constructors sometimes fails. Until it's patched, this is a solution to
     * "ApiClient is not defined" from issue #14.
     * https://github.com/erikras/react-redux-universal-hot-example/issues/14
     *
     * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
     *
     * Remove it at your own risk.
     */
  empty() {}
}