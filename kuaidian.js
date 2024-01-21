// ==UserScript==
// @name         快点众包界面优化
// @namespace    kdzb.cc
// @version      1.0
// @description  快点众包界面优化
// @author       Jiyao
// @match        https://kdzb.cc/*
// @icon         https://kdzb.cc/logo.png
// @license      AGPL-3.0
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // 去除watermar
    GM_addStyle('.watermark{visibility: hidden !important;}');
    GM_addStyle('.income-card{background: black !important;border-style: dashed;}');
    GM_addStyle('.level-info{background: black !important;border-style: dashed;}');
    GM_addStyle('.ranking{background: black !important;border-style: dashed;}');
    GM_addStyle('.personal .num-box .num-item{border-style: dashed;}');
    GM_addStyle('.goods-camp{background: black !important;}');
    GM_addStyle('.el-badge__content.is-fixed{font-size: xx-large !important;}');
 })();