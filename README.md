# Blockchain public API

In this app I called two public API's and display data into tables inside dashboard

# Deployment 
Deploying this app publicly I used [heroku] cloud platform.
### Heroku Installation 
##### Required node and git install on your system. 
** Follow [heroku installtion]  steps.


    - Create index.php file and add your index.html file inside this
    - This is one example :- ``` <?php header( 'Location: /index.html' ) ;  ?>```
    - Deploying your app into heroku firstly [create your account] with heroku

   ```sh
$ cd Projects/my-site
$ git init
$ git add .
$ git commit -m "My site ready for deployment."
$ heroku apps:create your-app-name
$ git push heroku master
```
#### You can now visit this app at [blockchain-transaction-app]

   [heroku]: <https://www.heroku.com/>
   [heroku installtion]: <https://blog.teamtreehouse.com/deploy-static-site-heroku>
   [blockchain-transaction-app]: <https://blockchain-deployment.herokuapp.com/index.html>
   [create your account]: <https://id.heroku.com/login>
