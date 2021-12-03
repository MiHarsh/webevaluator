export const crawlerColumns = [{ flex: 1, field: "id", headerName: "ID" }];

export const sslColumns = [
  { flex: 1, field: "SignatureAlgorithm", headerName: "Signature Algorithm" },
  { flex: 1, field: "Version", headerName: "Version" },
  { flex: 1, field: "SerialNumber", headerName: "Serial Number" },
  { flex: 1, field: "NotBefore", headerName: "Issue Date" },
  { flex: 1, field: "NotAfter", headerName: "Expiry Date" },
  { flex: 1, field: "CommonName", headerName: "Common Name" },
  { flex: 1, field: "DNSNames", headerName: "DNS Names" },
  {
    flex: 1,
    field: "Issuer",
    headerName: "Issuer Country",
    valueFormatter: (params) => params.value.Country?.join(" "),
  },
  {
    flex: 1,
    field: "Issuer",
    headerName: "Issuer Organization",
    valueFormatter: (params) => params.value.Organization?.join(" "),
  },
  {
    flex: 1,
    field: "Issuer",
    headerName: "Issuer Organizational Unit",
    valueFormatter: (params) => params.value.OrganizationalUnit?.join(" "),
  },
  {
    flex: 1,
    field: "Issuer",
    headerName: "Issuer Common Name",
    valueFormatter: (params) => params.value.CommonName,
  },
  {
    flex: 1,
    field: "Subject",
    headerName: "Subject Country",
    valueFormatter: (params) => params.value.Country?.join(" "),
  },
  {
    flex: 1,
    field: "Subject",
    headerName: "Subject Organization",
    valueFormatter: (params) => params.value.Organization?.join(" "),
  },
  {
    flex: 1,
    field: "Subject",
    headerName: "Subject Organizational Unit",
    valueFormatter: (params) => params.value.OrganizationalUnit?.join(" "),
  },
  {
    flex: 1,
    field: "Subject",
    headerName: "Subject Common Name",
    valueFormatter: (params) => params.value.CommonName,
  },
];

export const sslId = "SerialNumber";

export const cookiesColumns = [
  { flex: 1, field: "name", headerName: "Name" },
  { flex: 1, field: "value", headerName: "Value" },
  { flex: 1, field: "domain", headerName: "Domain" },
  { flex: 1, field: "path", headerName: "Path" },
  { flex: 1, field: "expires", headerName: "Expires" },
  { flex: 1, field: "size", headerName: "Size" },
  { flex: 1, field: "httpOnly", headerName: "HTTP Only" },
  { flex: 1, field: "secure", headerName: "Secure" },
  { flex: 1, field: "session", headerName: "Session" },
  { flex: 1, field: "sameParty", headerName: "Same Party" },
  { flex: 1, field: "sourceScheme", headerName: "Source Scheme" },
  { flex: 1, field: "source Port", headerName: "Source Port" },
  {
    flex: 1,
    field: "info",
    headerName: "Placed By",
    valueFormatter: (params) => params.value.placed_by,
  },
  {
    flex: 1,
    field: "info",
    headerName: "Functionality",
    valueFormatter: (params) => params.value.functionality,
  },
  {
    flex: 1,
    field: "info",
    headerName: "Purpose",
    valueFormatter: (params) => params.value.purpose,
  },
];

export const cookiesId = "name";

export const adaColumn = [
  { flex: 1, field: "selector", headerName: "Selector" },
  { flex: 1, field: "name", headerName: "Name" },
  { flex: 1, field: "description", headerName: "Description" },
  { flex: 1, field: "count", headerName: "Count" },
];

export const adaId = "name";

export const wcagColumns = [
  { flex: 1, field: "type", headerName: "Type" },
  { flex: 1, field: "code", headerName: "Code" },
  { flex: 1, field: "message", headerName: "Message" },
  { flex: 1, field: "element", headerName: "Element" },
  {
    flex: 1,
    field: "msgInfo",
    headerName: "Success Criterion",
    valueFormatter: (params) =>
      params.value[0]?.["Success Criterion"]?.join(" \n"),
  },
  {
    flex: 1,
    field: "msgInfo",
    headerName: "Suggested Techniques",
    valueFormatter: (params) =>
      params.value[1]?.["Suggested Techniques"]?.join(" \n"),
  },
];

export const section508Columns = [
  { flex: 1, field: "type", headerName: "Type" },
  { flex: 1, field: "code", headerName: "Code" },
  { flex: 1, field: "message", headerName: "Message" },
  { flex: 1, field: "element", headerName: "Element" },
  {
    flex: 1,
    field: "msgInfo",
    headerName: "Section",
    valueFormatter: (params) => params.value[0]?.Section,
  },
];

export const snifferId = "code";
