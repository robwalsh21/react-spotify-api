import useApiRequest from '../ApiRequest/useApiRequest';

function useAlbum(id) {
  var url = Array.isArray(id) ? "https://api.spotify.com/v1/albums" : "https://api.spotify.com/v1/albums/".concat(id);
  var options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  var _useApiRequest = useApiRequest(url, options),
      data = _useApiRequest.data,
      loading = _useApiRequest.loading,
      error = _useApiRequest.error;

  return {
    data: data,
    loading: loading,
    error: error
  };
}

export default useAlbum;