function selectCrust(){
  var crust_size;
  localStorage.clear();
  var val = document.querySelector('input[name="crustSize"]:checked').value;
  if(val==="small")
    crust_size = "Small";
  else if(val==="medium")
    crust_size = "Medium";
  else if(val==="large")
    crust_size = "Large";
  else if(val==="extraLarge")
    crust_size = "Extra Large";
  localStorage.setItem('crust_size', crust_size);
  window.location.replace("index.html");
}

function makePizza(){
  var list_of_checked_items = [];
  var val = document.getElementById('pepperoni').checked;
  if(val)
    list_of_checked_items.push('Pepperoni');
  val = document.getElementById('italianSausage').checked;
  if(val)
    list_of_checked_items.push('Italian Sausage');
  val = document.getElementById('slicedItalianSausage').checked;
  if(val)
    list_of_checked_items.push('Sliced Italian Sausage');
  val = document.getElementById('beef').checked;
  if(val)
    list_of_checked_items.push('Beef');
  val = document.getElementById('phillySteak').checked;
  if(val)
    list_of_checked_items.push('Philly Steak');
  val = document.getElementById('ham').checked;
  if(val)
    list_of_checked_items.push('Ham');
  val = document.getElementById('bacon').checked;
  if(val)
    list_of_checked_items.push('Bacon');
  val = document.getElementById('salami').checked;
  if(val)
    list_of_checked_items.push('Salami');
  val = document.getElementById('premiumChicken').checked;
  if(val)
    list_of_checked_items.push('Premium Chicken');
  var val = document.getElementById('cheddarCheese').checked;
  if(val)
    list_of_checked_items.push('Cheddar Cheese');
  val = document.getElementById('fetaCheese').checked;
  if(val)
    list_of_checked_items.push('Feta Cheese');
  val = document.getElementById('shreddedParmesanAsiago').checked;
  if(val)
    list_of_checked_items.push('Shredded Parmesan Asiago');
  val = document.getElementById('shreddedProvoloneCheese').checked;
  if(val)
    list_of_checked_items.push('Shredded Provolone Cheese');
  val = document.getElementById('bananaPeppers').checked;
  if(val)
    list_of_checked_items.push('Banana Peppers');
  val = document.getElementById('blackOlives').checked;
  if(val)
    list_of_checked_items.push('Black Olives');
  val = document.getElementById('garlic').checked;
  if(val)
    list_of_checked_items.push('Garlic');
  val = document.getElementById('greenPeppers').checked;
  if(val)
    list_of_checked_items.push('Green Peppers');
  val = document.getElementById('jalapenoPeppers').checked;
  if(val)
    list_of_checked_items.push('Jalapeno Peppers');
  val = document.getElementById('mushrooms').checked;
  if(val)
    list_of_checked_items.push('Mushrooms');
  val = document.getElementById('pineapple').checked;
  if(val)
    list_of_checked_items.push('Pineapple');
  val = document.getElementById('onions').checked;
  if(val)
    list_of_checked_items.push('Onions');
  val = document.getElementById('roastedRedPeppers').checked;
  if(val)
    list_of_checked_items.push('Roasted Red Peppers');
  val = document.getElementById('spinach').checked;
  if(val)
    list_of_checked_items.push('Spinach');
  val = document.getElementById('dicedTomatoes').checked;
  if(val)
    list_of_checked_items.push('Diced Tomatoes');
  val = document.getElementById('hotSauce').checked;
  if(val)
    list_of_checked_items.push('Hot Sauce');
  console.log(list_of_checked_items);
  var toppingsList = list_of_checked_items[0];
  for(var i=1;i<list_of_checked_items.length;i++){
    toppingsList = toppingsList + ',' + list_of_checked_items[i];
  }
  localStorage.setItem('toppingsList', toppingsList);
  window.location.replace("pizza.html");
}

function drawChart() {

  var title = localStorage.getItem('crust_size');

  title = "Crust Size: " + title;

  var toppingsList = localStorage.getItem('toppingsList');
  console.log(toppingsList);

  var list_of_checked_items = toppingsList.split(",");

  var arrayToBeSubmitted = [['Toppings', '% per Pizza']];
  for(var i=0;i<list_of_checked_items.length;i++){
    arrayToBeSubmitted.push(new Array(list_of_checked_items[i], 1));
  }

  console.log(arrayToBeSubmitted);
  console.log(Array.isArray(arrayToBeSubmitted[0]));

  // var data = google.visualization.arrayToDataTable([
  //   ['Task', 'Hours per Day'],
  //   ['Work',     11],
  //   ['Eat',      2],
  //   ['Commute',  2],
  //   ['Watch TV', 2],
  //   ['Sleep',    7]
  // ]);

  var data = google.visualization.arrayToDataTable(arrayToBeSubmitted);

  var options = {
    title: title
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}