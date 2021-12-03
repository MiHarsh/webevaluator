export const crawlerColumns = [{ field: "id", headerName: "ID" }];

export const sslColumns = [
  { field: "SignatureAlgorithm", headerName: "Signature Algorithm" },
  { field: "Version", headerName: "Version" },
  { field: "SerialNumber", headerName: "Serial Number" },
  { field: "NotBefore", headerName: "Issue Date" },
  { field: "NotAfter", headerName: "Expiry Date" },
  { field: "CommonName", headerName: "Common Name" },
  { field: "DNSNames", headerName: "DNS Names" },
  {
    field: "Issuer",
    headerName: "Issuer Country",
    valueFormatter: (params) => params.value.Country?.join(" "),
  },
  {
    field: "Issuer",
    headerName: "Issuer Organization",
    valueFormatter: (params) => params.value.Organization?.join(" "),
  },
  {
    field: "Issuer",
    headerName: "Issuer Organizational Unit",
    valueFormatter: (params) => params.value.OrganizationalUnit?.join(" "),
  },
  {
    field: "Issuer",
    headerName: "Issuer Common Name",
    valueFormatter: (params) => params.value.CommonName,
  },
  {
    field: "Subject",
    headerName: "Subject Country",
    valueFormatter: (params) => params.value.Country?.join(" "),
  },
  {
    field: "Subject",
    headerName: "Subject Organization",
    valueFormatter: (params) => params.value.Organization?.join(" "),
  },
  {
    field: "Subject",
    headerName: "Subject Organizational Unit",
    valueFormatter: (params) => params.value.OrganizationalUnit?.join(" "),
  },
  {
    field: "Subject",
    headerName: "Subject Common Name",
    valueFormatter: (params) => params.value.CommonName,
  },
];

export const sslId = "SerialNumber";

export const cookiesColumns = [
  { field: "name", headerName: "Name" },
  { field: "value", headerName: "Value" },
  { field: "domain", headerName: "Domain" },
  { field: "path", headerName: "Path" },
  { field: "expires", headerName: "Expires" },
  { field: "size", headerName: "Size" },
  { field: "httpOnly", headerName: "HTTP Only" },
  { field: "secure", headerName: "Secure" },
  { field: "session", headerName: "Session" },
  { field: "sameParty", headerName: "Same Party" },
  { field: "sourceScheme", headerName: "Source Scheme" },
  { field: "source Port", headerName: "Source Port" },
  {
    field: "info",
    headerName: "Placed By",
    valueFormatter: (params) => params.value.placed_by,
  },
  {
    field: "info",
    headerName: "Functionality",
    valueFormatter: (params) => params.value.functionality,
  },
  {
    field: "info",
    headerName: "Purpose",
    valueFormatter: (params) => params.value.purpose,
  },
];

export const cookiesId = "name";

export const adaColumn = [
  { field: "selector", headerName: "Selector" },
  { field: "name", headerName: "Name" },
  { field: "description", headerName: "Description" },
  { field: "count", headerName: "Count" },
];

export const adaId = "name";

export const wcagColumns = [
  { field: "type", headerName: "Type" },
  { field: "code", headerName: "Code" },
  { field: "message", headerName: "Message" },
  { field: "element", headerName: "Element" },
  {
    field: "msgInfo",
    headerName: "Success Criterion",
    valueFormatter: (params) =>
      params.value[0]?.["Success Criterion"]?.join(" \n"),
  },
  {
    field: "msgInfo",
    headerName: "Suggested Techniques",
    valueFormatter: (params) =>
      params.value[1]?.["Suggested Techniques"]?.join(" \n"),
  },
];

export const section508Columns = [
  { field: "type", headerName: "Type" },
  { field: "code", headerName: "Code" },
  { field: "message", headerName: "Message" },
  { field: "element", headerName: "Element" },
  {
    field: "msgInfo",
    headerName: "Section",
    valueFormatter: (params) => params.value[0]?.Section,
  },
];

export const snifferId = "code";
