# Deploy and Host your App like a Pro with Cloud Build and Cloud Run

This repository is for demonstration purposes only as part of a talk I give with the same title. You can use this repository to follow along with my talk and deploy your first app to Cloud Run using Cloud Build.



## Instructions

### Fork this Repo
1. Signup for a Github account if you don't already have one.
2. In the top-right corner of the page, click Fork.
3. Under "Owner," select the dropdown menu and click an owner for the forked repository.
4. By default, forks are named the same as their upstream repositories. Optionally, to further distinguish your fork, in the "Repository name" field, type a name.

### Create a Project in Google Cloud
1. In the Google Cloud console, go to Menu menu > IAM & Admin > Create a Project.
2. In the Project Name field, enter a descriptive name for your project.
Optional: To edit the Project ID, click Edit. The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.
3. In the Location field, click Browse to display potential locations for your project. Then, click Select.
4. Click Create. The console navigates to the Dashboard page and your project is created within a few minutes.

### (Optional) Manually deploy your app to Cloud Run
1. Create and deploy a new Service on Cloud Run by following these [instructions](https://cloud.google.com/run/docs/deploying)

### Build a new Cloud Run Service
1. In the Google Cloud console, go to Menu > Cloud Run > Create service.
2. In the form, select Continuously deploy new revisions from a source repository
3. In the Service settings page, click Set up with Cloud Build (enable the necessary API(s) if prompted)
4. Select GitHub as the Provider. If you are not yet authenticated, click Authenticate and follow the instructions.
5. Select the Repository.
6. Click Next.
7. Enter the Branch to indicate what source should be used when running the trigger. You can use a [regex](https://github.com/google/re2/wiki/Syntax). (You can just use main for this demo)
8. Select the Google Cloud Buildpacks Build Type option
9. Click Save
10. Enter a Service name
11. Select Allow unauthenticated invocations as the Authentication
12. Click Create

### Testing our app
1. In the Google Cloud console, go to Menu > Cloud Run
2. Click on the name of your service.
3. Copy the URL for your service
4. Open a new browser tab and paste the URL followed by ?numerator=150&denominator=10 then hit Enter to visit the URL.
5. You should see JSON output displaying the numerator, denominator and the result of doing the division.
6. Try different values. You should receive an Internal Server Error when not specifying values or specifying one as 0.

### Trigger Building a Revision
1. Using either your preferred IDE or directly in GitHub, make the changes specified in the TODOs in index.js.  
2. Commit the changes to the same branch you specified in Build a new Cloud Run Service.
3. In the Google Cloud console, go to Menu > Cloud Build > History.
4. You should see the build just triggered by your commit.
5. Click into the build to view the steps execute.
6. Once the build has completed successfully, repeat the steps previously performed in Testing our App.
7. You should now receive valid JSON when testing with a 0 denominator.


### Route Traffic
1. In the Google Cloud console, go to Menu > Cloud Run
2. Click on the name of your service.



### Additional Resources

[Documentation: Deploy a Node.js service to Cloud Run](https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service)

[Codelab: Dev to Prod in Three Easy Steps with Cloud Run](https://codelabs.developers.google.com/codelabs/cloud-run-dev2prod)