const router = require('express').Router();

router.get('/', (req, res) => {
  if(process.env.NODE_ENV === 'production') {
    res.sendFile('/client/build/index.html');
  } else {
    res.send('The client is not on this server!');
  }
})

module.exports = router;