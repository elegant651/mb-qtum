# Qtum Project for Qtum Hack 2019

## Generate QRC-20 based privacy token

## Run client

### Project setup on client
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

## Run server

### Project setup on server
```
npm install
```

### Run
```
node app.js
```


## Contracts

### qtum-cli environment
```
qcli generate 600
qcli sendtoaddress <qtumaddress> 10
qcli listunspent 1 99999 '["<qtumaddress>"]'
```

### Compile contract with Solar
```
solar deploy server/contracts/MimbleToken.sol
```

### Check deployed transaction
```
solar status
```


