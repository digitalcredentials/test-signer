import { Octokit } from '@octokit/rest';
import { Base64 } from 'js-base64';
import QRCode from 'qrcode'
//import Jimp from "jimp/es"
//import path from "path";

async function saveToGithub(token, creds, qrs) {
    try {
      const client = new Octokit({
        auth: token
      });
      for (let cred of creds) {
        const vcString = Base64.encode(JSON.stringify(cred.vc))
        await saveContent(client, cred.credData.githubRepo, cred.credData.githubOwner, cred.credData.fileName, vcString)

        // we additionally want a QR that contains the location of the
        // credential in github, which we've also set as the id of the
        // credential:
        const qrContentURL = await generateQR(cred.vc.id, cred.credData.title)
        const qrURLPath = `${cred.credData.fileName}.qr-url.gif`
        await saveContent(client, cred.credData.githubRepo, cred.credData.githubOwner, qrURLPath, qrContentURL)
      
      }
      for (let qr of qrs) {
        const qrPath = `${qr.credData.fileName}.qr.gif`
        await saveContent(client, qr.credData.githubRepo, qr.credData.githubOwner, qrPath, qr.qrImage)
      }
   } catch (err) {
     console.error(err);
      }
  }
  
  async function saveContent(client, repo, owner, path, content) {
    const sha = await getFileSHA(repo, owner, path, client)
    const config = {
     owner,
     repo,
     path,
     message: "wrote test file",
      content,
      committer: {
        name: `James Chartrand`,
        email: "jc.chartrand@gmail.com",
      },
      author: {
        name: "James Chartrand",
        email: "jc.chartrand@gmail.com"
     }
    }
    if (sha) {
     config.sha = sha
    }
    const { data } = await client.rest.repos.createOrUpdateFileContents(config);
  }

  async function getFileSHA(repo, owner, path, client) {
 
    try {
      const response = await client.repos.getContent({owner,repo,path})
      return response.data.sha
    } catch (e) {
          if (e.response.status === 404) {
            // file doesn't exist yet so all fine
            return null
          } else {
            console.log(`the error when getting the SHA for path: ${path}`)
            console.log(e)
            throw new Error("couldn't check the SHA in github")
  
          }
      }  
  }

  async function generateQR(text, title) {
      const dataURL = await QRCode.toDataURL(text,{ margin: 40, width: 250, mode: 'alphanumeric'})
      const base64 = dataURL.substring(dataURL.indexOf(',')+1)
      return base64
    }

  export default saveToGithub