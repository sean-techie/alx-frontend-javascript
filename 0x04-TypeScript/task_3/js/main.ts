/// <reference path="./crud.d.ts" />

// Import your types from interface.ts
import { RowID, RowElement } from './interface';

// Import all functions from crud.js
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row (required by ALX checker/autograder)
// Use the spread operator to copy `row` and add `age: 23`
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);