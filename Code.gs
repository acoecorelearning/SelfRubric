
//this will run as soon as the document is loaded:
//creates a menu and adds the function that will be run when items is selected
function onOpen() {
  DocumentApp.getUi()  
      .createMenu('Self Rubric')
      .addItem('Launch Rubric', 'openDialog')
      .addToUi();
}


//Opens side panel with our html file, as an iframe
function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('rubric')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  //displays the sidebar
  DocumentApp.getUi().showSidebar(html);
}

//this is run after the user clicks submt in the side panel
//it takes in the text for the heading and an array of responses that
//will populate the cells
function insertText(text, responses){

//access the current document's body
  var body = DocumentApp.getActiveDocument().getBody();
  
 //append the text comment first as a new paragraph at end of doc.
  var comment = body.appendParagraph(text);
  
  //set it bold
  comment.setBold(true);
  
  //append the responses from the passed array as a table
  body.appendTable(responses);
   
  
}

function onInstall(e) {
  onOpen(e);
}
