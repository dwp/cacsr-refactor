//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/check-name', function (req, res) {

  const checkName = req.session.data['checkName']

  if (checkName === 'No') {
    res.redirect('/check-address')
  } else {
    res.redirect('/check-name-input')
  }

})





router.post('/search-result-redirect', function (req, res) {
  const scenarioSelection = req.session.data['prototypeScenarioSelection']

  if (scenarioSelection === 'Pre-registration journey A') {
    res.redirect('/check-name')
  } 

  else if (scenarioSelection === 'Pre-registration journey C') {
    res.redirect('/registration-customer')
  } 

   else if (scenarioSelection === 'Research tasks') {
    res.redirect('/registration-tasks')
  } 


})



router.post('/check-address-redirect', function (req, res) {
  const checkAddress = req.session.data['addressUpdateChoice']

  if (checkAddress === 'Yes') {
    res.redirect('/check-address-lookup-c') }

  else {
    res.redirect('/check-phone')
  }
})


router.post('/check-name-dp-redirect', function (req, res) {

  const checkNameDp = req.session.data['checkName']

  if (checkNameDp === 'No') {
    res.redirect('/check-address-dp')
  } else {
    res.redirect('/check-name-input-dp')
  }

})



router.post('/check-address-dp-redirect', function (req, res) {
  const checkAddressDp = req.session.data['addressUpdateChoiceDp']

  if (checkAddressDp === 'Yes') {
    res.redirect('/check-address-lookup-c-dp') }

  else {
    res.redirect('/check-relationship')
  } 

})


router.post('/check-rel', function (req, res) {

  // TASK A COMPLETE
  req.session.data.taskAStatus = 'completed'

  const checkAddressDp = req.session.data['relationshipCheck']
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (checkAddressDp === 'Yes') {
    res.redirect('/check-relationship-input')
  }

  else if (scenarioCheck === 'Research tasks') {
    res.redirect('/registration-tasks')
  }

  else {
    res.redirect('/check-date-of-claim')
  }

})
router.post('/check-partner-redirect', function (req, res) {
  const checkPartner = req.session.data['hasPartner']

  if (checkPartner === 'Yes') {
    res.redirect('/search-partner') }

  else if (checkPartner === 'No') {
    res.redirect('/search-dp')
  }})


router.post('/dp-search-redirect', function (req, res) {
  const scenarioSelection = req.session.data['prototypeScenarioSelection']

  if (scenarioSelection === 'Pre-registration journey A') {
    res.redirect('/check-name-dp')
  } 
  
  else if (scenarioSelection === 'Pre-registration journey B') {
    res.redirect('/registration-dp')
  } 

  else if (scenarioSelection === 'Research tasks') {
    res.redirect('/registration-dp')
  } 

})



router.post('/phone-input-redirect', function (req, res) {
  const phoneCheck = req.session.data['phoneNumberMatch']

  if (phoneCheck === 'Yes') {
    res.redirect('check-phone-input')
  } 
  
  else if (phoneCheck === 'No') {
    res.redirect('/registration-partner')
  } 

})

router.post('/partner-details-redirect', function (req, res) {
  const phoneCheck = req.session.data['partnerDetailsCheck']
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('/search-dp')
  } 
  
  if (phoneCheck === 'Yes') {
    res.redirect('/registration-partner-input')
  } 
  
  else if (phoneCheck === 'No') {
    res.redirect('/search-dp')
  } 

  

})




router.post('/check-customer-redirect', function (req, res) {
  const phoneCheck = req.session.data['prototypeScenarioSelection']

  if (phoneCheck === 'Pre-registration journey B') {
    res.redirect('/check-partner')
  } 
  
  else if (phoneCheck === 'Pre-registration journey C') {
    res.redirect('registration-partner')
  } 

  else if (phoneCheck === 'Research tasks') {
    res.redirect('registration-partner')
  } 


})



router.post('/name-input-redirect', function (req, res) {
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('/registration-customer')
  } 

   else {
    res.redirect('check-address')
  } 

})

router.post('/address-confirm-redirect', function (req, res) {
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('/registration-customer')
  } 

   else {
    res.redirect('check-phone')
  } 

})

router.post('/phone-confirm-redirect', function (req, res) {
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('/registration-customer')
  } 

   else {
    res.redirect('registration-partner')
  } 

})

router.post('/address-confirm-dp-redirect', function (req, res) {
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('/registration-dp')
  } 

   else {
    res.redirect('check-relationship')
  } 

})


router.post('/relationship-confirm-redirect', function (req, res) {
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('/registration-tasks')
  } 

   else {
    res.redirect('check-date-of-reciept')
  } 

})





router.post('/poa-redirect', function (req, res) {
  const poaCheck = req.session.data['powerOfAttorney']


  if (poaCheck === 'Yes') {
    res.redirect('/assess-poa-msg')
  } 
  
  else if (poaCheck === 'No') {
    res.redirect('/check-relationship')
  } 

  

})


router.post('/partner-overlap-redirect', function (req, res) {

  // TASK B COMPLETE
  req.session.data.taskBStatus = 'completed'

  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('/registration-tasks')
  }

  else {
    res.redirect('/check-name-dp')
  }

})



router.post('/breaks-in-care-redirect', function (req, res) {

  // TASK C COMPLETE
  req.session.data.taskCStatus = 'completed'

  res.redirect('/registration-tasks')

})

router.post('/scenario-selection', function (req, res) {
  const scenarioCheck = req.session.data['prototypeScenarioSelection']

  if (scenarioCheck === 'Research tasks') {
    res.redirect('search')
  } 

   else {
    res.redirect('search')
  } 

})








