![image](https://user-images.githubusercontent.com/32435970/162164044-8ab12841-13bc-4a0f-9ac9-69a7ceaa0678.png)





## Business use-case
 - Create a filter strip as shown in [**Fig 1**]. The filterstrip will have a default filter item and a *custom filter* button.
 - Clicking on *custom filters* will pop open a drop down list which contains additional list of filter items that could also be applied [**Fig 1**].
 - For Example, The `Customer Filters` list in [**Fig 1**], should contain a group label and list of possible options under it.
 - Clicking on the list-item will load the corresponding filter item. The final Filter Strip view will be similar to [**Fig 2***]
 - Clicking on the filter strip item, will pop open the corresponding filter's options view [**Fig 3**].
 - Two variations of filter strip item is present in the design. One which allows *multi-selection* and other which allows *single selection* [**Fig 3**]
 - Selecting the options from the list and clicking on *apply* should update the filter strip item as show in [**Fig 1**]. It should also send an API
   request with the applied filters as well.
 - Clicking on *cancel*, should revert the selection to its previous stable state.

---

## Final Filter Data Structure

> Everytime, on clicking Submit button from a particular filter pop up container, it should trigger an API request(you can assume it triggers one and mock) and outputs an object with applied filters as shown below. 

```js
{
  invoice_status: [],
  last_responded_from: "",
  last_responded_to: "",
  last_responded_type: "",
}
```
> Please note, at any given point in time, the output from the filter strip should contain only applied filter properties. And on removing a filter strip, it's corresponding props must also be removed.

## Advanced
 - Implementing filter views - A dropdown view with each option representing a different filter view. A filter view would contain a unique label and a set    of filter values that we get from the strip. When we select a particular filter view, the filter strip should load the new set of values [**Fig 2**].
   	```
	[
	  {
	    id: 1,
	    label: 'Paying Customers',
	    filter: {
	      invoice_status: [2, 3],
	    },
	  },
	  {
	    id: 2,
	    label: 'Non paying Customers',
	    filter: {
	      invoice_status: [1],
	      last_responded_from: '2022-11-17',
	      last_responded_to: 'LAST_ONE_MONTH',
	      last_responded_type: '2022-12-17',
	    },
	  },
	]
	```	   
	
   

 - Possibility to load the options in the filter list asynchronously (eg: fetch options from backend)
 - Add 1 more type of filter `Min-Max` with Min and Max fields present

![image](https://user-images.githubusercontent.com/82647863/166099386-1d99d65b-d16e-4f2e-b9ab-99d5d35f5bab.png)

---



## Demo

https://user-images.githubusercontent.com/32435970/167061774-cd9130a1-1478-4588-bc3d-0b298c099d89.mov



