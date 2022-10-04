## Exercise 1
Open `jenware.html` in a browser and in Visual Studio Code. The document
has been divided into two main div
elements (“intro” and “content”), and
the #content div is divided again
into “products” and “testimonials”. The
background colors have been added
to the body, #nav, #products, and
#testimonials divisions. I’ve also added
a gradient at the top of the page and an
exclamation point image to the background of the “testimonials” div. The remaining
rules are for formatting text.
1. The first thing we’ll do is add padding to the “products” div. One em of padding
all around ought to be fine. Find the #products selector and add the padding
declaration.
#products {
background-color: #FFF;
line-height: 1.5em;
padding: 1em;
}
2. Next, we’ll get a little fancier with the “testimonials” section. I want to clear some
space in the left side of the div so that my nifty exclamation-point background
image is visible. There are several approaches to applying different padding
amounts to each side, but I’m going to do it in a way that gives you experience
deliberately overriding earlier declarations.