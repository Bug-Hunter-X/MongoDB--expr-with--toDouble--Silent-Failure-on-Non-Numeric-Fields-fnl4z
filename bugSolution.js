```javascript
const query = {
  $expr: {
    $and: [
      { $type: ['$field', 1] }, //Check if the field is a number
      { $eq: [ { $toDouble: '$field' }, 10 ] }
    ]
  }
};
//This enhanced query explicitly checks the field's type using $type. If the field is not a number (type 1), the entire $and expression evaluates to false preventing the $toDouble from failing.
//This makes the error handling more robust and prevents unexpected behavior.
```