#Avoiding circular references in AngularJS

I was reading StackOverflow (the portuguese version), and found myself into a question about circular references in AngularJS.
Then I went to research more about it, although I had the experience to explain, I had to give some more reinforcement to my answer.

That said, I've found an [article](http://misko.hevery.com/2008/08/01/circular-dependency-in-constructors-and-dependency-injection/) in Misko Hevery's  - one of Angular's author - blog.

The problem was that the given user needed a Logger Service and a File Manager Service, and the Logger had to call a function from File Manager to upload the log at the same time that the File Manager had to log stuff. 
What to do in this kind of situation.
Well, first things first:
- Each and every service must be responsible for their actions, right?
Now, what does a logger do? It logs.
And a File Manager? Well, in this case it manages(like upload) files.

Right, now we need to solve this:

I proposed that he'd have the following architecture:
[[https://github.com/username/repository/blob/master/img/octocat.png|alt=octocat]]
