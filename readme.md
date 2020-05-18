# Introduction
This repository helps you prepare for your coding interview for companies like (Microsoft, Amazon, Facebook, DeliveryHero...)

---

Table of contents
=================
* [Installation](#installation)
* [Algorithms](#algorithims)
	* [Bubble Sort](#bubble-Sort) 	
* [Dependency](#dependency) 

Installation
============

```bash
git clone https://github.com/chehabz/algorithms-Interview-tests.git \
&& cd algorithms-Interview-tests
```

Bubble Sort 
===========
The algorithim operates in `O(n)` time complexity and `O(1)` space at best. The algorithim will loop the array n times and will perform a `swap` of array index content to push the largest integer to the right side of the array. 

```javascript
assert.deepEqual(bubbleSort(
    [-1, 5, 0,  - 5, 3, 2, 8] ),
    [-5, -1, 0, 2, 3,  5, 8);
```

