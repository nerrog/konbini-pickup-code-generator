const baseUrl = "https://pickup.lawson.jp/bcd/vw.php";

function lawson_generateUrl(trackId, authCode, serviceId) {
  const url =
    baseUrl + "?JN=" + trackId + "&NN=" + authCode + "&CP=" + serviceId;
  return url;
}
