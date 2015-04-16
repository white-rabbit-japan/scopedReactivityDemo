# scopedReactivityDemo

Used in my answer to this question on Stack Overflow:
http://stackoverflow.com/questions/14034556/what-is-the-proper-way-to-manipulate-template-instance-in-meteor-framework

An older answer uses Session vars which I think are best avoided, so I created this demo to show an alternative approach by using a reactivedict scoped to the template instance.
Avoiding Session is a more scalable approach as local scope exhibits better separation of concerns and permits multiple instances of templates.

The original project which uses Sessions can be found here:
https://gist.github.com/Primigenus/4376780
