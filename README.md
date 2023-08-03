# test-signer

Simple react app that generates and signs OBv3.0.2 Verifiable Credentials directly in the browser, saving them to either a zip file or a github repository of your choosing.

## Installation

There are at least two ways to 'install' this:

### 1. Using DockerHub:

1. install docker (https://docs.docker.com/get-docker/)
2. from the command line run: `docker run -p 3000:3000 digitalcredentials/test-signer`
3. open a web browser to localhost:3000

The advantage to DockerHub is that you don't need to clone the github repo or install node. One downside is that you can't then modify the source code, which you might want to do if, for example, you wanted to fiddle more directly with the OBv3 credential that is issued.

### 2. From Github

(Note that this assumes you've got git and node installed on your machine)

To use this, clone the Github repository to your machine, then switch into the cloned directory and run 'npm install'. When that finishes, run 'npm start'. That should open up a web browser in which the app is running. If it doesn't open automagically, open a web browser to locahost:3000

## Usage

Once you've got the page showing in a web browser, now just paste in a json 'data' object into the text box (a working example is already included), click Go, and away it goes, generating a folder for each credential, containing:

- a signed OBv3 verifiable credential
- a CBOR-LD encoded QR that contains the same full VC
- a QR with a link to the credential (if you choose the option to save the generated credentials to a gihtub repo)

The json data you supply contains two main parts:

### Config section

This contains all the stuff that should be used by all credentials, e.g, signing DID seed, holder DID, issuerName, issuer image, credential type, etc. but any of these fields can be over-ridden by individual credential entries.

### List of Creds Section

This provides one entry per credential that you'd like to generate.  Each entry will need at least a fileName, assuming that you've included all the other required fields in your config section.  You'll likely want to override things like the subjectName (i.e, who receives the credential)

Here is what a sample data object looks like:

```
{
   "config": {
      "seed": "z1AeZ6QhXvuqqvmMTvGoxMX1mrFofhDSd1j2y9Wi3ErYjkU",
      "title": "You are the GOAT!",
      "issuerName": "Me!",
      "issuerURL": "http://higherlearning.edu",
      "achievementType": "Badge",
      "achievementName": "Badge",
      "description": "my great badge",
      "criteria": "some criteria I had to fulfill to get this GOAT badge",
      "credImage": "https://w3c-ccg.github.io/vc-ed/plugfest-1-2022/images/JFF_LogoLockup.png",
      "issuerImage": "https://w3c-ccg.github.io/vc-ed/plugfest-1-2022/images/JFF_LogoLockup.png",
      "credID": "UUID",
      "githubRepo": "dcc-test-creds",
      "githubOwner": "jchartrand",
      "githubToken": ""
   },
   "creds": [
      {
         "subjectName": "James Chartrand",
         "fileName": "some/JamesChartrand.json",
         "title": "I am not the GOAT :("
      },
      {
         "subjectName": "James Chartrand2",
         "fileName": "another/JamesChartrand2.json"
      },
      {
         "subjectName": "James Chartrand3",
         "fileName": "some/some/JamesChartrand3.json"
      }
   ]
}
```

### Credential ID

You can explicitly set an id for each credential, using the credID field, or you can have the system generate an id for you by setting the credID field to one of two values:

- UUID - this will generate a new UUID and set it as a urn like this example:

urn:uuid:4172ee28-8a67-4a30-894a-f0131a26ba09

- GITHUB this set the id to the location in github to which the credential's json file is saved, e.g., 

https://raw.githubusercontent.com/jchartrand/dcc-test-creds/main/another/JamesChartrand2.json

### Save to Github

If there is a github token included in the config, then it assumes you want to save to github and not to a zip file.  You'll have to get the github token from github as described [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).  You'll also need an existing repository (or will need to create one).  You'll specify your github username and the gitub repo name in the json data file.

### Signing DID seed

You can supply your own seed or leave that field blank and the app will generate a random seed for you (and set it in the config so you can copy it for later use if you like). Please note DCC tools will show a credential created with the generated seed as not verified as the did does not exist in any registry the tools recognize.