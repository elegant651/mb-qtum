# Privacy photo license service, which is NFT based

Think of a service that allows you to upload photos you want to share freely and sell those licenses to others. <br>
Anyone can post pictures, but their identities are unknown, and they focus only on transactions when buying and selling. It works by privacy technology. <br>
In the past, there were the following problems. <br>
1.Users could not claim the rights to the pictures they posted. <br>
2.There was no marketplace to buy and sell good pictures in cheap and transparent ways. <br>
3.As one's identity is revealed, sharing is not free. <br>
4.Unnecessary transaction history remains, resulting in privacy issues. <br>
Qtum with privacy technology can be used to solve this problem. <br>
1.Non Fungible Token (NFT) allows you to record a license for a photograph in a blockchain, which is open to everyone. <br>
2.The company cannot deduct the fees at will, and arbitrates them in a transparent smart contract. <br>
3. Freely share your photos by hiding your identity and focusing on the transaction. <br>
4.There is no need to reveal transaction history and leave behind sensitive personal information.


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


