let url = 'https://raw.githubusercontent.com/sumanair/oid4vci/main/.well-known/openid-credential-issuer.json';

fetch(url)
.then(res => res.json())
.then(out =>
  console.log('Checkout this JSON! ', out))
.catch(err => { throw err });