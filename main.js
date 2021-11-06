// ************************************updateTextOnCall***********************************************************************
// Pass in the Element, the String you want to show for the time range, the String to revert back to, and the Start **********
// and End times *************************************************************************************************************
// Example *******************************************************************************************************************
// updateTextOnCall(someElement, "15% Off store wide!", "Regular Sale Text" "2021-11-05T00:00:00", "2021-11-05T23:59:59"); ***

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
