'use strict';

import mongoose from 'mongoose';

var LogSchema = new mongoose.Schema({
  name: String,
  info: String,
  output: [String]
});

export default mongoose.model('Log', LogSchema);
