window.onload = function() {
  console.log("Hello");
  
  for( i=0; i<regions.length; i++ ) {
    
    regions[i].mouseover(function(e){
      this.node.style.opacity = 0.7;
      console.log(this.data('id'));
      // document.getElementById('region-name').innerHTML = this.data('region');
    });

    regions[i].mouseout(function(e) {
      this.node.style.opacity=1;
    });
  }

}