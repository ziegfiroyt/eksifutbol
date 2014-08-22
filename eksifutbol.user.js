// ==UserScript==
// @name	eksifutbol
// @namespace	https://github.com/ziegfiroyt/eksifutbol
// @author	ziegfiroyt @github
// @description	futbol bizim isimiz
// @match	https://eksisozluk.com/*
// @match	https://*.eksisozluk.com/*
// @version	0.7
// @grant       none
// ==/UserScript==

// selam beyler nasilsiniz?

$( document ).ready(function() {

var zieg = $('h1#title span[itemprop="name"]').text();

$('#aside').prepend('<iframe width="300" height="250" id="eksifutbol" scrolling="no" frameborder="no" src="https://www.tribundergi.com/eksifutbol.php?q='+zieg+'"></iframe>');
$('#quick-index-nav').append('<li><a class="ara" href="ara?searchform.keywords=maçı&searchform.sortorder=date&p=1">maçlar</a></li>');
$('.aside-link').prepend('<a href="#eksifutbol" class="more-data">ekşi futbol</a>');	

});
