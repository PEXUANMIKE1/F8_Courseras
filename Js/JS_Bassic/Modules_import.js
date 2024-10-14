import { LoggerDefault } from './Module/index.js';
import * as types from './constant.js';

LoggerDefault('Hello World 1', types.TYPE_ERROR)
LoggerDefault('Hello World 2', types.TYPE_WARN)
LoggerDefault('Hello World 3', types.TYPE_LOG)