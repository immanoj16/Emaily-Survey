const keys = require('../../config/keys');

let str = keys.redirectDomain;
if (str[str.length - 1] === '/') {
  str = str.slice(0, -1);
}

module.exports  = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${str}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${str}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
