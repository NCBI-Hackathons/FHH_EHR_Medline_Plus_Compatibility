new Def.Autocompleter.Search('condition',
 'https://clin-table-search.lhc.nlm.nih.gov/api/conditions/v3/search?ef=term_icd9_code');
Def.Autocompleter.Event.observeListSelections('condition', function() {
  var conditionField = $('#condition')[0];
  var conditionVal = condition.value;
  var autocomp = condition.autocomp;
  var icd9_code =
    autocomp.getItemExtraData(conditionVal)['term_icd9_code'];
  if (icd9_code)
    $('#icd9_code')[0].value = icd9_code;
})