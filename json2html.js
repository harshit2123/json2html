export default function json2html(data) {
    // Get all unique column names from the data
    const columns = ['Name', 'Age', 'Gender']; // As specified in requirements
    
    // Create the table HTML
    let html = '<table data-user="harshitkmryadav@gmail.com">\n';
    
    // Add header
    html += '  <thead>\n';
    html += '    <tr>';
    columns.forEach(column => {
        html += `<th>${column}</th>`;
    });
    html += '</tr>\n';
    html += '  </thead>\n';
    
    // Add body
    html += '  <tbody>\n';
    data.forEach(row => {
        html += '    <tr>';
        columns.forEach(column => {
            html += `<td>${row[column] || ''}</td>`;
        });
        html += '</tr>\n';
    });
    html += '  </tbody>\n';
    html += '</table>';
    
    return html;
}
