import { p as promiseResolve, b as bootstrapLazy } from './index-409737c9.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["synth-list_5",[[1,"synth-list",{"loading":[4],"data":[16],"filterFields":[16],"defaultSortField":[1,"default-sort-field"],"i18n":[16],"decimals":[4],"expandable":[4],"limit":[1026],"enableDownload":[4,"enable-download"],"update":[1028],"sort":[32],"sortField":[32],"currentPage":[32],"showAll":[32]}],[1,"synth-title",{"titleText":[1,"title-text"]}],[0,"synth-list-row",{"row":[16],"isTotal":[4,"is-total"],"expandable":[4],"i18n":[8,"i-1-8n"]}],[1,"synth-no-data",{"mode":[1],"text":[1],"bottomText":[1,"bottom-text"],"i18n":[16]}],[1,"synth-sk-loader",{"repetitions":[2],"height":[2]}]]]], options);
});
