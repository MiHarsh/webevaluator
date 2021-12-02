const baseGoUrl =
  process.env.REACT_APP_GO_SERVER_URL || "http://localhost:8080";
const baseNodeUrl =
  process.env.REACT_APP_NODE_SERVER_URL || "http://localhost:5000/api";

const endpoints = {
  goStatus: () => `${baseGoUrl}/status`,
  crawl: () => `${baseGoUrl}/crawl`,
  ssl: () => `${baseGoUrl}/ssl`,
  sslapi: () => `${baseGoUrl}/sslapi`,
  cookieChecker: () => `${baseNodeUrl}/cchecker`,
  ada: () => `${baseNodeUrl}/errors/css`,
  tenon: () => `${baseNodeUrl}/tenon`,
  sniffer: () => `${baseNodeUrl}/sniffer`,
};

export default endpoints;
