# RESUMERE.XYZ

## Returning ownership of your career data.


### Who owns your resume? Who controls it?


Resumere.xyz is a proof of concept to tokenize JSON resumes as NFTs and demonstrate the Unique Network, Polkadot while bringing privacy to job seekers.

What is this project?

 - Resumere (re-summary) resumere.xyz
 - minting resume data to the blockchain as NFTs using Unique Network

Using Unique Opal Testnet

QTZ blockchain downtime from 7/8 prevented us from testing on fork of marketplace-docker project.

https://www.mexc.com/assets/withdraw?currency=QTZ => "QTZ blockchain withdrawal is suspended"

Use Case, Problem Space

- job portal, resume/cv posting
- local of privacy regarding resume/cv

- social networks like Linkedin exploit your privaccy to market, sell ads

- unnecessary middleperson between employer and job seeker

- putting your resume on job portals open you to endless marketing and headhunter outreach

- your resume get propagated to the deepest corners of the Internet

- If you simply search for jobs, you end up getting subscribed to endless job alerts


Basically, the job search experience is broken.  It's our belief that NFTs can go beyond collectibles and solve problems here.


How do you look for jobs without announcing to the job platform and thereby your existing employers that you are looking?

 - remove identify, email from the resume/cv and tokenize the resume document to a public, decentralized blockchain

 - allow marketplaces to search the blockchain for qualifications that match their criteria

 - allow employers to buy tokenized access to job seeker's resume NFTs

 - Job seeker can be paid via NFT transaction or renting fractionalized ownership of the NFT; in exchange the employers receive the resume and qualification data and can setup an interview or other next step.

 - marketplaces can facilitate interviews offchain; via email, chat, video or even in-person


NFT pricing can help newer job seekers. Job seekers can lower their NFT to zero or near zero to incentivize employers.


Replaces Job Aders with Token Transactions

- instead of posting job ads, employers would post job qualifications to off chain marketplaces and then transaction directly with job seekers via their tokenized resumes, NFTs.

- Instead of job seekers sifting through hundreds of duplicate jobs they mint their resume as an NFT on Unique Network and get paid to follow up and interview.


Why Unique Network?

Unique Network's NFT implementation and tools in the Polkadot ecosystem are well suited to our requirements. 

A couple highlights include:

- transaction sponsoring
  We will speed adoption by allowing the off-chain marketplace/platforms to pay for gas fees.  Furthermore, job seekers or employers could sponsor the transaction fees depending on the job market at the time. The end user should not be required to learn wallets and utility tokens in order to transact. 
- Nested tokens - implementations could allow employers to use Nesting to organize resumes for specific job openings or skills
- Re-Fungible tokens - fractionalized ownership of a resume NFT via Unique's Re-fungible token type allows for employers to 'rent' NFT resumes and move them to back to job seeker, marketplace or next possible employer.


Future:

- future upport for royalties could enable interesting use cases, currently Unique is not discussing EIP-2981 in documentation

- at the moment, the re-fungible approach seems best.



Next Steps

- fork and implement a job posting application with the marketplace-docker project

- test and implement transaction sponsoring - enables a web2 experience to employers.  Requiring employers (or job seekers) to manage wallets and transaction fees, utility tokens would be a huge issue for early adoption.

 - ATS - Applicant Tracking System integration

 - Apply with NFT resume button


Polkadot Tech Need, now and future:

 DID - KILT
 NFT - Unique Network
 ipfs, off chain storage - investigate Crust
  - host PDF resumes, host JSON


Design decisions and other issues:

 - How to implement Updating resume?  Resumes are not updated frequently.

        - burn tokens, replace or edit/add-on?

        - NFT implies replace, not updating, however, ERC-1633 Re-fungible mode in Unique NFT pallet
          also Unique on ERC-809, ERC-1201

 - Collections

   - what defines a collection?
   - users, job seekers mint a resume, it's unlikely they will have a collection 

   - Employers, however, could use collections (vs nesting) for a category of resumes, a specific job opening or otherwise.

- Off-chain metadata

 - net just an image and specific properties, maybe a screenshot of the resume with blur applied to top of resume or a QR code image that links off-chain to JSON, PDF link
 - NO headshots or profile pictures

 - JSON - more complex, structured schema; some similar properties in skills put very difficult to catalogue all the skills for on-chain data schema.
 - we reference jsonresume.org and the open source project from 2014 that proposed a JSON schema format for resume data
 - PDF link to ipfs, off-chain

 - metadata hash for authenticity of offline JSON, PDF, image.

- White lists
   - job seekers can limit access to their NFT resume by white listing employers

- Public minting + white listing - balances privacy and security


Transaction Sponsoring 

 - limitations, rate limiting 
  to address spam concerns


Solves for:

 - privacy for job seekser and employers

 - Costly job ads may be replaced with resume NFT token transactions

 - decrease traditional spam related to job search

 - privacy and removing identifying information from the initial step helps with employment discrimiation


Problems and other Dilemnas:

- requires employers to move in this direction
- social proof in platform like Linkedin has value to employers; our privacy focused solution makes this social network "social proof" features difficult.


Competition

 - existing web3 resume solutions may exist; competitive landscape unknown -- just started writing and hacking on sample code to make the proof of concept



 Size of Job Ads Market 

  - The staffing and recruiting market in the US alone reached over $150B in 2019 and still excedes $130B last year, despite the COVID-19 pandemic.
  https://www.statista.com/statistics/873648/us-staffing-industry-market-size/

  - global "online" recruiting market is expected to excede $40B this decade
  https://www.fortunebusinessinsights.com/online-recruitment-market-103730
  
  - the online job ads market is proxy for the value we can bring 




Technologies Used


 - polkadot.js
 - unique network
 - opal testnet

 - node 16.16.0
 - javascript/typescript
 
 - jsonresume
   https://github.com/jsonresume

 - json resume schema 
  https://github.com/jsonresume/resume-schema
  https://jsonresume.org/schema/

 - AI generated resumes (14) in JSON format, used in our proof of concept

 https://github.com/jsonresume/jsonresume-gpt3/tree/master/resumes


 For reference:

  - export linkedin profile to json resume

  https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec

 - dynamically render, export JSON to HTML or PDF

  https://github.com/jsonresume/resume-cli





docs:

https://docs.unique.network/unique-and-quartz-wiki/introduction/welcome

https://github.com/UniqueNetwork/unique-docs/


https://unique-network.readthedocs.io/en/latest/jsapi.html#createcollection


projects:


https://github.com/UniqueNetwork/unique-playgrounds/blob/angelhack-polkadot-2022/docs.md


https://docs.unique.network/unique-and-quartz-wiki/create-for-users/business-faq/collection-administrator-usage/how-to-mint-your-own-complex-nft
https://github.com/UniqueNetwork/nft-workshop


marketplace-docker

https://docs.unique.network/unique-and-quartz-wiki/create-for-users/business-faq/collection-administrator-usage/how-to-mint-your-own-complex-nft


reference:

https://wallet-opal.unique.network/#/myStuff/tokens

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws-rc.unique.network%2F#/accounts

https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fws-opal.unique.network%2F#/accounts


https://uniquescan.io/OPAL/extrinsic/31303-2


https://docs.unique.network/unique-and-quartz-wiki/create-for-users/business-faq/marketplace/getting-ksm-to-your-unique-network-marketplace-account


