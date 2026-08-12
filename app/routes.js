//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/claim-type', function (req, res) {
  const selection = req.body.claimType;

  if (selection === 'First time claim registered manually') {
    res.redirect('/registration-tasks');
  } else {
    res.redirect('/search');
  }
});