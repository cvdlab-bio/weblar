# LAR demo extended with new functions and matrix computation web service

[Linear Algebraic Representation demo](http://cvdlab.github.com/lar-demo)

## Installation

```
git clone git@github.com:cvdlab-bio/weblar.git
```

## New functions' documentation

**larProduct:** this function provides the cartesian product between two lar models.

* @param {lar.Model} the first lar model to multiply
* @param {lar.Model} the second one
* @return {lar.Model} the lar model resulting from the lar product.

**HOW-TO test larProduct:**
* Open index.html in "lar-demo" folder.
* Copy one of the available examples in "lar-demo/test/larProduct_examples.js" in the javascript console.
* Enjoy :)

**larFacets_simple:** this stable version allows us to extract facets from a lar model. The input model has to be provided also with external cells. This version also works on **Convex Cells**.
* @param {lar.Model} a lar model with vertices and cells
* @param {Number} dim is the dimension of the lar model
* @param {Boolean} true if the first argument is the lar model as described above, false if it's an array containing vertices and the Md matrix (with the external cells too).
* @return {lar.Model} the lar model with all the dim-1 cells

**HOW-TO test larFacets_simple:**
* Open index.html in "lar-demo" folder.
* Copy one of the available examples in "lar-demo/test/larFacets_triangular_examples.js" or in "lar-demo/test/larFacets_squared_examples.js" in the javascript console.
* Enjoy :)

**larFacets:** this version allows us to extract facets from a lar model. The input model hasn't to be provided with external cells but the external space is retrieved through the boundary function.

**CAVEAT:** currently the boundary function works only on simplexes, so larFacets too. 
* @param {lar.Model} a lar model with vertices and cells
* @param {Number} dim is the dimension of the lar model
* @return {lar.Model} the lar model with all the dim-1 cells

**HOW-TO test larFacets:**
* Open index.html in "lar-demo" folder.
* Copy one of the available examples in "lar-demo/test/larFacets_advanced_examples.js" in the javascript console.
* Enjoy :)



## License

(The MIT License)

Copyright (c) 2012 Enrico Marino and Federico Spini for CVD Lab ([http://dia.uniroma3.it/~cvdlab](http://dia.uniroma3.it/~cvdlab))

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
