```javascript
const query = { $expr: { $eq: [ { $toDouble: '$field' }, 10 ] } };
//This query will fail if the 'field' contains non-numeric values or null values.
```