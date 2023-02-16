import jszip from 'jszip' 
import { saveAs } from 'file-saver';

const saveAsZip = (creds, qrs) => {
    const zip = new jszip();
    for (const cred of creds) { 
        zip.file(cred.credData.fileName, JSON.stringify(cred.vc));
    }
    for (const qr of qrs) {
        zip.file(qr.credData.fileName + '.qr.gif', qr.qrImage, {base64: true})
    }
    zip.generateAsync({type:"blob"})
        .then(function (blob) {
            saveAs(blob, "credentials.zip");
    });
}

export default saveAsZip