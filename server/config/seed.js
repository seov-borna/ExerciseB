/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Log from '../api/log/log.model';

Log.find({}).remove()
  .then(() => {
    Log.create({
      name: 'Log 1',
      info: 'Apache access log (success - code 200)',
      output: ['192.168.2.20 - - [28/Jul/2006:10:27:10 -0300] "GET /cgi-bin/try/ HTTP/1.0" 200 3395',
              '127.0.0.1 - - [28/Jul/2006:10:22:04 -0300] "GET / HTTP/1.0" 200 2216']
    }, {
      name: 'Log 2',
      info: 'Apache access log (failure - code 4xx)',
      output: ['127.0.0.1 - - [28/Jul/2006:10:27:32 -0300] "GET /hidden/ HTTP/1.0" 404 7218']
    }, {
      name: 'Log XL',
      info: 'Apache unnacepted request methods (caused by TortoiseSVN)',
      output: ['x.x.x.90 - - [13/Sep/2006:07:01:53 -0700] "PROPFIND /svn/[xxxx]/Extranet/branches/SOW-101 HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:07:01:51 -0700] "PROPFIND /svn/[xxxx]/[xxxx]/trunk HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:07:00:53 -0700] "PROPFIND /svn/[xxxx]/[xxxx]/2.5 HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:07:00:53 -0700] "PROPFIND /svn/[xxxx]/Extranet/branches/SOW-101 HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:07:00:21 -0700] "PROPFIND /svn/[xxxx]/[xxxx]/trunk HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:06:59:53 -0700] "PROPFIND /svn/[xxxx]/[xxxx]/2.5 HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:06:59:50 -0700] "PROPFIND /svn/[xxxx]/[xxxx]/trunk HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:06:58:52 -0700] "PROPFIND /svn/[xxxx]/[xxxx]/trunk HTTP/1.1" 401 587',
              'x.x.x.90 - - [13/Sep/2006:06:58:52 -0700] "PROPFIND /svn/[xxxx]/Extranet/branches/SOW-101 HTTP/1.1" 401 587']
    }, {
      name: 'Error Log',
      info: 'Apache error log',
      output: ['[Fri Dec 16 01:46:23 2005] [error] [client 1.2.3.4] Directory index forbidden by rule: /home/test/',
               '[Fri Dec 16 01:54:34 2005] [error] [client 1.2.3.4] Directory index forbidden by rule: /apache/web-data/test2',
               '[Fri Dec 16 02:25:55 2005] [error] [client 1.2.3.4] Client sent malformed Host header',
               '[Mon Dec 19 23:02:01 2005] [error] [client 1.2.3.4] user test: authentication failure for "/~dcid/test1": Password Mismatch']
    }, {
      name: 'Startup Log',
      info: 'Apache error log (startup) Normal',
      output: ['[Sat Aug 12 04:05:51 2006] [notice] Apache/1.3.11 (Unix) mod_perl/1.21 configured -- resuming normal operations',
              '[Thu Jun 22 14:20:55 2006] [notice] Digest: generating secret for digest authentication ...',
              '[Thu Jun 22 14:20:55 2006] [notice] Digest: done',
              '[Thu Jun 22 14:20:55 2006] [notice] Apache/2.0.46 (Red Hat) DAV/2 configured -- resuming normal operations']
    }, {
      name: 'Shutdown Log',
      info: 'Apache error log (shutdown by TERM signal)',
      output: ['[Thu Jun 22 11:35:48 2006] [notice] caught SIGTERM, shutting down']

    }, {
      name: 'Log Res',
      info: 'Apache without resources',
      output: ['[Tue Mar 08 10:34:21 2005] [error] (11)Resource temporarily unavailable: fork: Unable to fork new process',
              '[Tue Mar 08 10:34:31 2005] [error] (11)Resource temporarily unavailable: fork: Unable to fork new process']
    });
  });

