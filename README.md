# scopedReactivityDemo

I see a lot of questions here and on stackoverflow related to 'passing data between templates'. Nearly always the suggested solution is to use Session. I almost always avoid Session. I think it pollutes the global scope, it prevents you from running multiple instances of the template, and it leads to undisciplined separate of concerns. Unfortunately there are a lot of tutorials which use Session; and not so many that use reactiveVar or reactiveDict scoped to the template instance. So I created the fully working demo project.

Used in my answer to this question on Stack Overflow:
http://stackoverflow.com/questions/14034556/what-is-the-proper-way-to-manipulate-template-instance-in-meteor-framework

An older answer uses Session vars which I think are best avoided, so I created this demo to show an alternative approach by using a reactivedict scoped to the template instance.
Avoiding Session is a more scalable approach as local scope exhibits better separation of concerns and permits multiple instances of templates.

The original project which uses Sessions can be found here:
https://gist.github.com/Primigenus/4376780
