# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

Compared to the default static positioning where the side bar is at the very left of the screen (default position), changing the position styling to relative makes the side bar
move and position itself according to the inputted values. Top and bottom controls the up and down position, while left and right controls the left and right position.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

When we scroll the page, the footer keeps its position at the very bottom of the page (the footer is fixed relative to the viewport). The footer behaves this way due to the position fixed, which compared to relative where it moves as the user scrolls through the page, keeps the element fixed regardless of whether the user scrolls through the page WITHOUT affecting other elements.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

When an element has the position absolute, its positioning is based relatively on its nearest ancestor. Compared to fixed where it keeps the element locked at a position without affecting other elements, absolute positions the element depending on its previous ancestors (it is dependent on previous elements).

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

Notice appears on top of the content due to the z-index, which controls how elements layer on top of each other. Elements with the greater z-index value will appear as the topmost layer while the lower values appear as the lowermost layer. When switching the z-index values, its layering changes according to which value is greater than the other (in this case, content becomes topmost layer because its value is 2).

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    When the position of .content is changed to relative, it goes down from its original position. This positioning is based on the inputted values for top and left, which directly affects how .content is positioned on the page.
    When the position of .content is changed to fixed, it keeps its position fixed on the page despite scrolling.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

    Z-index affects the layering of elements, making elements with a greater z-index value appear as the topmost element. When .notice is = 1 and .content = 2, .content appears as the topmost layer and covers .notice. Yet when .content = 1 and .notice = 2, .notice appears as the topmost layer.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Based on what we've tested and observed in the seatwork,

    Static: The element's position is set to default, appearing as the normal document flow.
    Relative: The element's position is relative to its normal position, which is set by values such as top, bottom, left, right.
    Absolute: The element's position is based on its previous ancestors, meaning its position is dependent on other elements before it.
    Fixed: The element's position is fixed, meaning it stays in its place on the viewport despite scrolling (it does not affect other elements)

    b. How does absolute positioning depend on its parent element?

    Absolute positioning depends on its parent element as it serves as a reference point for its placement. Normal document flow is removed when absolute is used, and it will
    rely on previous elements for its positioning.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    Sticky remains part of the flow when you are scrolling as this element only stay fixed until their parent container scrolls out of view. On the otherhand, fixed is the one always removed from the document flow and locked to the viewport of the user.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    One of the possible things we can implement is using fixed to emphasize on important information, such as headers or nagivation bars. We can also use relative positioning to highlight information such as photos, along with absolute which will position photos depending on previous paragraphs/elements (example, introducion of the school/event+ a photo of the school/event).