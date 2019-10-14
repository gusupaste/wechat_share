// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBq = require('../../../app/service/bq');
import ExportCheckUrl = require('../../../app/service/checkUrl');
import ExportFilter = require('../../../app/service/filter');
import ExportRefer = require('../../../app/service/refer');
import ExportUrl = require('../../../app/service/url');

declare module 'egg' {
  interface IService {
    bq: ExportBq;
    checkUrl: ExportCheckUrl;
    filter: ExportFilter;
    refer: ExportRefer;
    url: ExportUrl;
  }
}
