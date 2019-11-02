import useApiRequest from '../ApiRequest/useApiRequest';

function useUser(id) {
  var url = id ? "https://api.spotify.com/v1/users/".concat(id) : 'https://api.spotify.com/v1/me';

  var _useApiRequest = useApiRequest(url),
      data = _useApiRequest.data,
      loading = _useApiRequest.loading,
      error = _useApiRequest.error;

  return {
    data: data,
    loading: loading,
    error: error
  };
}

export default useUser;