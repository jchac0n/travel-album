let ACCESS_TOKEN = "";

// Function contents copied directly from webninjadevelopers's
// 'javascript-oauth2-google-login-logout-example-using-access-token-in-browser'
// tutorial
function acquireToken() {
  // Parse query string to see if page request is coming from OAuth 2.0 server.
  const authInfo = JSON.parse(localStorage.getItem("authInfo"));
  if (authInfo) {
    console.log("i found my data!");
    return authInfo["access_token"];
  }

  var params = {};
  var regex = /([^&=]+)=([^&]*)/g,
    m;
  while ((m = regex.exec(location.href))) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  if (Object.keys(params).length > 0) {
    localStorage.setItem("authInfo", JSON.stringify(params));

    window.history.pushState({}, document.title, "/" + "index.html");
    let info = JSON.parse(localStorage.getItem("authInfo"));
    console.log(info["access_token"]);
    console.log(info["expires_in"]);
    console.log("i parsed my data!!");
    return info["access_token"];
  }

  console.log("i didn't find data!!!");
}

// Function contents copied directly from webninjadevelopers's
// 'javascript-oauth2-google-login-logout-example-using-access-token-in-browser'
// tutorial
const googleLogIn = () => {
  const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  const form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    client_id:
      ///TODO: get this from  local file
      "",
    redirect_uri: "http://127.0.0.1:5173/index.html",
    response_type: "token",
    scope: "https://www.googleapis.com/auth/drive",
    include_granted_scopes: "true",
    state: "pass-through value",
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
};

function searchFiles(q = "") {
  fetch(
    `https://www.googleapis.com/drive/v3/files?q=${q}&pageSize=50&supportsAllDrives=true&fields=files(name,id,mimeType)`,
    {
      method: "GET",
      headers: new Headers({ Authorization: "Bearer " + ACCESS_TOKEN }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then(function (val) {
      console.log(val);
      val.files.forEach((file) => {
        console.log(file.name);
      });
    });
}

// Function contents copied directly from webninjadevelopers's
// 'javascript-oauth2-google-login-logout-example-using-access-token-in-browser'
// tutorial
// const googleLogOut = () => {
//   fetch("https://oauth2.googleapis.com/revoke?token=" + info["access_token"], {
//     method: "POST",
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded",
//     },
//   }).then((data) => {
//     location.href = "http://localhost:5500/index.html";
//   });
// };

// Just for now let's render here all the data we can get
const GoogleProfile = () => {
  ACCESS_TOKEN = acquireToken();
  if (ACCESS_TOKEN) {
    console.log(ACCESS_TOKEN);
    searchFiles("mimeType contains 'image/'");
  }
  return (
    <button onClick={googleLogIn} className="account">
      <span className="fa-brands fa-google" aria-hidden="true"></span>
      <span className="sr-only">Google Sign In</span>
    </button>
  );
};

export default GoogleProfile;
