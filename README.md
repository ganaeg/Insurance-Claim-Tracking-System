# 🚀 Insurance Claim Tracking System (Salesforce DX Project)

This project is built on Salesforce DX to manage **insurance claims, policies, and policyholders**.  
It also includes **approval workflows** for claim processing with automated email notifications.

---

## 📋 Prerequisites

1. Salesforce CLI installed ([link](https://developer.salesforce.com/tools/sfdxcli))  
2. Git installed ([link](https://git-scm.com/downloads))  
3. Access to a Salesforce Org (Dev Hub, Sandbox, or Production)

---

## ⚡ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ganaeg/Insurance-Claim-Tracking-System.git
cd Insurance-Claim-Tracking-System
2️⃣ Authenticate with Salesforce
bash
Copy code
sf auth web login -a MyOrg
This opens the Salesforce login page. Enter your Salesforce username and password.

3️⃣ Deploy Metadata to Salesforce Org
bash
Copy code
sf project deploy start --manifest manifest/package.xml --target-org MyOrg
4️⃣ Retrieve Metadata from Salesforce Org (if needed)
bash
Copy code
sf project retrieve start --manifest manifest/package.xml --target-org MyOrg
🛠 Features
Custom Objects: Claim__c, Policy__c, Policyholder__c

Approval Processes: Manager approval workflows with email notifications

Automation: Record Locking/Unlocking during approval stages, notifications to approvers and submitters

Example Code: SOQL Queries (/scripts/soql/), Apex Scripts (/scripts/apex/)

👨‍💻 Contributing
Create a new branch:

bash
Copy code
git checkout -b feature/your-feature
Commit changes:

bash
Copy code
git commit -m "Added new feature"
Push to GitHub:

bash
Copy code
git push origin feature/your-feature
Create a Pull Request

📚 Resources
## 📚 Resources

1. Salesforce CLI Command Reference: [https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)  
2. Salesforce DX Developer Guide: [https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)  
3. Git Documentation: [https://git-scm.com/doc](https://git-scm.com/doc)


