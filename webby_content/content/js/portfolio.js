  $.preload( '#images a' );
  $("#hemi .thumbs a").click( function() {
    var changeSrc = $(this).attr("href");
    var changeAlt = $(this).attr("title");    
    var title = $(this).attr("title");    
    $("#hemi .target").attr({ 
      src: changeSrc,
      alt: changeAlt
    });
    $("#hemi-caption").text(title);
    return false;
  });    
  $("#myassociate .thumbs a").click( function() {
    var changeSrc = $(this).attr("href");
    var changeAlt = $(this).attr("title");    
    var title = $(this).attr("title");    
    $("#myassociate .target").attr({ 
      src: changeSrc,
      alt: changeAlt
    });
    $("#myassociate-caption").text(title);
    return false;
  });      
  $("#abcreative .thumbs a").click( function() {
    var changeSrc = $(this).attr("href");
    var changeAlt = $(this).attr("title");    
    var title = $(this).attr("title");    
    $("#abcreative .target").attr({ 
      src: changeSrc,
      alt: changeAlt
    });
    $("#abc-caption").text(title);
    return false;
  }); 