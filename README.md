# Inc Challenge

# Links
http://prismoo.duckdns.org/

#### Responsive
http://prismoo.duckdns.org/responsive/

#
>   This challenge consists of receiving JSON data, in a set of native JS/CSS/HTML tags, without the help of any framework.
>
> * created own CSS 'column' mechanism, using % of screen
> * loads all of the objects and hide to paginate
> * only facilitator used was scss, only to organize variables
> * create separated Div for the reference product, in the same row of the others recommended products

# Breakdown

### List
Every product slot has it's own set of ```<ul>/<li>``` Creating and closing in loop for every item. 

```javascript
+  listItemStart + addImg + data.data.recommendation[i].imageName + '">' + listItemEnd
```

### Scroll
```overflow: hide``` to hide the rest of the products. While the arrow will make smooth scrolling, according to a manually set variable.

### Hover
each ```<ul>``` besides organizing the list, also helps to create the same effect made in the reference photo, creating padding between
the frame and the product.

# Clean Reading

### Variables

#### CSS

Allows customizing every aesthetics on the page
```sass
//Header Customization
$header-background: linear-gradient(to bottom, #eff7fe 0%,#ffffff 52%,#eff7fe 52%,#ffffff 52%,#eff7fe 100%);
$header-label: #0082c2;

//Global
$screen-background: #e8e8e8;
$border-radius-global: 6px;

//Product Customization
$price-tag-color: #cc0000;
$hover-cell-color: linear-gradient(to bottom, rgba(214,233,249,1) 0%,rgba(255,255,255,1) 100%);
$hover-cell-color-faded: linear-gradient(to bottom, rgba(214,233,249,1) 0%,rgba(255,255,255,1) 0%);
$hover-product-outline-color: #bdd0e0;

//Pagination
$prev-arrow-scale-when-clicked: scale(1.2);
$next-arrow-scale-when-clicked: scale(-1.2);
```

#### JS

They're all presented in the same file, with only one global variable: **to change pagination manually.**

```javascript
//Change Pagination Manually
var page = 0

//Choose Div to add the objects
var productContainer   = document.getElementById("productContainer");
var refContainer       = document.getElementById("refContainer");
```

the others inside the file are made only to change how the data comes on the screen, they are totally unecessary to present.
