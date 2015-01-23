window.onload = function() {
  console.log("Hello");

  // this works if put alone in the map.js
  regions[0].mouseover(function(e){
    this.node.style.opacity = 0.7;
    // document.getElementById('region-name').innerHTML = this.data('region');
    console.log("hi");
  }
);
}