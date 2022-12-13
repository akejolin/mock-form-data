const init = () => {

const textStrings = ['testy', 'test', 'testson', 'some', 'like', 'fake', 'foo', 'bar', 'testtest', 'testy-testy','tester', 'testing', 'testy-tester', 'tester-testy']

console.log('* Chrome extension Acast Mercury - Mock form data * Activated')

const randomNumBetween = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const randomIntBetween = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}

let inputs = document.querySelectorAll('input, select');
inputs.forEach(element => {
  const name = element.getAttribute('name') || 'undefined'
  switch(name) {
    case 'companyName': 
      element.value = textStrings[randomIntBetween(0, textStrings.length -1)]
      break;
    case 'addressLine1':
      element.value = 'Testy Street 1'
      break;
    case 'addressLine2':
      element.value = 'Testy Street 2'
      break;
    case 'city':
      element.value = 'Testy City'
      break;
    case 'postalCode':
      element.value = '12345'
      break;
    case 'country':
      element.value = 'SE'
      break;
    case 'businessType':
      element.value = 'advertiser'
      break;
    case 'vat':
      element.value = 'AB0000000XX'
      break;
    case 'url':
      element.value = 'https://some.testy.com'
      break;
    case 'name':
      element.value = 'Testy Testson'
      break;
    case 'surename':
      element.value = 'Testy'
      break;
    case 'familyName':
      element.value = 'Testson'
      break;
    case 'phone':
      element.value = '0700000000'
      break;
    case 'email':
      element.value = `${textStrings[randomIntBetween(0, textStrings.length -1)]}.${textStrings[randomIntBetween(0, textStrings.length -1)]}@${textStrings[randomIntBetween(0, textStrings.length -1)]}.com`
      break;
  }
});

}
setTimeout(init, 1500)
