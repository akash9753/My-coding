Ex1 => 
Ex2 => 
Ex3 => 
Ex4 => 
Ex5 => 
Ex6 => 
Ex7 => 
Ex8 => 
Ex9 => 
Ex10 => 
Ex11 => 
Ex12 => 
Ex13 => 


<!-- <ol style={{ listStyleType: "upper-roman" }}> 
          <li>akash</li>
          <li>mobile</li>
          <li>laptop</li>
          <li>runner</li>
      </ol>
      <ul style={{ listStyleType: "circle" }}> 
          <li>akash</li>
          <li>mobile</li>
          <li>laptop</li>
          <li>runner</li>
      </ul> -->


      absolute path => specify with the root folder
      relative path => specify with the current folder we r in

    Here are the block-level elements in HTML:

<!-- <address><article><aside><blockquote><canvas><dd><div><dl><dt><fieldset><figcaption><figure><footer><form><h1>-<h6><header><hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video> -->


      Here are the inline elements in HTML:

<!-- <a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt><var> -->

span and divs are used to group similar element together

if inline, internal and external css have same rules in that case inline css will be followed

if internal and external css have same rules then it will depends on order of where link is written

-----------------------------------------
CSS selector in react
id={styles["blog-desc"]}
className={`${styles.uppercase} ${styles.cursive}`}

prefrence 
inline < id < class < type or tag

if there r 2 selecter rule are written 1 after another so the latest selector rule will be applied 

-----------------------------------------------------------------

1 inch = 96 Px
1 px = 1/96 inch = 0.010416 inch

1 rem = 16 px by default most of the browser

if 1 rem = 10px
60 rem = 60*10 = 600
6 rem = 60px

100% = 16px = 1 rem

62.5% = 10px = 1rem

--------------------------------------------------------------------


absolute unit px cm inch

1 px = 1/96 inch

relative unit % vh vw rem em 

rem is relative to the font size of root element

1 rem = font size of root
if font size = 16px
1 rem = 16px

em = is relative to parent

1 em = font size of parent

font weight = 100 - 900

vertical margin do not add 
margin-bottom: 10px;
margin-top: 10px;

horozontal margin will be add
margin-left: 10px;
margin-right: 10px;

padding => within the element
margin=> outside the element

Display  property inline block
for an inline element we cant set its height and width
inline element occupy only that much space that is required
we cant give vertical margins and paddings

inline-block => flexibility of both inline and block 

----------------------------------------
position property in css
1.static => default

2.relative => it will move with respect to its normal or original position & space will be reserved in the page layout
top right left bottom


3.absolute => with respect to 1st positioned parent or nearest positioned parent & no space will be reserved for it in the page layout

4.fixed => stuck with the respect of view port

5.sticky => 
----------------------------------------------
content Box Model => hieght and width that we specified for an element 
actually height & width of the content area

if height and width are 200 & 200 px

and there is border 2px and padding 2px

so total height of the element will be

Height = height of content 200 + border 4 + padding 4 = 208

width = width of content 200+ border 4 + padding 4 = 208

200*200 = 208*208

---------------------------------------------------

Border Box Model => content area height and width adjust autometically

box-sizing property is by default content-box

if height and width are 200 & 200 px

and there is border 2px and padding 2px

so total height of the element will be

Height = height of content 192 + border 4 + padding 4 = 200

width = width of content 192 + border 4 + padding 4 = 200

200*200 = 200*200
-------------------------------------------------

box-shadow

1. horizontal offset => more shadow towards the right
if its negative it will be left side
if it is zero it will be nutral 

2. vertical offset => more shadow towards bottom
positive for bottom
negative for top

3. blur

4. spread

5. color

box-shadow: 0px 0px 6px 4px yellowgreen;

----------------------------------------------------

Flex
default direction is row direction
by default order is 0

---------------------------------------------------

flex wrap
flex-wrap: wrap; will give actual size of an element 

---------------------------------------------------

 align item can take 5 values
1.flex-start work with cross axis not main axis
2.flex-end work with cross axis not main axis
3.center
4.baseline
5.stretch

is used align all the item across the cross axis 
cross axis perpendicular to the main axis 

-----------------------------------------
pseudo classes 1 collon :
pseudo element 2 collon ::
------------------------------------------
Bootstrap 5
container-fluid 100% width

Bootstrap flow
container > row > column > row > column > content

X-small                0px-575px               [col-*]         col-12 col-12 col-12
small                  576px-767px             [col-sm-*]      col-sm-12 col-sm-12 col-sm-12
Medium                 768px - 991px           [col-md-*]      col-md-12 col-md-12 col-md-12
Large                  992px-1199px            [col-lg-*]      col-lg-4 col-lg-6 col-lg-2
Extra Large            1200px - 1399px         [col-xl-*]      col-xl-4 col-xl-6 col-xl-2
Extra extra large      1400px-infinte          [col-xxl-*]     col-xxl-4 col-xxl-6 col-xxl-2


X-small                0px-575px               [col-*]         col-6 col-6 col-12
small                  576px-767px             [col-sm-*]      col-sm-8 col-sm-4 col-sm-6
Medium                 768px - 991px           [col-md-*]      col-md-6 col-md-3 col-md-3
Large                  992px-1199px            [col-lg-*]      col-lg-4 col-lg-6 col-lg-2
Extra Large            1200px - 1399px         [col-xl-*]      col-xl-5 col-xl-5 col-xl-2
Extra extra large      1400px-infinte          [col-xxl-*]     col-xxl-4 col-xxl-6 col-xxl-2

reordering***************
X-small                0px-575px               [col-*]         default 1 2 3
small                  576px-767px             [col-sm-*]      default 1 2 3
Medium                 768px - 991px           [col-md-*]      default 1 2 3 
Large                  992px-1199px            [col-lg-*]      3 1 2
Extra Large            1200px - 1399px         [col-xl-*]      3 1 2
Extra extra large      1400px-infinte          [col-xxl-*]     3 1 2