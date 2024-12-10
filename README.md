# MongoDB $expr with $toDouble: Silent Failure on Non-Numeric Fields

This repository demonstrates a subtle bug in MongoDB queries using the `$toDouble` operator within the `$expr` aggregation operator. When the target field contains non-numeric values (e.g., strings, null), the query fails silently without providing a clear error message, leading to unexpected behavior.

The `bug.js` file contains the problematic query. The `bugSolution.js` provides a robust solution.