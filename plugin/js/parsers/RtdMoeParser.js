"use strict";

parserFactory.register("rtd.moe", function() { return new RtdMoeParser() });

class RtdMoeParser extends Parser{
    constructor() {
        super();
    }

    getChapterUrls(dom) {
        let menu = this.findContent(dom);
        return Promise.resolve(util.hyperlinksToChapterList(menu));
    };

    findContent(dom) {
        return dom.querySelector("div#content");
    };

    extractTitleImpl(dom) {
        return dom.querySelector("h1");
    };

    removeUnwantedElementsFromContentElement(element) {
        util.removeChildElementsMatchingCss(element, "div.wp-post-navigation, div.tags");
        super.removeUnwantedElementsFromContentElement(element);
    }

    findChapterTitle(dom) {
        return dom.querySelector("h1");
    }
}
