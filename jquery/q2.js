$(function(){
$('#products').on('click', '.product', function(e){
if($(e.target).closest('.fav').length) return;
$('.product').removeClass('highlight');
$(this).addClass('highlight');
});

$('#products').on('mouseenter', '.product', function(){
$(this).find('.details').show();
}).on('mouseleave', '.product', function(){
$(this).find('.details').hide();
});
$('#products').on('click', '.fav', function(e){
e.stopPropagation(); 
$(this).toggleClass('selected');
$(this).closest('.product').toggleClass('selected');
$(this).text($(this).hasClass('selected') ? '♥' : '♡');
});
$('.product[data-discount]').each(function(){
if(parseInt($(this).attr('data-discount'),10) > 0) $(this).addClass('discount');
});
$('#products').on('click', '.product', function(e){
if($(e.target).closest('.fav').length) return; // skip fav clicks
const stock = parseInt($(this).attr('data-stock'),10);
if(stock === 0){
alert($(this).find('.title').text() + ' is out of stock.');
$(this).addClass('out-of-stock');
}
});
});