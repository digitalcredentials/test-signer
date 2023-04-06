import badgeImageBase64 from './testBadgeImageBase64.js'
import issuerImageBase64 from './testIssuerImageBase64.js'

const defaultConfig = `{
    "config": {
        "seed": "z1AeZ6QhXvuqqvmMTvGoxMX1mrFofhDSd1j2y9Wi3ErYjkU",
        "title": "DCC Test Credential",
        "issuerName": "Digital Credentials Consortium Test Issuer",
        "issuerImage": "https://user-images.githubusercontent.com/947005/133544904-29d6139d-2e7b-4fe2-b6e9-7d1022bb6a45.png",
        "credImage": "https://user-images.githubusercontent.com/752326/214947713-15826a3a-b5ac-4fba-8d4a-884b60cb7157.png",
        "issuerURL": "https://www.dcconsortium.org/",
        "description": "This is a sample credential issued by the Digital Credentials Consortium to demonstrate the functionality of Verifiable Credentials for wallets and verifiers.",
        "achievementName": "Badge",
        "achievementType": "Badge",
        "criteria": "This credential has the following criteria - achievementType Badge, no subjectName, exists in issuer registry, not revoked, not expired, linked issuer image.",
        "credID": "UUID",
        "githubRepo": "dcc-test-creds",
        "githubOwner": "jchartrand",
        "githubToken": "",
        "expirationDate": "2025-12-20T22:42:27.438Z",
        "subjectName": "Ian Malcom"
    },
    "creds": [
        {
            "fileName": "validBadge/validBadge.json",
            "displayTitle": "Valid Badge",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "validDiploma/validDiploma.json",
            "displayTitle": "Valid Diploma",
            "achievementType": "Diploma",
            "criteria": "This credential has the following criteria - achievementType Diploma, subjectName, exists in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "subjectName/subjectName.json",
            "displayTitle": "Badge With Subject Name",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "noSubjectName/noSubjectName.json",
            "displayTitle": "Badge Without Subject Name",
            "subjectName": null,
            "criteria": "This credential has the following criteria - achievementType Badge, no subjectName, registered in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "registered/registered.json",
            "displayTitle": "Registered Issuer",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, registered in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "unRegistered/unRegistered.json",
            "displayTitle": "Unregistered Issuer",
            "displaySubtitle": "Invalid",
            "issuerKey": "DCC_UNREGISTERED",    
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, not registered in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "revoked/revoked.json",
            "revoked": true,
            "displayTitle": "Revoked Badge",
            "displaySubtitle": "Invalid",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, registered in issuer registry, revoked, not expired, linked issuer image."
          },
          {
            "fileName": "unrevoked/unrevoked.json",
            "displayTitle": "Unrevoked Badge",
            "displaySubtitle": "Valid",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, registered in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "expired/expired.json",
            "displayTitle": "Expired Badge",
            "displaySubtitle": "Invalid",
            "expirationDate": null,
            "expiresIn": 1000,
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, registered in issuer registry, not revoked, expired, linked issuer image."
          },
          {
            "fileName": "unExpired/unExpired.json",
            "displayTitle": "Unexpired Badge",
            "displaySubtitle": "Valid",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, registered in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "invalidSignature/invalidSignature.json",
            "displayTitle": "Invalid Signature Badge (tampered)",
            "displaySubtitle": "Invalid",
            "test": "tampered",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, invalid signature, registered in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "validSignature/validSignature.json",
            "displayTitle": "Valid Signature",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "embeddedIssuerImage/embeddedIssuerImage.json",
            "displayTitle": "Embedded Issuer Image",
            "issuerImage": "${issuerImageBase64}",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, embedded issuer image."
          },
          {
            "fileName": "linkedIssuerImage/linkedIssuerImage.json",
            "displayTitle": "Linked Issuer Image",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, linked issuer image."
          },
          {
            "fileName": "noIssuerImage/noIssuerImage.json",
            "displayTitle": "No Issuer Image",
            "issuerImage": null,
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, no issuer image."
          },
  
          {
            "fileName": "embeddedBadgeImage/embeddedBadgeImage.json",
            "displayTitle": "Embedded Badge Image",
            "issuerImage": "${badgeImageBase64}",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, embedded badge image."
          },
          {
            "fileName": "linkedBadgeImage/linkedBadgeImage.json",
            "displayTitle": "Linked Badge Image",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, linked badge image."
          },
          {
            "fileName": "noBadgeImage/noBadgeImage.json",
            "credImage": null,
            "displayTitle": "No Badge Image",
            "criteria": "This credential has the following criteria - achievementType Badge, subjectName, exists in issuer registry, not revoked, not expired, no badge image."
          }
    ]
}`

export default defaultConfig