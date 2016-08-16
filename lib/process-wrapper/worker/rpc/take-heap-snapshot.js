'use strict'

const heapdump = require('heapdump')
const fs = require('fs')
const async = require('async')

module.exports = function takeHeapSnapshot (path, callback) {
  async.waterfall([
    heapdump.writeSnapshot.bind(heapdump, path),
    function statHeapDump (_, next) {
      fs.stat(path, next)
    },
    function mapStat (stat, next) {
      next(null, {
        date: stat.birthtime.getTime(),
        path: path,
        size: stat.size
      })
    }
  ], callback)
}