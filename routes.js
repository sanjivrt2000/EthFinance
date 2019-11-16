const routes = require('next-routes')();

routes
  .add('/finance/:address/register','/finance/register')
  .add('/finance/:address/dashboard','/finance/dashboard')
   .add('/finance/:address/pages/accountinfo','/finance/pages/accountinfo')
   .add('/finance/:address/pages/clientinfo','/finance/pages/clientinfo')
   .add('/finance/:address/pages/loanpool','/finance/pages/loanpool')
   .add('/finance/:address/pages/tranhistory','/finance/pages/tranhistory')

   .add('/customer/:address/register','/customer/register')
   .add('/customer/:address/dashboard','/customer/dashboard')
   .add('/customer/:address/pages/accountinfo','/customer/pages/accountinfo')
   .add('/customer/:address/pages/financelist','/customer/pages/financelist')
   .add('/customer/:address/pages/loanhistory','/customer/pages/loanhistory')
   .add('/customer/:address/pages/loanpool','/customer/pages/loanpool')
   .add('/customer/:address/pages/show','/customer/pages/show')


module.exports = routes;
