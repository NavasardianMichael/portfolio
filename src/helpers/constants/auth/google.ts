export async function googleSignIn() {
  const clientID = "835857672698-q3rt58v0iop6u63clhf3semtpon9r2e2.apps.googleusercontent.com"; // Replace with your client ID
  const redirectUri = `${window.location.origin}/auth-popup`; // Temporary page to handle the callback
  const scopes = ["openid", "email", "profile"];
  const nonce = "testnonce";

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(clientID)}&response_type=id_token&scope=${encodeURIComponent(scopes.join(" "))}&redirect_uri=${encodeURIComponent(redirectUri)}&nonce=${encodeURIComponent(nonce)}`;
  // Open the Google Sign-In popup
  console.log({authUrl})
  const popup = window.open(authUrl, "googleSignIn", "width=500,height=600");

  // Check if the popup is closed and get the token
  const interval = setInterval(() => {
    if (!popup || popup.closed) {
      clearInterval(interval);
      console.error("Popup closed by user or blocked.");
      return;
    }

    try {
      const popupUrl = popup.location.href;
      if (popupUrl.includes("id_token")) {
        const hashParams = new URLSearchParams(popupUrl.split("#")[1]);
        const idToken = hashParams.get("id_token");

        if (idToken) {
          console.log("Google ID Token:", idToken);
          // TODO: Send ID token to your backend for validation
          popup.close();
          clearInterval(interval);
        }
      }
    } catch (error) {
      // Ignore cross-origin errors until the redirect happens
    }
  }, 500);
}
