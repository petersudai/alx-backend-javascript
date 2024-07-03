/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${newRowID}`);

CRUD.deleteRow(newRowID);
console.log(`Deleted row ID: ${newRowID}`);

