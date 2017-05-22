//Change Pagination Manually
var page = 0

$(function setup() {

  //Choose Div to add
  var productContainer   = document.getElementById("productContainer");
  var refContainer       = document.getElementById("refContainer");

  //Htmls
  var col3               = '<div class="registerItem col-3">'
  var col2               = '<div class="filler-block col-3">'
  var col3reference      = '<div class="registerRefer">'
  var addImg             = '<img align="middle" src="http://'
  var productDescription = '<li class="productDescription">'
  var listStart          = '<ul>'
  var listEnd            = '</ul>'
  var listItemStart      = '<li>'
  var listItemStartImg   = '<li class="reference-center">'
  var listItemEnd        = '</li>'
  var priceDescription   = '<span class="by">Por: </span>' + '<span class="by-price">'
  var paymentConditions  = '<div class="paymentConditions">'
  var noInterestRates    = '<span class="noInterestRates">sem juros</span>'

  $.ajax({
      url: 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X',
      dataType: "jsonp",
      jsonpCallback: 'X',
      success:

      function loadProducts (data) {
          console.log('success', data)

          // Reference Block
          var referenceBlock = '';
          for (i = 0; i < 1; i++) {
            referenceBlock
            refContainer.innerHTML
            +=   col3reference
            +  '<a href="http:' + data.data.reference.item.detailUrl + '">'
            +   listStart
            +   listItemStartImg + addImg + data.data.reference.item.imageName + '">' + listItemEnd
            +   productDescription + data.data.reference.item.name
            +   listItemStart + priceDescription + data.data.reference.item.price + listItemEnd
            +   listItemStart + paymentConditions +
            data.data.reference.item.productInfo.paymentConditions + '<br>sem juros'  +'</div>' + listItemEnd
            +   listEnd
            +   '</a>'

            registerProducts()
          }

          //Recommendation Block
          function registerProducts() {
            var htmlPhotoTag = '';
            for (i = 0; i < data.data.recommendation.length; i++) {
              htmlPhotoTag
              productContainer.innerHTML
              +=  col3
              +   '<a class="registerItem" href="http:' + data.data.recommendation[i + page].detailUrl + '">'
              +   listStart
              +   listItemStart + addImg + data.data.recommendation[i + page].imageName + '">' + listItemEnd
              +   productDescription + data.data.recommendation[i + page].name
              +   listItemStart + priceDescription + data.data.recommendation[i + page].price + listItemEnd
              +   listItemStart + paymentConditions +
              data.data.recommendation[i + page].productInfo.paymentConditions + '<br>sem juros'  +'</div>' + listItemEnd
              +   listEnd
              +   '</a>'

            }

            registerFiller()
          }

          function registerFiller() {
              productContainer.innerHTML
              +=  col2 + '</div>'
          }

          var scrolLeft = $('#productContainer').scrollLeft();
          var windw = $('#productContainer').width();//important
          var documet = $(document).width();
            $('#productContainer').scroll(function() {
                if($('#productContainer').scrollLeft() + windw == documet){
                    console.log("right!");
                }
            });

          //Pagination Next
          $('.next-arrow-container').click(function() {
            event.preventDefault();
            $('#productContainer').animate({
              scrollLeft: "+=753px"
            }, "slow");
          });

          //Pagination Prev
          $('.prev-arrow-container').click(function() {
            event.preventDefault();
            $('#productContainer').animate({
              scrollLeft: "-=753px"
            }, "slow");
          });
        }
  });
});
