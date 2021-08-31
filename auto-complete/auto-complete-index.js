import * as AutoComplete from './auto-complete-lib.js';

let data = ["Delhi", "Gorakhpur", "Noida", "Pune", "Gurugram"];

let el = document.getElementById("autocomplete-data-list");

AutoComplete.autoComplete(data, el);
