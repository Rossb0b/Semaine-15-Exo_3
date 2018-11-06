class Info 
{

    constructor(title, hook, description) 
    {
        this.title = title;
        this.hook = hook;
        this.description = description;
        this.contentManager = new Content(this.title, this.hook, this.description);
    }

    addContent() 
    {
        this.contentManager.createContent();
    }
}
  
class Content 
{  
    constructor(title, hook, description) 
    {
        this.title = title;
        this.hook = hook;
        this.description = description;
    }

    createContent()
    {
        let content =
            '<p>'
            +   '<p>' + this.title + '</p>'
            +   '<p>' + this.hook + '</p>'
            +   '<p>' + this.description + '</p>'
            + '</p > ';
        this.addContent(content);
    }

    addContent(content) 
    {
        document.getElementById('Contents-container').innerHTML += content;
    }

}
  
document.getElementById('submit').addEventListener('click', function () 
{
    let title = document.getElementById('title').value;
    let hook = document.getElementById('hooking').value;
    let description = document.getElementById('description').value;
  
    let info = new Info(title, hook, description);
    info.addContent();
});