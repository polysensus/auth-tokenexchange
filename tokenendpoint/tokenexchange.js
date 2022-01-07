const parameters = [
  'audience', 'resource', 'scope', 'requested_token_type',
  'subject_token', 'subject_token_type',
  'actor_token', 'actor_token_type'
];
const allowedDuplicateParameters = ['audience', 'resource'];
const grantType = 'urn:ietf:params:oauth:grant-type:token-exchange';

async function tokenExchangeHandler(ctx, next) {
  // ctx.oidc.params holds the parsed parameters
  // ctx.oidc.client has the authenticated client

  // your grant implementation
  // see /lib/actions/grants for references on how to instantiate and issue tokens
  console.log('hello tokenexchange');
}

function registerTokenExchangeGrant(provider) {
    provider.registerGrantType(grantType, tokenExchangeHandler, parameters, allowedDuplicateParameters);
}

module.exports = registerTokenExchangeGrant;
