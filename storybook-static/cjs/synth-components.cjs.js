'use strict';

const index = require('./index-9cd48f3f.js');

/*
 Stencil Client Patch Browser v2.5.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('synth-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["synth-list_5.cjs",[[1,"synth-list",{"loading":[4],"data":[16],"filterFields":[16],"defaultSortField":[1,"default-sort-field"],"i18n":[16],"decimals":[4],"expandable":[4],"limit":[1026],"enableDownload":[4,"enable-download"],"update":[1028],"sort":[32],"sortField":[32],"currentPage":[32],"showAll":[32]}],[1,"synth-title",{"titleText":[1,"title-text"]}],[0,"synth-list-row",{"row":[16],"isTotal":[4,"is-total"],"expandable":[4],"i18n":[8,"i-1-8n"]}],[1,"synth-no-data",{"mode":[1],"text":[1],"bottomText":[1,"bottom-text"],"i18n":[16]}],[1,"synth-sk-loader",{"repetitions":[2],"height":[2]}]]]], options);
});
