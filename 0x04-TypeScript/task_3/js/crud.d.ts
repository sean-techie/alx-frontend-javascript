import { RowID, RowElement } from "./interface.js";

// Declare the functions that exist in crud.js
declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

// Export them so they can be used elsewhere
export { insertRow, deleteRow, updateRow };