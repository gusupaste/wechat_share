// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDisplay = require('../../../app/controller/display');
import ExportInfo = require('../../../app/controller/info');
import ExportJump = require('../../../app/controller/jump');
import ExportRecord = require('../../../app/controller/record');
import ExportSystem = require('../../../app/controller/system');
import ExportTest = require('../../../app/controller/test');
import ExportTrainDomain = require('../../../app/controller/trainDomain');
import ExportUrl = require('../../../app/controller/url');
import ExportX = require('../../../app/controller/x');
import ExportJqSogo = require('../../../app/controller/jq/sogo');
import ExportJqShareBmdBx = require('../../../app/controller/jqShare/bmdBx');
import ExportJqShareBmdLb = require('../../../app/controller/jqShare/bmdLb');
import ExportJqShareBxJq = require('../../../app/controller/jqShare/bxJq');
import ExportJqShareShareJq = require('../../../app/controller/jqShare/shareJq');
import ExportWxLink = require('../../../app/controller/wx/link');
import ExportWxShareWx = require('../../../app/controller/wx/shareWx');

declare module 'egg' {
  interface IController {
    display: ExportDisplay;
    info: ExportInfo;
    jump: ExportJump;
    record: ExportRecord;
    system: ExportSystem;
    test: ExportTest;
    trainDomain: ExportTrainDomain;
    url: ExportUrl;
    x: ExportX;
    jq: {
      sogo: ExportJqSogo;
    }
    jqShare: {
      bmdBx: ExportJqShareBmdBx;
      bmdLb: ExportJqShareBmdLb;
      bxJq: ExportJqShareBxJq;
      shareJq: ExportJqShareShareJq;
    }
    wx: {
      link: ExportWxLink;
      shareWx: ExportWxShareWx;
    }
  }
}
