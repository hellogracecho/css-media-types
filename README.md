# 💅 CSS Media Types & CSS Printing

# Media Types

[Reference from W3C](https://www.w3.org/TR/CSS21/media.html%23media-types)

One of the most important features of style sheets is that they specify how a document is to be presented on different media: on the screen, on paper, with a speech synthesizer, with a braille device, etc.

## Specify media dependencies for style sheets

1. from a style sheet
    
    ```css
    @import url("fancyfonts.css") screen;
    @media print {
      /* style sheet for print goes here */
    }
    ```
    
2. within HTML
    
    For example, in HTML 4 ([[HTML4]](https://www.w3.org/TR/CSS21/refs.html#ref-HTML4)), the "media" attribute on the LINK element specifies the target media of an external style sheet:
    
    ```html
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
    <HTML>
       <HEAD>
          <TITLE>Link to a target medium</TITLE>
          <LINK REL="stylesheet" TYPE="text/css" 
    	 MEDIA="print, handheld" HREF="foo.css">
       </HEAD>
       <BODY>
          <P>The body...
       </BODY>
    </HTML>
    ```
    

## CSS @media Rule

An @media rule specifies the target media types (separated by commas) of a set of rules.

Add an additional media query to an already existing one, using a comma (this will behave like an OR operator):

```css
@media print {
    body { font-size: 10pt }
  }
  @media screen {
    body { font-size: 13px }
  }
  @media screen, print {
    body { line-height: 1.2 }
  }

/* When the width is between 600px and 900px OR above 1100px - change the appearance of <div> */
@media screen and (max-width: 900px) and (min-width: 600px), (min-width: 1100px) {
  div.example {
    font-size: 50px;
    padding: 50px;
    border: 8px solid black;
    background: yellow;
  }
}
```

We are familiar with `@media screen` with min-width or max-width

```css
body {
  background-color: lightblue;
}

@media screen and (min-width: 400px) {
  body {
    background-color: lightgreen;
  }
}

@media screen and (min-width: 800px) {
  body {
    background-color: lavender;
  }
}
```

Media queries can also be used to change layout of a page depending on the orientation of the browser. You can have a set of CSS properties that will only apply when the browser window is wider than its height, a so called "Landscape" orientation.

```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

# CSS Printing

You can use CSS to change the appearance of your web page when it's printed on paper. 

If you are defining your style sheet in a separate file, then you can also use the media attribute when linking to an external style sheet −

```html
<link rel = "stylesheet" type = "text/css" media = "print" href = "mystyle.css">
```

# Other Tips

## Chrome Dev tool to Emulate CSS media type

You can emulate media type on your Chrome dev tools instead of doing `cmd + p.`. 

Open Chrome Inspector > Click three dots to see more options > Click “More tools” > Select “Rendering” > scroll down to change “Emulate CSS media type”.