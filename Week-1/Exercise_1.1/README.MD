A) MAIN FUNCTIONALITY OF THE BROWSER

A web browser, also known as a browser, is an application software that allows users to find, access, display, and view websites. Microsoft Internet Explorer, Google Chrome, Mozilla Firefox, and Apple Safari are all popular web browsers.

Web browsers are primarily used to display and access websites on the internet, as well as other content created with programming languages such as Hypertext Markup Language (HTML) and Extensible Markup Language (XML) (XML). Browsers convert Hypertext Transfer Protocol (HTTP) web pages and websites into human-readable content. They can also show other protocols and prefixes, such as secure HTTP (HTTPS), File Transfer Protocol (FTP), email handling (mailto:), and files (file:).

A web browser’s primary function is to render HTML, the code that is used to design or markup web pages. When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions. The browser then renders these objects in the browser window after processing them. A web browser (also known as a browser) is a software application that allows you to access information on the World Wide Web. When a user requests a web page from a specific website, the web browser requests the content from a web server and shows it on the user’s device.

B) HIGH LEVEL COMPONENTS OF A BROWSER.

Components of a Web Browser

User Interface It is an environment allowing users to use certain features like search bar, refresh button, menu, bookmarks, etc.

Browser Engine The bridge connects the interface and the engine. It monitors the rendition engine while manipulating the inputs coming from multiple user interfaces.

Networking The protocol provides an URL and manages all sorts of safety, privacy and communication. In addition, the store network traffic gets saved in retrieved documents.

Data Storage The cookies store information as the data store is an uniform layer that the browsers use. Storage processes like IndexedDB, WebSQL, localStorage, etc works well on browsers.

JavaScript Interpreter It allows conversion of JavaScript code in a document and the executes it. Then the engine shows the translation on the screen to the users.

C) RENDERING ENGINE AND ITS USE. Role of Rendering Engine: Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins.

Browser rendering engine The four basic steps include:

The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.” Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order. Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen. The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer. As discussed earlier, every browser has its own unique rendering engine. So naturally, every browser has its own way of interpreting web pages on a user’s screen.

D) PARSERS (HTML, CSS, ETC) So we have HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

Now we know, html tag starts at the top and then the head tag starts before the html ends so we can figure out that the head is inside html and create a tree out of it. Just like HTML, CSS goes through a similar process where we have the CSS text and then the tokenization of CSS to eventually create something called a CSSOM or CSS Object Model.

E) WEB SCRIPTING AND ITS TYPES

The process of creating and embedding scripts in a web page is known as web-scripting. A script or a computer-script is a list of commands that are embedded in a web-page normally and are interpreted and executed by a certain program or scripting engine.

Scripts may be written for a variety of purposes such as for automating processes on a local-computer or to generate web pages. The programming languages in which scripts are written are called scripting language, there are many scripting languages available today. Common scripting languages are VBScript, JavaScript, ASP, PHP, PERL, JSP etc. Types of Script : Scripts are broadly of following two type :

Web Scripting

Client-Side Scripts :

Client-side scripting is responsible for interaction within a web page. The client-side scripts are firstly downloaded at the client-end and then interpreted and executed by the browser (default browser of the system). The client-side scripting is browser-dependent. i.e., the client-side browser must be scripting enables in order to run scripts Client-side scripting is used when the client-side interaction is used. Some example uses of client-side scripting may be : To get the data from user’s screen or browser. For playing online games. Customizing the display of page in browser without reloading or reopening the page. Here are some popular client-side scripting languages VBScript, JavaScript, Hypertext Processor(PHP). Server-Side Scripts :

Server-side scripting is responsible for the completion or carrying out a task at the server-end and then sending the result to the client-end. In server-side script, it doesn’t matter which browser is being used at client-end, because the server does all the work. Server-side scripting is mainly used when the information is sent to a server and to be processed at the server-end. Some sample uses of server-scripting can be : Password Protection. Browser Customization (sending information as per the requirements of client-end browser) Form Processing Building/Creating and displaying pages created from a database. Dynamically editing changing or adding content to a web-page. Here are some popular server-side scripting languages PHP, Perl, ASP (Active Server Pages), JSP ( Java Server Pages).

RENDER-TREE CONSTRUCTION, LAYOUT, AND PAINT

The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance. The DOM and CSSOM trees are combined to form the render tree. Render tree contains only the nodes required to render the page. Layout computes the exact position and size of each object. The last step is paint, which takes in the final render tree and renders the pixels to the screen. First, the browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node.

To construct the render tree, the browser roughly does the following:

Starting at the root of the DOM tree, traverse each visible node.

Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output. Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node---in the example above---is missing from the render tree because we have an explicit rule that sets the "display: none" property on it. For each visible node, find the appropriate matching CSSOM rules and apply them.

Emit visible nodes with content and their computed styles.

As a brief aside, note that visibility: hidden is different from display: none. The former makes the element invisible, but the element still occupies space in the layout (that is, it's rendered as an empty box), whereas the latter (display: none) removes the element entirely from the render tree such that the element is invisible and is not part of the layout. The final output is a render that contains both the content and style information of all the visible content on the screen. With the render tree in place, we can proceed to the "layout" stage.

Up to this point we've calculated which nodes should be visible and their computed styles, but we have not calculated their exact position and size within the viewport of the device---that's the "layout" stage, also known as "reflow."

To figure out the exact size and position of each object on the page, the browser begins at the root of the render tree and traverses it.
