



const changeSelected = (query, value) => {
  const selectEl = document.querySelector(query);
  const options = Array.from(selectEl.options);
  let targetedIndex = 0
  options.forEach((element, i) => {
    if (element.getAttribute('value') === value) {
      targetedIndex = i
    }
  })
  selectEl.selectedIndex = `${targetedIndex}`
  
};

const init = () => {

const textStrings = ['testy', 'test', 'testson', 'some', 'like', 'fake', 'foo', 'bar', 'testtest', 'testy-testy','tester', 'testing', 'testy-tester', 'tester-testy']

console.log('* Chrome extension Acast Mercury - Mock form data * Activated')

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
      changeSelected('select[name=country]', 'GB')
      break;
    case 'businessType':
      changeSelected('select[name=businessType]', 'advertiser')
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

const setCountry = () => {
  changeSelected('select[name=country]', 'SE')
};

const setVat = () => {
  const vat = document.querySelector('input[name=vat]');
  vat ? vat.value='AB0000000XX': null
};

const loopFocus = () => {
  let inputs = document.querySelectorAll('input, select');
  inputs.forEach(element => {
    element.focus();
    element.blur();
  })
};

setTimeout(init, 1500)
//setTimeout(init, 2000)

//setTimeout(setVat, 2500)
setTimeout(loopFocus, 2000)
