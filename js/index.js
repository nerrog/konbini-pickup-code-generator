function on_submit() {
  var service = document.getElementById("select_service").value;
  switch (service) {
    case "LAWSON":
      code_url = lawson_generateUrl(
        document.getElementById("lw_trackId").value,
        document.getElementById("lw_authCode").value,
        document.getElementById("lw_serviceName").value
      );
      var result = document.getElementById("result");
      result.innerHTML = result.href = code_url;
  }
  return false;
}

window.onload = function () {
  var btn = document.getElementById("sub_button");
  btn.addEventListener("click", on_submit);
};
