$(function() {
	// Lettering.js for article titles
	// $('.post h1').lettering();

	// For styling bullet separate from text
	$('.post li').wrapInner('<span />');

	// Make headings be link-targetable
	$('h2, h3, h4, h5, h6', '.post').wrapInner(function() {
		return '<a name="' + $(this).text() + '" />';
	}).append(function() {
		return '<a class="section" href="#' + $(this).text() + '">&sect;</a>';
	});
});