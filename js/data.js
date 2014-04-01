/**
 * Created by rforbes on 3/24/14.
 */
var serviceApp = angular.module('dataServices', []);

serviceApp.factory('years', function(){
    return [
        2014,
        2013,
        2012
    ];
});

serviceApp.factory('modules', function(){
    return [
        {'id': 1, 'name': 'Individual', 'year': 2012},
        {'id': 2, 'name': 'S Corporation', 'year': 2012},
        {'id': 3, 'name': 'Partnership', 'year': 2012},
        {'id': 4, 'name': 'Individual', 'year': 2013},
        {'id': 5, 'name': 'S Corporation', 'year': 2013},
        {'id': 6, 'name': 'Partnership', 'year': 2013},
        {'id': 7, 'name': 'Corporation', 'year': 2013},
        {'id': 8, 'name': 'Individual', 'year': 2014},
        {'id': 9, 'name': 'S Corporation', 'year': 2014},
        {'id': 10, 'name': 'Partnership', 'year': 2014},
        {'id': 11, 'name': 'Corporation', 'year': 2014}
    ];
});

serviceApp.factory('entities', function(){
    return [
        {'id': 1, 'name': 'W2'},
        {'id': 2, 'name': '1040'},
        {'id': 3, 'name': 'E2'}
    ];
});

serviceApp.factory('series', function(){
   return [
       {'id': 1, 'name': "Series 1"},
       {'id': 2, 'name': "Series 2"},
       {'id': 3, 'name': "Series 3"}
   ];
});

serviceApp.factory('formfields', function(){
   return[
       {'id': 1, 'typeId': 1, 'formId': 1, 'fieldId': 1},
       {'id': 1, 'typeId': 1, 'formId': 1, 'fieldId': 2},
       {'id': 1, 'typeId': 1, 'formId': 1, 'fieldId': 3},
       {'id': 1, 'typeId': 1, 'formId': 1, 'fieldId': 4},
       {'id': 1, 'typeId': 1, 'formId': 2, 'fieldId': 1},
       {'id': 1, 'typeId': 1, 'formId': 2, 'fieldId': 2},
       {'id': 1, 'typeId': 1, 'formId': 2, 'fieldId': 3},
       {'id': 1, 'typeId': 1, 'formId': 3, 'fieldId': 1},
       {'id': 1, 'typeId': 1, 'formId': 3, 'fieldId': 2},
       {'id': 1, 'typeId': 4, 'formId': 1, 'fieldId': 1},
       {'id': 1, 'typeId': 4, 'formId': 1, 'fieldId': 2},
       {'id': 1, 'typeId': 4, 'formId': 1, 'fieldId': 3},
       {'id': 1, 'typeId': 4, 'formId': 1, 'fieldId': 4},
       {'id': 1, 'typeId': 8, 'formId': 1, 'fieldId': 1},
       {'id': 1, 'typeId': 8, 'formId': 1, 'fieldId': 2},
       {'id': 1, 'typeId': 8, 'formId': 1, 'fieldId': 3},
       {'id': 1, 'typeId': 8, 'formId': 1, 'fieldId': 4},
   ]
});

serviceApp.factory('fields', function(){
    return[
        {'id': 1, 'formId': 1, 'name': 'Name', 'customName': '', 'ateValue': 'ateName', 'tpsValue': 'tpsName', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.'},
        {'id': 2, 'formId': 1, 'name': 'Gross', 'customName': '', 'ateValue': 'gross', 'tpsValue': 'gross', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 3, 'formId': 1, 'name': 'SSN', 'customName': '', 'ateValue': 'ssn', 'tpsValue': 'ssn', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 4, 'formId': 2, 'name': 'Date', 'customName': '', 'ateValue': 'date', 'tpsValue': 'currentDate', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 5, 'formId': 2, 'name': 'Name', 'customName': '', 'ateValue': 'name', 'tpsValue': 'name', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 6, 'formId': 2, 'name': 'Name', 'customName': '', 'ateValue': 'name', 'tpsValue': 'name', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 7, 'formId': 3, 'name': 'Name', 'customName': '', 'ateValue': 'name', 'tpsValue': 'name', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 8, 'formId': 3, 'name': 'Name', 'customName': '', 'ateValue': 'name', 'tpsValue': 'name', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 9, 'formId': 3, 'name': 'SSN', 'customName': '', 'ateValue': 'ssn', 'tpsValue': 'ssn', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 10, 'formId': 1, 'name': 'Name', 'customName': '', 'ateValue': 'name', 'tpsValue': 'name', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' },
        {'id': 11, 'formId': 1, 'name': 'Name', 'customName': '', 'ateValue': 'name', 'tpsValue': 'name', 'description': 'Congratulations, deathballers! Weve won the right to explore the anomaly! I was playing for my freedom! Now, Ive often said good newswhen sending you on a mission of extreme danger. So when I say this anomaly is dangerous, you can imagine how dangerous I really think it is. Not dangerous at all? Actually, quite dangerous indeed. That is quite dangerous! Indeed. Now stop shilly-shallying! Prep the ship and line up for your preflight coffee enemas! Warning. The enema you are about to enjoy is extremely hot.' }
    ];
})