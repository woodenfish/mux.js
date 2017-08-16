module.exports = {
  tag: require('./flv-tag'),
  AudioSegmentStream: require('./transmuxer').AudioSegmentStream,
  VideoSegmentStream: require('./transmuxer').VideoSegmentStream,
  CoalesceStream: require('./coalesce-stream'),
  Transmuxer: require('./transmuxer'),
  getFlvHeader: require('./flv-header')
};
