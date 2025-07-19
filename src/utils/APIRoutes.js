export const domain = 'http://192.168.18.214:2000';
// export const domain = 'https://buybot.club';
export const frontend = 'https://buybot.club';
export const dollar = "$"

export const endpoint = {
  registration_api: `${domain}/api/v1/user-registration`,
  login_api: `${domain}/api/v1/user-login`,
  add_income: `${domain}/api/v1/create-income-source`,
  get_user_income: `${domain}/api/v1/finance-list`,
  get_user_income_graph: `${domain}/api/v1/graph-data`,
  add_expense_withimage: `${domain}/api/v1/create-expences-source`,
  add_expense_withoutimage: `${domain}/api/v1/create-expences-source-wimage`,
  get_user_expense: `${domain}/api/v1/finance-list-expe`,
  get_user_expense_graph: `${domain}/api/v1/graph-data`,
  get_dashboard: `${domain}/api/v1/dashboard-data`,
  get_dashboard_finance_data: `${domain}/api/v1/dashboard-finance-data`,
 
  















  wallet_api: `${domain}/api/v1/check-wallet-address-availability`,
  package_list_api: `${domain}/api/v1/get-package-details`,
  paying_dummy_api: `${domain}/api/v1/activation-dummy-request`,
  paying_api: `${domain}/api/v1/activation-request`,
  general_contact_address_api: `${domain}/api/v1/get-api-general-data`,
  withdrawal_api: `${domain}/api/v1/withdrawal-req`,
  withdrawal_history_api: `${domain}/api/v1/get-withdrawal-details`,
  change_password_api: `${domain}/api/v1/change-password`,
  user_dashboard_api: `${domain}/api/v1/user-dashboard-data`,
  get_topup_api: `${domain}/api/v1/get-topup-details`,
  topup_api: `${domain}/api/v1/admin-topup-id`,
  market_api: `${domain}/api/v3/simple/price`,
  team_data_api: `${domain}/api/v1/get-team-data`,
  team_data_level_api: `${domain}/api/v1/get-team-data?`,
  tree_data: `${domain}/api/v1/get-downline-team`,
};
