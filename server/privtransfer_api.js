module.exports = function(app, key) {
  const { Qtum } = require('qtumjs')
  const Web3 = require('web3')
  const web3 = new Web3()
  const repoData = require("./contracts/solar.development.json")

  const qtum = new Qtum("http://qtum:test@localhost:3889", repoData)

  const pvTransfer = qtum.contract('server/contracts/PrivacyTransfer.sol')

  function getHexAddres(address) {
    const bs58check = require('bs58check')
    const decoded = bs58check.decode(address)
    // console.log(decoded.toString('hex').slice(2))
    return decoded.toString('hex').slice(2);
  }

  app.post('/api/uploadPhoto', async (req, res) => {
    const photo = req.body.photo
    const title = req.body.title
    const location = req.body.location
    const description = req.body.description

    const tx = await pvTransfer.send("uploadPhoto", [photo, title, location. description])
    const result = await tx.confirm(1)
    console.log(result)
    res.json({
      'result': result
    })
  })

  app.post('/api/transferOwnership', async (req, res) => {
    const tokenId = req.body.tokenId
    const to = req.body.to

    const tx = await pvTransfer.send("transferOwnership", [tokenId, to])
    const result = await tx.confirm(1)
    console.log(result)
    res.json({
      'result': result
    })
  })

  app.post('/api/transferFrom', async (req, res) => {
    const from = req.body.from
    const to = req.body.to
    const tokenId = req.body.tokenId

    const tx = await pvTransfer.send("transferFrom", [from, to, tokenId])
    const result = await tx.confirm(1)
    console.log(result)
    res.json({
      'result': result
    })
  })

  app.get('/api/getTotalPhotoCount', async (req, res) => {
    let result = await pvTransfer.call("getTotalPhotoCount")

    res.json({"count": result.outputs[0]})
  })

  app.get('/api/getPhoto/:tokenId', async (req, res) => {
    const tokenId = req.params.tokenId
    if(!tokenId) return
    
    let jboj = {}
    let result = await pvTransfer.call("getPhoto", [tokenId])
    [jobj.tokenId, jobj.ownerHistory, jobj.photo, jobj.title, jobj.location, jobj.description, jobj.timestamp] = ...result.outputs
    
    res.json(jobj)
  })


  async function streamEvents() {
    console.log("Subscribed to contract events")    

    lineup.onLog((entry) => {
      console.log(entry)
    }, { minconf: 1 })
  }

  //event logs
  streamEvents()

}