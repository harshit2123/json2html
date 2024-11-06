export default function json2html(data) {
  const headers = ["Name", "Age", "Gender"];
  let html = `<table data-user="harshitkmryadav@gmail.com"><thead><tr>`;

  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += `</tr></thead><tbody>`;

  data.forEach(item => {
    html += `<tr><td>${item.Name || ""}</td><td>${item.Age || ""}</td><td>${item.Gender || ""}</td></tr>`;
  });
  html += `</tbody></table>`;

  return html;
}
