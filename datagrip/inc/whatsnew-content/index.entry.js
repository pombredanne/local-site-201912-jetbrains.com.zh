// Styles
import './index.scss';

// JS modules
import dispatcher from 'utils/dispatcher';
import Toc from 'components/toc';

// Add logos technologies
import 'components/logo/oracle';
import 'components/logo/postgre-sql';
import 'components/logo/postgre-sql/postgre-sql-notext';
import 'components/logo/azure/azure-notext';
import 'components/logo/amazon-redshift/amazon-redshift-notext';
import 'components/logo/mariadb';
import 'components/logo/mysql';
import 'components/logo/exasol/exasol-simple';
import 'components/logo/sqlite-square';
import 'components/logo/ibm-db2';

// Page scripts starts here
dispatcher.domReady(function() {
  // Init table of contents
  Toc({
    selectors: 'h2',
    container: '#toc',
    columns: 4,
    scope: '.section-content'
  }).fix();

});