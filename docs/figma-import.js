// Figma plugin context only. Call importPersianVariables(parsedInterchangeJson).
// Each import creates a new collection. Review the target document before running.
async function importPersianVariables(document) {
  if(document.schema!=='persian-palette/figma-interchange'||document.schemaVersion!==1)throw new Error('Unsupported interchange schema');
  for(const source of document.collections){
    const collection=figma.variables.createVariableCollection(source.name);
    collection.renameMode(collection.defaultModeId,'Default');
    for(const item of source.variables){
      const variable=figma.variables.createVariable(item.name,collection,'COLOR');
      variable.description=item.description;
      variable.scopes=item.scopes;
      variable.setValueForMode(collection.defaultModeId,item.valuesByMode.Default);
    }
  }
}
