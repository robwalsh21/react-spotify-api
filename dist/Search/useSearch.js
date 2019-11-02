import _objectSpread from "@babel/runtime/helpers/objectSpread";
import useApiRequest from '../ApiRequest/useApiRequest';

function useSearch(query, options) {
  var url = 'https://api.spotify.com/v1/search';
  var type = [];
  if (options.album) type.push('album');
  if (options.artist) type.push('artist');
  if (options.playlist) type.push('playlist');
  if (options.track) type.push('track');

  var optionsObj = _objectSpread({
    q: query,
    type: type.join(',')
  }, options);

  var _useApiRequest = useApiRequest(url, optionsObj),
      data = _useApiRequest.data,
      loading = _useApiRequest.loading,
      error = _useApiRequest.error;

  return {
    data: data,
    loading: loading,
    error: error
  };
}

export default useSearch;