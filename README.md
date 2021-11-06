# updateTextOnCall

## This can be used to update text of an element between a time range. 
### Pass in:
 * The element that holds the text 
 * The text you want it to be for the given time range 
 * The text you want it to revert back to after the given range 
 * The start time 
 * The end time
### That's it.
#### Example:
`updateTextOnCall(someElement, "15% Off store wide!", "Regular Sale Text" "2021-11-05T00:00:00", "2021-11-05T23:59:59");`

```
function updateTextOnCall(
  el,
  stringToBe,
  stringToGoBackTo,
  startDateTime,
  endDateTime
) {
  let now = new Date();
  let start = new Date(startDateTime);
  let end = new Date(endDateTime);

  if (now >= start && now <= end) {
    el.textContent = stringToBe;
  } else {
    el.textContent = stringToGoBackTo;
  }
}
```
