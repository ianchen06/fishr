// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';

import { $ } from 'meteor/jquery';
import dataTablesBootstrap from 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
dataTablesBootstrap(window, $);
