// ==UserScript==
// @name         快点众包界面优化
// @namespace    kdzb.cc
// @version      1.03
// @description  配合Windows高对比度主题暗夜一起使用，主要为了不晃眼睛，最适用于利用前进和后退刷题的小伙伴们
// @author       Jiyao
// @match        https://kdzb.cc/*
// @icon         https://kdzb.cc/logo.png
// @license      AGPL-3.0
// @grant        GM_addStyle
// @downloadURL https://update.greasyfork.org/scripts/485391/%E5%BF%AB%E7%82%B9%E4%BC%97%E5%8C%85%E7%95%8C%E9%9D%A2%E4%BC%98%E5%8C%96.user.js
// @updateURL https://update.greasyfork.org/scripts/485391/%E5%BF%AB%E7%82%B9%E4%BC%97%E5%8C%85%E7%95%8C%E9%9D%A2%E4%BC%98%E5%8C%96.meta.js
// ==/UserScript==

(function() {
    'use strict';

    // 去除watermar,黑色背景
    GM_addStyle('.watermark{visibility: hidden !important;}.el-scrollbar__wrap{background: black;}');
    //今日收入
    GM_addStyle('.income-card{background: black !important;border-style: dashed;border-color:#ffffff;}');
    //等级展示
    GM_addStyle('.level-info{background: black !important;border-style: dashed;border-color:#ffffff;}.page .level-info .title{color:#ffffff !important;}.page .level-info .content .item .num{color:#ffffff !important;}.page .level-info .content .item .name{color:#ffffff !important;}');
    //今日排名
    GM_addStyle('.ranking{background: black !important;}.personal .ranking .rank-num{color:#ffffff !important;}.personal .ranking .name{color:#ffffff !important;}');
    //个人概况
    GM_addStyle('.personal .withdraw-box{background-color: #000000 !important;border-style: dashed;border-color:#ffffff;}.personal .num-box .time-item{background-color: #000000 !important;}.personal .num-box .num-item{border-style: dashed;}.personal{background-color: #000000 !important;}.personal .earnings{color:#ffffff !important;}.personal .title{color:#ffffff !important;}.personal .num-box .num-item{background-color: #000000 !important;}.personal .num-box .item .name{color:#ffffff !important;}.personal .num-box .item .num{color:#ffffff !important;}');
    //订单统计和排名
    GM_addStyle('.rank-list .rank-head{background: #000000 !important;color:#ffffff !important;}.rank-list .rank-foot{background: #000000 !important;color:#ffffff !important;}.home-page .bottom .section-statistics{background-color: #000000 !important;}.analysis .num-box .item{background: #000000 !important;}.analysis .num-box .item .name{color:#ffffff !important;}.analysis .num-box .item .num{color:#ffffff !important;}');

    GM_addStyle('.goods-camp{background: black !important;}');

    GM_addStyle('.el-badge__content.is-fixed{font-size: xx-large !important;}');
 })();